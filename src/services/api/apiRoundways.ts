import { isSameDate } from "../../utils/helpers";
import roundwaysJSON from "../data/roundways.json";
import airportsJSON from "../data/airports.json";

const delay = function (ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

type Airport = {
  fullName: string;
  acronym: string;
  location: string;
};

type Pax = {
  adult: number;
  child: number;
  infant: number;
};

type SearchContext = {
  from: Airport;
  to: Airport;
  fromDate: Date;
  toDate: Date;
  pax: Pax;
  travelClass:
    | "economy"
    | "premium-economy"
    | "business"
    | "premium-business"
    | "first-class"
    | "premium-first-class";
  tripType: "one-way" | "round-way";
};

interface FlightApiData {
  segments: {
    go: { departureAirport: string; departureTime: string }[];
    back: { departureAirport: string; departureTime: string }[];
  };
  class: string;
}

export async function getRoundwaysFlightsData(searchFields: SearchContext) {
  await delay(500);

  const data = JSON.parse(JSON.stringify(roundwaysJSON));
  console.log(searchFields);
  const filteredData = data.filter((flight: FlightApiData) => {
    console.log(flight.segments.go[0].departureAirport);
    console.log(
      isSameDate(
        new Date(flight.segments.go[0].departureTime),
        new Date(searchFields.fromDate)
      )
    );
    console.log(flight.segments.back[0].departureAirport);
    console.log(
      isSameDate(
        new Date(flight.segments.back[0].departureTime),
        new Date(searchFields.toDate)
      )
    );

    return (
      flight.segments.go[0].departureAirport === searchFields.from.fullName &&
      isSameDate(
        new Date(flight.segments.go[0].departureTime),
        new Date(searchFields.fromDate)
      ) &&
      flight.segments.back[0].departureAirport === searchFields.to.fullName &&
      isSameDate(
        new Date(flight.segments.back[0].departureTime),
        new Date(searchFields.toDate)
      ) &&
      flight.class.toLowerCase() === searchFields.travelClass.toLowerCase()
    );
  });

  return filteredData;
}

export function getAllAirportsData() {
  const data = JSON.parse(JSON.stringify(airportsJSON));
  return data;
}
