import { useParams } from "react-router";
import FlightList from "../features/flight/FlightList";
// import FilterBox from "../features/flight/FilterBox";
import FlightSearchHeader from "../features/flight/SearchHeader";
import { Box, Container, styled } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import FilterBox from "../features/flight/FilterBox";
import LayoverFilter from "../features/flight/Layover";
import DepartureTimesFilter from "../features/flight/Departure";

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
export default function Flights() {
  const { tripType } = useParams();
  console.log(tripType);
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
            origin="DAC"
            destination="CXB"
            totalFlights={48}
            departureDate="13 Apr 2025"
            returnDate="15 Apr 2025"
            travelers={1}
            airlines={airlines}
            onAirlineChange={(airlineCode) =>
              console.log("Selected airline:", airlineCode)
            }
            onModifySearch={() => console.log("Modify search clicked")}
          />
          <FlightList />
        </div>
      </div>
    </Container>
  );
}
