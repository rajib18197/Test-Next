import { useEffect, useState } from "react";
import { useSearch } from "../../context/SearchContext";
import FlightCard from "./FlightCard";
import { getRoundwaysFlightsData } from "../../services/api/apiRoundways";

export default function FlightList() {
  const { searchState } = useSearch();
  const [flightData, setFlightData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadFlights() {
      setIsLoading(true);
      const data = await getRoundwaysFlightsData(searchState);
      console.log(data);
      setIsLoading(false);
    }

    loadFlights();
  }, []);

  return (
    <FlightCard
      airlineName="USBangla Airlines"
      airlineLogo="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gg-dkfnfc3aHqUC7K2znUmyWj2yYtXW6V.png"
      flightNumber="BS-141"
      departureCode="DAC"
      departureAirport="Hazrat Shahjalal Intl Airport"
      departureTime="07:20"
      departureDate="Sun 13 Apr 2025"
      arrivalCode="CXB"
      arrivalAirport="COXs Bazar Airport"
      arrivalTime="08:25"
      arrivalDate="Sun 13 Apr 2025"
      duration="1H 5Min"
      flightType="NON STOP"
      refundable={true}
      flightClass="Economy"
      baggage="20 Kg"
      currentPrice={11078}
      originalPrice={12398}
    />
  );
}
