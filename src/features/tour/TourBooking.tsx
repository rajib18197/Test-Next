"use client";

import type React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
  ClickAwayListener,
  Popper,
} from "@mui/material";
import DatePicker from "../flight/DatePicker";
import { styled } from "@mui/system";
import { LocationOn } from "@mui/icons-material";
import { useState } from "react";
import TravelTypeTabs from "./TabSelector";
import SelectDestination from "./SelectDestination";

function formatDate(date: Date) {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }); // e.g., 23 Apr 2025
}

const LocationField = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#e3f2fd",
  borderRadius: "4px",
  padding: "12px",
  // marginBottom: "10px",
});
const StyledPopper = styled(Popper)(({ theme }) => ({
  borderRadius: 6,
  width: 300,
  fontSize: 13,
}));

const TourBookingWidget: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [selectedCity, setSelectedCity] = useState("Domestic");
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? "date-picker-popover" : undefined;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl) {
      setAnchorEl(null); // toggle off
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
    // Don't close if select is open
    if (isSelectOpen) {
      return;
    }

    // Prevent closing when clicking on month or year selectors
    const target = event.target as HTMLElement;
    if (
      target.closest(".MuiSelect-select") ||
      target.closest(".MuiMenu-paper")
    ) {
      return;
    }

    setAnchorEl(null);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        padding: "30px 0 10px 0",
        alignContent: "end",
      }}
    >
      {/* Left Section: Destination, Check In, Check Out */}
      <Box
        sx={{
          flex: "3",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        {/* Destination Section */}
        <Box
          sx={{
            padding: "0 16px",
            flex: 1,
            // borderRight: { xs: "none", md: "1px solid #e0e0e0" },
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#555",
              fontWeight: 500,
              mb: 0.5,
            }}
          >
            DESTINATION TYPE
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "#00c4a7",
              fontWeight: 500,
              fontSize: "30px",
              mb: "auto",
            }}
          >
            {selectedCity.split(",")[0]}
          </Typography>

          <div style={{ width: "100%" }}>
            <LocationField
              onClick={handleClick}
              sx={{
                minHeight: 0,
                minWidth: 0,
                p: 0,
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <LocationOn
                sx={{
                  color: "#d7e7f4",
                  mr: 1,
                  bgcolor: "#32d095",
                  p: "4px 11px",
                  borderTopLeftRadius: "4px",
                  borderBottomLeftRadius: "4px",
                }}
              />
              <Typography sx={{ color: "#666", fontSize: "14px" }}>
                {selectedCity}
              </Typography>
            </LocationField>
          </div>

          <StyledPopper
            id={id}
            open={open}
            anchorEl={anchorEl}
            placement="bottom-start"
            style={{
              width: "100%,",
              padding: "4px 6px",
              // background: "#32d095",
              borderRadius: "0 !important",
            }}
          >
            <ClickAwayListener onClickAway={handleClose}>
              <TravelTypeTabs
                onChange={(str: string) => {
                  setSelectedCity(str);
                  setAnchorEl(null);
                }}
              />
            </ClickAwayListener>
          </StyledPopper>
        </Box>

        <SelectDestination />

        <Box
          sx={{
            padding: "0 16px",
            flex: 1,
            // borderRight: { xs: "none", md: "1px solid #e0e0e0" },
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#555",
              fontWeight: 500,
              mb: 0.5,
            }}
          >
            WHEN?
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "#00c4a7",
              fontWeight: 500,
              fontSize: "30px",
              mb: "8px",
            }}
          >
            {formatDate(checkOutDate)}
          </Typography>
          <DatePicker onChange={setCheckOutDate} />
        </Box>
      </Box>
      <Box sx={{ alignContent: "end", padding: "4px" }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#00c4a7",
            color: "white",
            "&:hover": {
              bgcolor: "#00a08a",
            },
            textTransform: "uppercase",
            py: 1,
            mb: 1,
          }}
        >
          SEARCH ALL TOUR
        </Button>
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#00c4a7",
            color: "white",
            "&:hover": {
              bgcolor: "#00a08a",
            },
            textTransform: "uppercase",
            py: 1,
          }}
        >
          SEARCH FOR TOUR
        </Button>
      </Box>
    </Paper>
  );
};

export default TourBookingWidget;
