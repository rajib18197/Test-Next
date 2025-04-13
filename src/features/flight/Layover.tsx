"use client";

import type React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  styled,
  IconButton,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// Custom styled components
const FilterContainer = styled(Paper)({
  borderRadius: 8,
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  width: "100%",
  maxWidth: "350px",
});

const FilterSection = styled(Box)({
  padding: "16px 20px",
  borderBottom: "1px solid #f0f0f0",
});

const SectionHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px",
  cursor: "pointer",
});

const TimeRangeButton = styled(Button)<{ selected?: boolean }>(
  ({ selected }) => ({
    border: "1px solid #e0e0e0",
    borderRadius: 4,
    padding: "8px 0",
    marginBottom: "8px",
    textTransform: "none",
    color: selected ? "#2cd889" : "#666",
    backgroundColor: "white",
    fontWeight: selected ? "bold" : "normal",
    width: "100%",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#f9f9f9",
      borderColor: "#d0d0d0",
    },
    ...(selected && {
      borderColor: "#2cd889",
    }),
  })
);

const StyledCheckbox = styled(Checkbox)({
  color: "#2cd889",
  padding: "4px 9px 4px 0",
  "&.Mui-checked": {
    color: "#2cd889",
  },
});

const StyledFormControlLabel = styled(FormControlLabel)({
  marginLeft: "-9px",
  "& .MuiFormControlLabel-label": {
    fontSize: "0.9rem",
    color: "#2cd889",
  },
});

const ShowAllLink = styled(Link)({
  color: "#666",
  fontSize: "0.8rem",
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});

interface LayoverTimeRange {
  id: string;
  label: string;
  minHours: number;
  maxHours: number | null;
}

interface LayoverAirport {
  id: string;
  name: string;
}

interface LayoverFilterProps {
  onLayoverTimeChange?: (selectedTimes: string[]) => void;
  onLayoverAirportChange?: (selectedAirports: string[]) => void;
}

const LayoverFilter: React.FC<LayoverFilterProps> = ({
  onLayoverTimeChange,
  onLayoverAirportChange,
}) => {
  const [layoverTimeExpanded, setLayoverTimeExpanded] = useState(true);
  const [layoverAirportExpanded, setLayoverAirportExpanded] = useState(true);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [selectedAirports, setSelectedAirports] = useState<string[]>([]);
  const [showAllAirports, setShowAllAirports] = useState(false);

  const timeRanges: LayoverTimeRange[] = [
    { id: "0-5", label: "0h - 5h", minHours: 0, maxHours: 5 },
    { id: "5-10", label: "5h - 10h", minHours: 5, maxHours: 10 },
    { id: "10-15", label: "10h - 15h", minHours: 10, maxHours: 15 },
    { id: "15-plus", label: "15h - 20h+", minHours: 15, maxHours: null },
  ];

  const airports: LayoverAirport[] = [
    { id: "dac", name: "Hazrat Shahjalal Intl Airport" },
    { id: "cxb", name: "COXs Bazar Airport" },
    // Additional airports that would show when "Show All" is clicked
    { id: "cgp", name: "Shah Amanat Intl Airport" },
    { id: "zyl", name: "Osmani Intl Airport" },
  ];

  const handleTimeRangeClick = (id: string) => {
    let newSelectedTimes: string[];

    if (selectedTimes.includes(id)) {
      newSelectedTimes = selectedTimes.filter((timeId) => timeId !== id);
    } else {
      newSelectedTimes = [...selectedTimes, id];
    }

    setSelectedTimes(newSelectedTimes);
    onLayoverTimeChange?.(newSelectedTimes);
  };

  const handleAirportChange =
    (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      let newSelectedAirports: string[];

      if (event.target.checked) {
        newSelectedAirports = [...selectedAirports, id];
      } else {
        newSelectedAirports = selectedAirports.filter(
          (airportId) => airportId !== id
        );
      }

      setSelectedAirports(newSelectedAirports);
      onLayoverAirportChange?.(newSelectedAirports);
    };

  const toggleShowAllAirports = () => {
    setShowAllAirports(!showAllAirports);
  };

  const visibleAirports = showAllAirports ? airports : airports.slice(0, 2);

  return (
    <FilterContainer>
      {/* Layover Time Section */}
      <FilterSection>
        <SectionHeader
          onClick={() => setLayoverTimeExpanded(!layoverTimeExpanded)}
        >
          <Typography
            variant="subtitle2"
            sx={{ color: "#2cd889", fontWeight: "medium", fontSize: "0.9rem" }}
          >
            Layover Time
          </Typography>
          <IconButton size="small" sx={{ padding: 0 }}>
            {layoverTimeExpanded ? (
              <ExpandLessIcon sx={{ color: "#666" }} />
            ) : (
              <ExpandMoreIcon sx={{ color: "#666" }} />
            )}
          </IconButton>
        </SectionHeader>

        {layoverTimeExpanded && (
          <Box>
            {timeRanges.map((timeRange) => (
              <TimeRangeButton
                key={timeRange.id}
                variant="outlined"
                selected={selectedTimes.includes(timeRange.id)}
                onClick={() => handleTimeRangeClick(timeRange.id)}
                sx={{
                  height: "36px",
                  fontSize: "0.85rem",
                  fontWeight: "normal",
                  borderColor: "#e0e0e0",
                  borderWidth: "1px",
                }}
              >
                {timeRange.label}
              </TimeRangeButton>
            ))}
          </Box>
        )}
      </FilterSection>

      {/* Layover Airport Section */}
      <FilterSection>
        <SectionHeader
          onClick={() => setLayoverAirportExpanded(!layoverAirportExpanded)}
        >
          <Typography
            variant="subtitle2"
            sx={{ color: "#2cd889", fontWeight: "medium", fontSize: "0.9rem" }}
          >
            Layover Airport
          </Typography>
          <IconButton size="small" sx={{ padding: 0 }}>
            {layoverAirportExpanded ? (
              <ExpandLessIcon sx={{ color: "#666" }} />
            ) : (
              <ExpandMoreIcon sx={{ color: "#666" }} />
            )}
          </IconButton>
        </SectionHeader>

        {layoverAirportExpanded && (
          <Box>
            {visibleAirports.map((airport) => (
              <StyledFormControlLabel
                key={airport.id}
                control={
                  <StyledCheckbox
                    checked={selectedAirports.includes(airport.id)}
                    onChange={handleAirportChange(airport.id)}
                  />
                }
                label={airport.name}
              />
            ))}
            <Box display="flex" justifyContent="flex-end" mt={1}>
              <ShowAllLink onClick={toggleShowAllAirports}>
                {showAllAirports ? "Show Less" : "Show All"}
              </ShowAllLink>
            </Box>
          </Box>
        )}
      </FilterSection>
    </FilterContainer>
  );
};

export default LayoverFilter;
