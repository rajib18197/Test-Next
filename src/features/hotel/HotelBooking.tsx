"use client";

import type React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DatePicker from "../flight/DatePicker";

const HotelBookingWidget: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
              mb: "8px",
            }}
          >
            DHAKA
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#f0f7ff",
              p: 1,
              borderRadius: "4px",
              width: "fit-content",
            }}
          >
            <LocationOnIcon sx={{ color: "#00c4a7", fontSize: 20, mr: 0.5 }} />
            <Typography variant="body2" sx={{ color: "#555" }}>
              DHAKA BANGLADESH
            </Typography>
          </Box>
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
            13 APR, 2025
          </Typography>
          <DatePicker />
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
            13 APR, 2025
          </Typography>
          <DatePicker />
        </Box>
      </Box>

      {/* Right Section: Guests & Rooms */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "12px",
          borderRadius: "10px",
          bgcolor: "white",
        }}
      >
        <Box>
          <Typography
            variant="body2"
            sx={{
              color: "#00c4a7",
              fontWeight: 500,
              mb: 1,
            }}
          >
            Guests & Rooms
          </Typography>
          <Box
            sx={{
              bgcolor: "#f0f7ff",
              // p: 1.5,
              borderRadius: "4px",
              mb: 2,
              width: "100%",
            }}
          >
            <Typography variant="body2" sx={{ color: "#555" }}>
              1 ROOM, 1 GUESTS, 1 ADULTS
            </Typography>
          </Box>
        </Box>
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
            py: 1.5,
          }}
        >
          SEARCH FOR HOTEL
        </Button>
      </Box>
    </Paper>
  );
};

export default HotelBookingWidget;
