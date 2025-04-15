"use client";

import type React from "react";
import { useState } from "react";
import {
  TextField,
  List,
  ListItem,
  Typography,
  Paper,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// Define the type for our airport data
interface AirportData {
  city: string;
  country: string;
  airportName: string;
  acronym: string;
}

// Sample data based on the image
const airportData: AirportData[] = [
  {
    city: "Dhaka",
    country: "Bangladesh",
    airportName: "Hazrat Shahjalal Intl Airport",
    acronym: "DAC",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    airportName: "Dubai International Airport",
    acronym: "DXB",
  },
  {
    city: "Barishal",
    country: "Bangladesh",
    airportName: "Barishal Airport",
    acronym: "BZL",
  },
  {
    city: "Jashore",
    country: "Bangladesh",
    airportName: "Jashore Airport",
    acronym: "JSR",
  },
  {
    city: "Rajshahi",
    country: "Bangladesh",
    airportName: "Rajshahi Airport",
    acronym: "RJH",
  },
  {
    city: "Saidpur",
    country: "Bangladesh",
    airportName: "Saidpur Airport",
    acronym: "SPD",
  },
];

const DestinationSelector: React.FC = ({
  onSelectCity,
}: {
  onSelectCity: (city: string) => void;
}) => {
  const [searchText, setSearchText] = useState("");

  // Filter airports based on search text
  const filteredAirports =
    searchText.trim() === ""
      ? airportData
      : airportData.filter(
          (airport) =>
            airport.city.toLowerCase().includes(searchText.toLowerCase()) ||
            airport.country.toLowerCase().includes(searchText.toLowerCase()) ||
            airport.airportName
              .toLowerCase()
              .includes(searchText.toLowerCase()) ||
            airport.acronym.toLowerCase().includes(searchText.toLowerCase())
        );

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: 220,
        // border: "1px solid #00c853",
        borderRadius: "4px",
        padding: "3px",
        background: "#32d095",
        overflow: "hidden",
      }}
    >
      <div style={{ background: "white" }}>
        <TextField
          fullWidth
          placeholder="City/Hotel/Street Name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {/* <SearchIcon color="disabled" /> */}
              </InputAdornment>
            ),
            sx: {
              fontSize: "14px",
              borderRadius: 0,
              "& fieldset": {
                border: "none",
                // borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
              },
              padding: "4px 12px",
            },
          }}
        />

        <List disablePadding>
          {filteredAirports.map((airport, index) => (
            <ListItem
              key={airport.acronym}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 16px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#101d28",
                  color: "white !important",
                },
                // borderBottom:
                //   index < filteredAirports.length - 1
                //     ? "1px solid rgba(0, 0, 0, 0.08)"
                //     : "none",
              }}
              onClick={() =>
                onSelectCity(`${airport.city}, ${airport.country}`)
              }
            >
              <Typography
                sx={{
                  color: "#555",
                  fontSize: "14px",
                }}
              >
                {airport.city},{airport.country}
              </Typography>
              <Typography
                sx={{
                  color: "#555",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {airport.acronym}
              </Typography>
            </ListItem>
          ))}
        </List>
      </div>
    </Paper>
  );
};

export default DestinationSelector;
