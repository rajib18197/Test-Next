"use client";

import type React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  type SelectChangeEvent,
  Tab,
  Tabs,
  Typography,
  styled,
} from "@mui/material";
import {
  FlightTakeoff,
  LocationOn,
  CalendarMonth,
  Hotel,
  Tour,
  CreditCard,
} from "@mui/icons-material";
import SelectionBox from "./SelectionBox";
import SelectBox from "../../ui/Select";
import { useSearch } from "../../context/SearchContext";
import AirportSelection from "./AutoComplete";
import DatePicker from "./DatePicker";

// Custom styled components
const StyledTabs = styled(Tabs)({
  backgroundColor: "white",
  borderRadius: "30px",
  minHeight: "48px",
  "& .MuiTabs-indicator": {
    display: "none",
  },
});

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "uppercase",
  fontWeight: "bold",
  fontSize: "14px",
  minHeight: "48px",
  color: "#666",
  "&.Mui-selected": {
    color: "white",
    backgroundColor: "#2dd4bf",
    borderRadius: "30px",
    margin: "0 4px",
  },
}));

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

const LocationField = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#e3f2fd",
  borderRadius: "4px",
  padding: "12px",
  marginBottom: "10px",
});

const DateField = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#e3f2fd",
  borderRadius: "4px",
  padding: "12px",
});

const StyledSelect = styled(Select)({
  backgroundColor: "#e3f2fd",
  borderRadius: "4px",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSelect-select": {
    padding: "12px",
  },
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

export default function SearchBox() {
  const [tabValue, setTabValue] = useState(0);
  const [tripType, setTripType] = useState("round-way");
  const [adult, setAdult] = useState("1");
  const [child, setChild] = useState("0");
  const [infant, setInfant] = useState("0");
  const [travelClass, setTravelClass] = useState("Economy");

  const [fromAirport, setFromAirport] = useState("");
  const [toAirport, setToAirport] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const { searchState, handleSearch } = useSearch();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

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
        infant: Number(child),
      },
    });
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

            <Box sx={{ display: "flex" }}>
              <SelectionBox
                labelText="FROM"
                acronym={fromAirport.acronym || "DAC"}
              >
                <AirportSelection setAirport={setFromAirport} />
                <DatePicker onChange={setFromDate} />
              </SelectionBox>

              <Box
                sx={{
                  display: "flex",
                  // flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "120px",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    width: 120,
                    height: 120,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ height: "100%", width: "100%" }}>
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jr0dk7"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="FlightOutlinedIcon"
                      style={{
                        transform: "rotate(90deg)",
                        width: "80px",
                        height: "80px",
                      }}
                    >
                      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"></path>
                    </svg>

                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10w0s29"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="FlightOutlinedIcon"
                      style={{
                        width: "80px",
                        height: "80px",
                        transform: "rotate(-90deg) translateX(30px)",
                      }}
                    >
                      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"></path>
                    </svg>
                  </div>
                </Box>
              </Box>

              <SelectionBox labelText="TO" acronym={toAirport.acronym || "CXB"}>
                <AirportSelection setAirport={setToAirport} />
                <DatePicker onChange={setToDate} />
              </SelectionBox>
            </Box>
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
                  { value: "premium-first-class", text: "Premium First Class" },
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
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
