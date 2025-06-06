"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Container,
  type SelectChangeEvent,
  Typography,
  styled,
} from "@mui/material";
import { FlightTakeoff, Hotel, Tour, CreditCard } from "@mui/icons-material";
import SelectBox from "../../ui/Select";
import TripType from "./TripType";
import MultiCity from "./MultiCity";
import HotelBookingWidget from "../hotel/HotelBooking";
import { useNavigate } from "react-router";

import { getAllAirportsData } from "../../services/api/apiRoundways";
import TourBookingWidget from "../tour/TourBooking";
import Visa from "../tour/Visa";
import { useSearch } from "../../context/SearchContext";
const allAirports = getAllAirportsData();

const RadioButton = styled(Box)({
  width: 24,
  height: 24,
  borderRadius: "50%",
  border: "2px solid #2dd4bf",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 8,
});

const RadioButtonInner = styled(Box)({
  width: 14,
  height: 14,
  borderRadius: "50%",
  backgroundColor: "#2dd4bf",
});

const SearchButton = styled(Button)({
  backgroundColor: "#2dd4bf",
  color: "white",
  borderRadius: "4px",
  padding: "12px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#20b2aa",
  },
});

interface Airport {
  airportName: string;
  acronym: string;
  city: string;
  country: string;
}

export default function SearchBox() {
  const navigate = useNavigate();

  const [tabValue, setTabValue] = useState(0);
  const [tripType, setTripType] = useState("round-way");
  const [adult, setAdult] = useState("1");
  const [child, setChild] = useState("0");
  const [infant, setInfant] = useState("0");
  const [travelClass, setTravelClass] = useState("Economy");
  const { handleSearch } = useSearch() as { handleSearch: any };
  const [fromAirport, setFromAirport] = useState<Airport>({
    airportName: "Hazrat Shahjalal Intl Airport",
    acronym: "DAC",
    city: "Dhaka",
    country: "Bangladesh",
  });
  const [toAirport, setToAirport] = useState<Airport>({
    airportName: "Cox's Bazar Airport",
    acronym: "CXB",
    city: "Cox's Bazar",
    country: "Bangladesh",
  });
  const [fromDate, setFromDate] = useState(new Date("23 Apr 2025"));
  const [toDate, setToDate] = useState(new Date("30 Apr 2025"));

  const [cities, setCities] = useState([
    { from: allAirports[0], to: allAirports[1], fromNum: 0, toNum: 1 },
    { from: allAirports[1], to: allAirports[2], fromNum: 1, toNum: 2 },
  ]);
  // console.log(cities);
  function addNewCity() {
    setCities((prevCities: any[]) => {
      const last = prevCities[prevCities.length - 1];
      const newCity = allAirports[prevCities[prevCities.length - 1].toNum + 1];
      return [
        ...prevCities,
        {
          from: { ...last.to },
          to: newCity,
          fromNum: last.toNum,
          toNum: last.toNum + 1,
        },
      ];
    });
  }

  function removeNewCity(city: any) {
    setCities((prevCities) => {
      const cities = prevCities.filter((prev) => {
        if (prev.fromNum === city.fromNum && prev.toNum === city.toNum) {
          return false;
        }
        return true;
      });

      return cities;
    });
  }

  const handleTripTypeChange = (type: string) => {
    setTripType(type);
  };

  const handleAdultChange = (event: SelectChangeEvent) => {
    setAdult(event.target.value);
  };

  const handleChildChange = (event: SelectChangeEvent) => {
    setChild(event.target.value);
  };

  const handleInfantChange = (event: SelectChangeEvent) => {
    setInfant(event.target.value);
  };

  const handleClassChange = (event: SelectChangeEvent) => {
    setTravelClass(event.target.value);
  };

  const handleSubmit = () => {
    if (tripType === "round-way") {
      handleSearch({
        from: fromAirport,
        to: toAirport,
        fromDate,
        toDate,
        tripType,
        travelClass,
        pax: {
          adult: Number(adult),
          child: Number(child),
          infant: Number(infant),
        },
      });
    } else if (tripType === "one-way") {
      handleSearch({
        from: fromAirport,
        to: toAirport,
        fromDate,
        tripType,
        travelClass,
        pax: {
          adult: Number(adult),
          child: Number(child),
          infant: Number(infant),
        },
      });
    }

    navigate(`/${tripType}search`);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        width: "100%",
        padding: "30px",
        borderRadius: "10px",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "120px",
      }}
    >
      <Container
        maxWidth="lg"
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <Box
          sx={{
            padding: "4px",
            bgcolor: "white",
            borderRadius: "30px",
            width: "50%",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              bgcolor: "#f5f5f5",
              borderRadius: "30px",
              padding: "2px",
            }}
          >
            <Button
              startIcon={<FlightTakeoff />}
              size="small"
              sx={{
                flex: 1,
                minHeight: 0,
                m: 0,
                minWidth: 0,
                p: 0,
                y: 0,
                bgcolor: tabValue === 0 ? "#2dd4bf" : "transparent",
                color: tabValue === 0 ? "white" : "#666",
                borderRadius: "30px",
                textTransform: "uppercase",
                lineHeight: 0,
                "&:hover": {
                  bgcolor: tabValue === 0 ? "#2dd4bf" : "rgba(0,0,0,0.04)",
                },
              }}
              onClick={() => setTabValue(0)}
            >
              Flight
            </Button>
            <Button
              startIcon={<Hotel />}
              sx={{
                flex: 1,
                bgcolor: tabValue === 1 ? "#2dd4bf" : "transparent",
                color: tabValue === 1 ? "white" : "#666",
                borderRadius: "30px",
                textTransform: "uppercase",
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: tabValue === 1 ? "#2dd4bf" : "rgba(0,0,0,0.04)",
                },
              }}
              onClick={() => setTabValue(1)}
            >
              Hotel
            </Button>
            <Button
              startIcon={<Tour />}
              sx={{
                flex: 1,
                bgcolor: tabValue === 2 ? "#2dd4bf" : "transparent",
                color: tabValue === 2 ? "white" : "#666",
                borderRadius: "30px",
                textTransform: "uppercase",
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: tabValue === 2 ? "#2dd4bf" : "rgba(0,0,0,0.04)",
                },
              }}
              onClick={() => setTabValue(2)}
            >
              Tour
            </Button>
            <Button
              startIcon={<CreditCard />}
              sx={{
                flex: 1,
                bgcolor: tabValue === 3 ? "#2dd4bf" : "transparent",
                color: tabValue === 3 ? "white" : "#666",
                borderRadius: "30px",
                textTransform: "uppercase",
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: tabValue === 3 ? "#2dd4bf" : "rgba(0,0,0,0.04)",
                },
              }}
              onClick={() => setTabValue(3)}
            >
              Visa
            </Button>
          </Box>
        </Box>

        {tabValue === 0 && (
          <Box
            sx={{
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              display: "grid",
              gridTemplateColumns: "3fr 1fr",
            }}
          >
            <Box sx={{ p: 3, borderRadius: "10px", bgcolor: "white" }}>
              <Box sx={{ display: "flex", mb: 3 }}>
                <Box
                  onClick={() => handleTripTypeChange("round-way")}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mr: 3,
                    cursor: "pointer",
                  }}
                >
                  <RadioButton style={{ width: "12px", height: "12px" }}>
                    {tripType === "round-way" && (
                      <RadioButtonInner
                        sx={{ fontSize: "14px" }}
                        style={{
                          width: "12px",
                          height: "12px",
                          outline: "2px solid black",
                        }}
                      />
                    )}
                  </RadioButton>
                  <Typography
                    sx={{
                      color: tripType === "round-way" ? "#2dd4bf" : "#666",
                      fontWeight: "medium",
                      fontSize: "14px",
                    }}
                  >
                    ROUND-WAY
                  </Typography>
                </Box>

                <Box
                  onClick={() => handleTripTypeChange("one-way")}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mr: 3,
                    cursor: "pointer",
                  }}
                >
                  <RadioButton
                    style={{
                      width: "12px",
                      height: "12px",
                    }}
                  >
                    {tripType === "one-way" && (
                      <RadioButtonInner
                        style={{
                          width: "12px",
                          height: "12px",
                          outline: "2px solid black",
                        }}
                      />
                    )}
                  </RadioButton>
                  <Typography
                    sx={{
                      color: tripType === "one-way" ? "#2dd4bf" : "#666",
                      fontWeight: "medium",
                      fontSize: "14px",
                    }}
                  >
                    ONE-WAY
                  </Typography>
                </Box>

                <Box
                  onClick={() => handleTripTypeChange("multi-city")}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <RadioButton
                    style={{
                      width: "12px",
                      height: "12px",
                    }}
                  >
                    {tripType === "multi-city" && (
                      <RadioButtonInner
                        style={{
                          width: "12px",
                          height: "12px",
                          outline: "2px solid black",
                        }}
                      />
                    )}
                  </RadioButton>
                  <Typography
                    sx={{
                      color: tripType === "multi-city" ? "#2dd4bf" : "#666",
                      fontWeight: "medium",
                      fontSize: "14px",
                    }}
                  >
                    MULTI-CITY
                  </Typography>
                </Box>
              </Box>

              {tripType === "round-way" && (
                <TripType
                  tripType="round-way"
                  fromAcronym={fromAirport.acronym}
                  toAcronym={toAirport.acronym}
                  setFromAirport={setFromAirport}
                  setToAirport={setToAirport}
                  fromDate={fromDate}
                  setFromDate={setFromDate}
                  toDate={toDate}
                  setToDate={setToDate}
                />
              )}

              {tripType === "one-way" && (
                <TripType
                  tripType="one-way"
                  fromAcronym={fromAirport.acronym}
                  toAcronym={toAirport.acronym}
                  setFromAirport={setFromAirport}
                  setToAirport={setToAirport}
                  fromDate={fromDate}
                  setFromDate={setFromDate}
                />
              )}
              {tripType === "multi-city" && (
                <MultiCity cities={cities} removeNewCity={removeNewCity} />
              )}
            </Box>

            <Box
              sx={{
                padding: "12px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                bgcolor: "white",
              }}
            >
              <Box sx={{ display: "flex", mb: 2, gap: "3px" }}>
                <SelectBox
                  value={adult}
                  onChange={handleAdultChange}
                  options={[
                    { value: "1", text: "1 ADULT" },
                    { value: "2", text: "2 ADULT" },
                    { value: "3", text: "3 ADULT" },
                    { value: "4", text: "4 ADULT" },
                    { value: "5", text: "5 ADULT" },
                    { value: "6", text: "6 ADULT" },
                    { value: "7", text: "7 ADULT" },
                    { value: "8", text: "8 ADULT" },
                    { value: "9", text: "9 ADULT" },
                  ]}
                />

                <SelectBox
                  value={child}
                  onChange={handleChildChange}
                  options={[
                    { value: "0", text: "0 CHILD" },
                    { value: "1", text: "1 CHILD" },
                    { value: "2", text: "2 CHILD" },
                    { value: "3", text: "3 CHILD" },
                    { value: "4", text: "4 CHILD" },
                    { value: "5", text: "5 CHILD" },
                  ]}
                />

                <SelectBox
                  value={infant}
                  onChange={handleInfantChange}
                  options={[
                    { value: "0", text: "0 INFANT" },
                    { value: "1", text: "1 INFANT" },
                    { value: "2", text: "2 INFANT" },
                    { value: "3", text: "3 INFANT" },
                    { value: "4", text: "4 INFANT" },
                  ]}
                />
              </Box>

              <Box sx={{ width: "100%", mb: "auto" }}>
                <SelectBox
                  value={travelClass}
                  onChange={handleClassChange}
                  options={[
                    { value: "economy", text: "Economy" },
                    { value: "premium-economy", text: "Premium Economy" },
                    { value: "business", text: "Business" },
                    { value: "premium-business", text: "Premium Business" },
                    { value: "first-class", text: "First Class" },
                    {
                      value: "premium-first-class",
                      text: "Premium First Class",
                    },
                  ]}
                />
              </Box>

              <SearchButton
                onClick={handleSubmit}
                fullWidth
                style={{
                  minWidth: 0,
                  minHeight: 0,
                  padding: "4px 8px",
                  background: "#32d095",
                  fontWeight: "normal",
                }}
              >
                SEARCH FOR FLIGHT
              </SearchButton>

              {tripType === "multi-city" && (
                <SearchButton
                  fullWidth
                  style={{
                    minWidth: 0,
                    minHeight: 0,
                    padding: "4px 8px",
                    background: "#32d095",
                    fontWeight: "normal",
                    marginTop: "10px",
                  }}
                  onClick={addNewCity}
                >
                  Add City
                </SearchButton>
              )}
            </Box>
          </Box>
        )}

        {tabValue === 1 && <HotelBookingWidget />}
        {tabValue === 2 && <TourBookingWidget />}
        {tabValue === 3 && <Visa />}
      </Container>
    </Container>
  );
}
