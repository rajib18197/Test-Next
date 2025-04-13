"use client";

import type React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  styled,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import DarkModeIcon from "@mui/icons-material/DarkMode";

// Custom styled components
const FilterContainer = styled(Paper)({
  borderRadius: 8,
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  width: "100%",
  maxWidth: "350px",
});

const FilterHeader = styled(Box)({
  padding: "16px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const TimeRangeItem = styled(ListItem)<{ selected?: boolean }>(
  ({ selected }) => ({
    backgroundColor: "#e6f7f2",
    marginBottom: "4px",
    padding: "10px 16px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#d9f2ea",
    },
    ...(selected && {
      backgroundColor: "#d9f2ea",
      "& .MuiListItemText-primary": {
        fontWeight: "bold",
      },
    }),
  })
);

interface TimeRange {
  id: string;
  label: string;
  icon: React.ReactNode;
  startTime: string;
  endTime: string;
}

interface DepartureTimesFilterProps {
  onFilterChange?: (selectedTimes: string[]) => void;
}

const DepartureTimesFilter: React.FC<DepartureTimesFilterProps> = ({
  onFilterChange,
}) => {
  const [expanded, setExpanded] = useState(true);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);

  const timeRanges: TimeRange[] = [
    {
      id: "early-morning",
      label: "00:00 - 05:59",
      icon: <NightsStayIcon sx={{ color: "#2cd889" }} />,
      startTime: "00:00",
      endTime: "05:59",
    },
    {
      id: "morning",
      label: "06:00 - 11:59",
      icon: <WbSunnyIcon sx={{ color: "#2cd889" }} />,
      startTime: "06:00",
      endTime: "11:59",
    },
    {
      id: "afternoon",
      label: "12:00 - 17:59",
      icon: <WbCloudyIcon sx={{ color: "#2cd889" }} />,
      startTime: "12:00",
      endTime: "17:59",
    },
    {
      id: "evening",
      label: "18:00 - 23:59",
      icon: <DarkModeIcon sx={{ color: "#2cd889" }} />,
      startTime: "18:00",
      endTime: "23:59",
    },
  ];

  const handleTimeRangeClick = (id: string) => {
    let newSelectedTimes: string[];

    if (selectedTimes.includes(id)) {
      newSelectedTimes = selectedTimes.filter((timeId) => timeId !== id);
    } else {
      newSelectedTimes = [...selectedTimes, id];
    }

    setSelectedTimes(newSelectedTimes);
    onFilterChange?.(newSelectedTimes);
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <FilterContainer>
      <FilterHeader onClick={toggleExpanded} sx={{ cursor: "pointer" }}>
        <Typography
          variant="subtitle2"
          sx={{ color: "#2cd889", fontWeight: "medium", fontSize: "0.9rem" }}
        >
          Departure Times
        </Typography>
        <IconButton size="small" sx={{ padding: 0 }}>
          {expanded ? (
            <ExpandLessIcon sx={{ color: "#666" }} />
          ) : (
            <ExpandMoreIcon sx={{ color: "#666" }} />
          )}
        </IconButton>
      </FilterHeader>

      {expanded && (
        <List sx={{ padding: "0 16px 16px 16px" }}>
          {timeRanges.map((timeRange) => (
            <TimeRangeItem
              key={timeRange.id}
              selected={selectedTimes.includes(timeRange.id)}
              onClick={() => handleTimeRangeClick(timeRange.id)}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                {timeRange.icon}
              </ListItemIcon>
              <ListItemText
                primary={timeRange.label}
                primaryTypographyProps={{
                  sx: { color: "#2cd889", fontSize: "0.9rem" },
                }}
              />
            </TimeRangeItem>
          ))}
        </List>
      )}
    </FilterContainer>
  );
};

export default DepartureTimesFilter;
