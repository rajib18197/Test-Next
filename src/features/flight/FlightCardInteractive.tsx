import type React from "react";
import { Box, Typography, Card, styled } from "@mui/material";
import LuggageIcon from "@mui/icons-material/Luggage";

// Custom styled components
const StyledCard = styled(Card)({
  borderRadius: 8,
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
  overflow: "visible",
  position: "relative",
  // maxWidth: "900px",
  // margin: "0 auto",
  display: "flex",
});

const FlightInfoSection = styled(Box)({
  flex: 1,
  padding: "24px",
  display: "flex",
  flexDirection: "column",
});

const AirlineLogoContainer = styled(Box)({
  width: 50,
  height: 50,
  borderRadius: "50%",
  border: "1px solid #e0e0e0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  overflow: "hidden",
});

const FlightPathLine = styled(Box)({
  height: 1,
  backgroundColor: "#999",
  flex: 1,
  position: "relative",
});

const FlightPathDot = styled(Box)({
  width: 6,
  height: 6,
  borderRadius: "50%",
  backgroundColor: "#999",
  position: "absolute",
});

interface FlightCardProps {
  airlineName: string;
  airlineLogo: string;
  flightNumber: string;
  departureCode: string;
  departureAirport: string;
  departureTime: string;
  departureDate: string;
  arrivalCode: string;
  arrivalAirport: string;
  arrivalTime: string;
  arrivalDate: string;
  duration: string;
  flightType: string;
  refundable: boolean;
  flightClass: string;
  baggage: string;
  currentPrice: number;
  originalPrice?: number;
  flight: any;
  onStatusChange: any;
}

const FlightCardInteractive: React.FC<FlightCardProps> = ({
  airlineName,
  airlineLogo,
  flightNumber,
  departureCode,
  departureAirport,
  departureTime,
  departureDate,
  arrivalCode,
  arrivalAirport,
  arrivalTime,
  arrivalDate,
  duration,
  flightType,
  refundable,
  flightClass,
  baggage,
  onStatusChange,
}) => {
  return (
    <StyledCard>
      <FlightInfoSection>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box display="flex" flexDirection="column" width="120px">
            <AirlineLogoContainer
              style={{ border: "2px solid orange", borderRadius: "50%" }}
            >
              <img
                src={airlineLogo || "/placeholder.svg"}
                alt={airlineName}
                width="35"
                height="35"
              />
            </AirlineLogoContainer>
            <Typography
              variant="body2"
              sx={{ mt: 1, fontSize: "14px", padding: 0 }}
            >
              {airlineName}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#666", fontSize: "0.75rem" }}
            >
              {flightNumber}
            </Typography>
          </Box>

          <Box
            display="flex"
            flex={1}
            justifyContent="space-between"
            mx={3}
            position="relative"
          >
            {/* Departure */}
            <Box textAlign="left" width="200px">
              <Typography
                variant="h6"
                sx={{
                  color: "#4cd3a5",
                  fontSize: "1.75rem",
                }}
              >
                {departureCode}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#555", fontSize: "15px", mb: 0.5 }}
              >
                {departureAirport}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "0.9rem" }}>
                {departureTime}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#4cd3a5", fontSize: "0.75rem" }}
              >
                {departureDate}
              </Typography>
            </Box>

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
                  onClick={() => onStatusChange("from-to")}
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
                  onClick={() => onStatusChange("to-from")}
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"></path>
                </svg>
              </div>
            </Box>

            {/* Arrival */}
            <Box textAlign="right" width="180px">
              <Typography
                variant="h6"
                sx={{
                  color: "#4cd3a5",
                  //   fontWeight: "bold",
                  fontSize: "1.75rem",
                }}
              >
                {arrivalCode}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#555", fontSize: "15px", mb: 0.5 }}
              >
                {arrivalAirport}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "0.9rem" }}>
                {arrivalTime}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#4cd3a5", fontSize: "0.75rem" }}
              >
                {arrivalDate}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" mt={3} mb={1}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="120px"
            marginRight={"10px"}
          >
            <Typography
              variant="body2"
              sx={{ fontSize: "0.75rem", fontWeight: "medium", color: "#333" }}
            >
              {duration}
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              width="100%"
              mt={1}
              mb={1}
              position="relative"
            >
              <FlightPathDot
                sx={{ left: 0 }}
                style={{ height: "7px", width: "7px" }}
              />
              <FlightPathLine style={{ height: "3px" }} />
              <FlightPathDot
                sx={{ right: 0 }}
                style={{ height: "7px", width: "7px" }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{ fontSize: "0.75rem", fontWeight: "medium", color: "#333" }}
            >
              {flightType}
            </Typography>
          </Box>

          <Box display="flex" flex={1} justifyContent="space-between">
            <Typography
              variant="body2"
              sx={{ color: "#555", fontSize: "15px" }}
            >
              {refundable ? "Refundable" : "Non-Refundable"}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#555", fontSize: "15px" }}
            >
              Class- {flightClass}
            </Typography>
            <Box display="flex" alignItems="center">
              <LuggageIcon
                sx={{ color: "#4cd3a5", fontSize: "1rem", mr: 0.5 }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "#4cd3a5",
                  fontSize: "15px",
                  padding: "0 20px 0 0",
                }}
              >
                {baggage}
              </Typography>
            </Box>
          </Box>
        </Box>
      </FlightInfoSection>
    </StyledCard>
  );
};

export default FlightCardInteractive;
