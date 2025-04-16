"use client";

import type React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  styled,
  Tabs,
  Tab,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// Custom styled components
const HeaderContainer = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const SearchInfoBar = styled(Box)({
  backgroundColor: "#2cd889",
  padding: "8px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "4px",
  color: "white",
});

const ModifySearchButton = styled(Button)({
  backgroundColor: "#5d5a6f",
  color: "white",
  borderRadius: 4,
  padding: "6px 16px",
  fontWeight: "bold",
  fontSize: "0.75rem",
  "&:hover": {
    backgroundColor: "#4d4a5f",
  },
});

const AirlineTabs = styled(Tabs)({
  minHeight: "60px",
  borderRadius: "4px",
  "& .MuiTabs-indicator": {
    display: "none",
  },
});

const AirlineTab = styled(Tab)({
  minHeight: "60px",
  opacity: 1,
  padding: "8px 24px",
  textTransform: "none",
  borderBottom: "1px solid #e0e0e0",
  "&.Mui-selected": {
    color: "inherit",
    borderBottom: "2px solid #2cd889",
  },
  borderRadius: "4px",
});

const AirlineLogo = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginRight: "8px",
});

const AirlinePrice = styled(Typography)({
  color: "#2cd889",
  fontSize: "0.9rem",
  fontWeight: "normal",
});

interface Airline {
  code: string;
  name: string;
  logo: React.ReactNode;
  price: number;
}

interface FlightSearchHeaderProps {
  origin: string;
  destination: string;
  totalFlights: number;
  departureDate: string;
  returnDate: string;
  travelers: number;
  airlines: Airline[];
  onAirlineChange?: (airlineCode: string) => void;
  onModifySearch?: () => void;
}

const FlightSearchHeader: React.FC<FlightSearchHeaderProps> = ({
  origin,
  destination,
  totalFlights,
  departureDate,
  returnDate,
  travelers,
  airlines,
  onAirlineChange,
  onModifySearch,
}) => {
  const [selectedAirline, setSelectedAirline] = useState<string>(
    airlines[0]?.code || ""
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleAirlineChange = (
    _event: React.SyntheticEvent,
    newValue: string
  ) => {
    setSelectedAirline(newValue);
    onAirlineChange?.(newValue);
  };

  return (
    <HeaderContainer>
      <SearchInfoBar>
        <Box>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", fontSize: isMobile ? "0.9rem" : "1rem" }}
          >
            {origin} - {destination} | Total {totalFlights} Flights
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: isMobile ? "0.75rem" : "0.85rem", mt: 0.5 }}
          >
            {departureDate} - {returnDate} | {travelers} Travelers
          </Typography>
        </Box>
        <ModifySearchButton variant="contained" onClick={onModifySearch}>
          MODIFY SEARCH
        </ModifySearchButton>
      </SearchInfoBar>

      <Paper elevation={0} square style={{ borderRadius: "4px" }}>
        <AirlineTabs
          value={selectedAirline}
          onChange={handleAirlineChange}
          variant="fullWidth"
          aria-label="airline tabs"
        >
          {airlines.map((airline) => (
            <AirlineTab
              key={airline.code}
              value={airline.code}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AirlineLogo>{airline.logo}</AirlineLogo>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                      {airline.code}
                    </Typography>
                    <AirlinePrice>
                      BDT {airline.price.toLocaleString()}
                    </AirlinePrice>
                  </Box>
                </Box>
              }
            />
          ))}
        </AirlineTabs>
      </Paper>
    </HeaderContainer>
  );
};

export default FlightSearchHeader;
