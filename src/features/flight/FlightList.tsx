import { useEffect, useState } from "react";
import { useSearch } from "../../context/SearchContext";
import FlightCard from "./FlightCard";
import { getRoundwaysFlightsData } from "../../services/api/apiRoundways";

const formatTime = (isoString) =>
  new Date(isoString).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

export default function FlightList({ flightData }) {
  return (
    <>
      {flightData.map((flight) => {
        return (
          <FlightCard
            airlineLogo=""
            airlineName={flight.segments.go[0].marketingcareerName} // "USBangla Airlines"
            flightNumber={`${flight.segments.go[0].marketingcareer}-${flight.segments.go[0].marketingflight}`} // "BS-157"
            departureCode={flight.segments.go[0].departure} // "DAC"
            departureAirport={flight.segments.go[0].departureAirport} // "Hazrat Shahjalal Intl Airport"
            departureTime={formatTime(flight.segments.go[0].departureTime)} // "16:35"
            departureDate={flight.godepartureDate} // "Wed 23 Apr 2025"
            arrivalCode={flight.segments.go[0].arrival} // "CXB"
            arrivalAirport={flight.segments.go[0].arrivalAirport} // "Cox's Bazar Airport"
            arrivalTime={formatTime(flight.segments.go[0].arrivalTime)} // "17:40"
            arrivalDate={flight.goarrivalDate} // "Wed 23 Apr 2025"
            duration={flight.goflightduration} // "1H 5Min"
            flightType={
              flight.transit.go.transit1 === "0" ? "NON STOP" : "Transit"
            } // "NON STOP"
            refundable={flight.refundable} // "Refundable"
            flightClass={flight.class} // "economy"
            baggage={`${flight.bags} Kg`} // "20 Kg"
            currentPrice={flight.netfare} // 11128
            originalPrice={flight.customerPrice} // 12398
            flight={flight}
          />
        );
      })}
    </>
  );
}
