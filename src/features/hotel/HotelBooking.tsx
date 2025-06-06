"use client";

import type React from "react";
import {
  Box,
  Typography,
  Paper,
  ClickAwayListener,
  Popper,
} from "@mui/material";
import DatePicker from "../flight/DatePicker";
import { styled } from "@mui/system";
import { LocationOn } from "@mui/icons-material";
import DestinationSelector from "./DestinationSelector";
import { useState } from "react";
import GuestInfo from "./GuestInfo";

function formatDate(date: Date) {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }); // e.g., 23 Apr 2025
}
const airportData: any[] = [
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

const LocationField = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#e3f2fd",
  borderRadius: "4px",
  padding: "12px",
  // marginBottom: "10px",
});
const StyledPopper = styled(Popper)(() => ({
  borderRadius: 6,
  width: 300,
  fontSize: 13,
}));

const HotelBookingWidget: React.FC = () => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [selectedCity, setSelectedCity] = useState("DHAKA, Bangladesh");
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? "date-picker-popover" : undefined;

  const handleClick = (event: any) => {
    if (anchorEl) {
      setAnchorEl(null); // toggle off
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
    // Don't close if select is open
    // if (isSelectOpen) {
    //   return;
    // }

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
            DESTINATION
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
            <ClickAwayListener onClickAway={(e) => handleClose(e as any)}>
              <DestinationSelector
                data={airportData}
                onSelectItem={(str) => {
                  setSelectedCity(str);
                  setAnchorEl(null);
                }}
                getDisplayLabel={(item) => `${item.city}, ${item.country}`}
                getSearchFields={(item) => [
                  item.city,
                  item.country,
                  item.airportName,
                  item.acronym,
                ]}
              />
            </ClickAwayListener>
          </StyledPopper>
        </Box>

        {/* Check In Section */}
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
            CHECK IN
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
            {formatDate(checkInDate)}
          </Typography>
          <DatePicker onChange={setCheckInDate} />
        </Box>

        {/* Check Out Section */}
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
            CHECK OUT
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

      {/* Right Section: Guests & Rooms */}
      <GuestInfo />
    </Paper>
  );
};

export default HotelBookingWidget;
