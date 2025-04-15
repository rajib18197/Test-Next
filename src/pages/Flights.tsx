import { useParams } from "react-router";
import FlightList from "../features/flight/FlightList";
// import FilterBox from "../features/flight/FilterBox";
import FlightSearchHeader from "../features/flight/SearchHeader";
import { Box, Container, styled } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import FilterBox from "../features/flight/FilterBox";
import LayoverFilter from "../features/flight/Layover";
import DepartureTimesFilter from "../features/flight/Departure";
import { useEffect, useState } from "react";
import { useSearch } from "../context/SearchContext";
import { getRoundwaysFlightsData } from "../services/api/apiRoundways";

// Custom airline logos
const BSLogo = () => (
  <Box
    component="img"
    src="/placeholder.svg?height=30&width=30"
    alt="BS Airline"
    sx={{ height: 30, width: 30, objectFit: "contain" }}
  />
);

const BGLogo = () => (
  <Box
    sx={{
      height: 30,
      width: 30,
      borderRadius: "50%",
      backgroundColor: "#ff0000",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <FlightIcon sx={{ color: "white", fontSize: "1rem" }} />
  </Box>
);

const FilterContainerBox = styled("div")({
  position: "sticky",
  top: 0,
  height: "90vh",
  overflowY: "scroll",

  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const airlines = [
  {
    code: "BS",
    name: "US-Bangla Airlines",
    logo: <BSLogo />,
    price: 11077,
  },
  {
    code: "BG",
    name: "Biman Bangladesh",
    logo: <BGLogo />,
    price: 11279,
  },
];

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }); // e.g., 23 Apr 2025
}

export default function Flights() {
  const { searchState } = useSearch();
  const [flightData, setFlightData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadFlights() {
      setIsLoading(true);
      const data = await getRoundwaysFlightsData(searchState);
      console.log(data);
      setFlightData(data);
      setIsLoading(false);
    }

    loadFlights();
  }, []);

  return (
    <Container>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "220px 1fr",
          gap: "10px",
        }}
      >
        <FilterContainerBox>
          <FilterBox />
          <DepartureTimesFilter />
          <LayoverFilter />
        </FilterContainerBox>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <FlightSearchHeader
            origin={searchState.from.acronym}
            destination={searchState.to.acronym}
            totalFlights={flightData.length}
            departureDate={formatDate(searchState.fromDate)}
            returnDate={formatDate(searchState.toDate)}
            travelers={
              searchState.pax.adult +
              searchState.pax.child +
              searchState.pax.infant
            }
            airlines={airlines}
            onAirlineChange={(airlineCode) =>
              console.log("Selected airline:", airlineCode)
            }
            onModifySearch={() => console.log("Modify search clicked")}
          />
          <FlightList flightData={flightData} />
        </div>
      </div>
    </Container>
  );
}
