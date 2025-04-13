"use client";

import type React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const HotelBookingWidget: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: "10px",
        overflow: "hidden",
        width: "100%",
        maxWidth: "1100px",
        margin: "0 auto",
        border: "1px solid #e0e0e0",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Left Section: Destination, Check In, Check Out */}
      <Box
        sx={{
          flex: "3",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Destination Section */}
        <Box
          sx={{
            p: 2,
            flex: 1,
            borderRight: { xs: "none", md: "1px solid #e0e0e0" },
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
            variant="h5"
            sx={{
              color: "#00c4a7",
              fontWeight: 500,
              mb: 1,
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
            p: 2,
            flex: 1,
            borderRight: { xs: "none", md: "1px solid #e0e0e0" },
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
            variant="h5"
            sx={{
              color: "#00c4a7",
              fontWeight: 500,
              mb: 1,
            }}
          >
            13 APR, 2025
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
            <CalendarTodayIcon
              sx={{ color: "#00c4a7", fontSize: 20, mr: 0.5 }}
            />
            <Typography variant="body2" sx={{ color: "#555" }}>
              13 APR 25,SUNDAY
            </Typography>
          </Box>
        </Box>

        {/* Check Out Section */}
        <Box sx={{ p: 2, flex: 1 }}>
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
            variant="h5"
            sx={{
              color: "#00c4a7",
              fontWeight: 500,
              mb: 1,
            }}
          >
            13 APR, 2025
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
            <CalendarTodayIcon
              sx={{ color: "#00c4a7", fontSize: 20, mr: 0.5 }}
            />
            <Typography variant="body2" sx={{ color: "#555" }}>
              13 APR 25,SUNDAY
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Vertical Divider */}
      <Divider
        orientation="vertical"
        flexItem
        sx={{ display: { xs: "none", md: "block" } }}
      />
      <Divider
        orientation="horizontal"
        flexItem
        sx={{ display: { xs: "block", md: "none" } }}
      />

      {/* Right Section: Guests & Rooms */}
      <Box
        sx={{
          flex: "1",
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
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
              p: 1.5,
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
