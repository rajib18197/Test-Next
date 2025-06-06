import type React from "react";
import { Box, Typography, Button, Card, styled, Paper } from "@mui/material";
import LuggageIcon from "@mui/icons-material/Luggage";
import FlightDetailsDrawer from "../../ui/Drawer";
import FlightDetails from "./FlightDetails";
import { useParams } from "react-router";

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

const PriceSection = styled(Paper)({
  width: "180px",
  borderRadius: "0 8px 8px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px 16px",
  borderLeft: "1px solid #f0f0f0",
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

const BookNowButton = styled(Button)({
  backgroundColor: "#3f4b63",
  color: "white",
  borderRadius: 25,
  padding: "8px 24px",
  fontWeight: "bold",
  textTransform: "uppercase",
  fontSize: "0.8rem",
  width: "100%",
  "&:hover": {
    backgroundColor: "#2d3748",
  },
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
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }); // e.g., 23 Apr 2025
}

function formatTime(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  }); // e.g., 16:35
}

const FlightCard: React.FC<FlightCardProps> = ({
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
  currentPrice,
  originalPrice,
  flight,
}) => {
  const path = useParams();
  console.log(path);

  return (
    <StyledCard>
      {/* Flight Information Box */}
      <FlightInfoSection>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {/* Airline Information */}
          <Box
            display="flex"
            flexDirection="column"
            // alignItems="center"
            width="120px"
          >
            <AirlineLogoContainer
              style={{ border: "2px solid orange", borderRadius: "50%" }}
            >
              <img
                src={airlineLogo || "/placeholder.svg"}
                alt={airlineName}
                width="35"
                height="35"
                // style={{ border: "2px solid orange", borderRadius: "50%" }}
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

          {/* Flight Information */}
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
                  //   fontWeight: "bold",
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

            {/* Flight Path with Plane Icon */}
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

                {path.tripType === "round-waysearch" && (
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
                )}
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

        {/* Flight Duration and Type */}
        <Box display="flex" alignItems="center" mt={3} mb={1}>
          {/* Duration and flight type with improved styling */}
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

          {/* <Divider orientation="vertical" flexItem sx={{ mx: 3 }} /> */}

          {/* Flight Details */}
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
                sx={{ color: "#4cd3a5", fontSize: "15px" }}
              >
                {baggage}
              </Typography>
            </Box>
          </Box>
        </Box>
      </FlightInfoSection>

      {/* Price and Booking Box - Completely separate section */}
      <PriceSection
        elevation={0}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#4cd3a5",
            // fontWeight: "bold",
            fontSize: "30px",
            display: "flex",
            // alignItems: "center",
            // justifyContent: "flex-end",
            mb: 0.5,
          }}
        >
          {/* <Box component="span" sx={{ fontSize: "0.9rem", mr: 0.5 }}>
          </Box> */}
          ৳ {currentPrice.toLocaleString()}
        </Typography>
        {originalPrice && (
          <Typography
            variant="body2"
            sx={{
              color: "#4cd3a5",
              textDecoration: "line-through",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              mb: "auto",
            }}
          >
            ৳ {originalPrice.toLocaleString()}
          </Typography>
        )}
        <Box mb={1}>
          <BookNowButton
            variant="contained"
            size="small"
            style={{ fontSize: "12px", padding: "10px 16px", lineHeight: 1 }}
          >
            BOOK NOW
          </BookNowButton>
        </Box>

        <FlightDetailsDrawer>
          <FlightDetails
            outboundFlight={{
              airline: flight.segments.go[0].marketingcareerName,
              flightNumber: `${flight.segments.go[0].marketingcareer}${flight.segments.go[0].marketingflight}`,
              operator: `Operated By ${flight.segments.go[0].operatingcareer}`,
              departureCode: flight.segments.go[0].departure,
              departureCity: flight.segments.go[0].departureLocation
                .split(",")[0]
                .trim(),
              departureCountry: flight.segments.go[0].departureLocation
                .split(",")[1]
                .trim(),
              departureAirport:
                flight.segments.go[0].departureAirport.slice(0, 10) + "...",
              departureAirportFull: flight.segments.go[0].departureAirport,
              departureDate: formatDate(flight.segments.go[0].departureTime),
              departureTime: formatTime(flight.segments.go[0].departureTime),
              arrivalCode: flight.segments.go[0].arrival,
              arrivalCity: flight.segments.go[0].arrivalLocation
                .split(",")[0]
                .trim(),
              arrivalCountry: flight.segments.go[0].arrivalLocation
                .split(",")[1]
                .trim(),
              arrivalAirport:
                flight.segments.go[0].arrivalAirport.slice(0, 10) + "...",
              arrivalAirportFull: flight.segments.go[0].arrivalAirport,
              arrivalDate: formatDate(flight.segments.go[0].arrivalTime),
              arrivalTime: formatTime(flight.segments.go[0].arrivalTime),
              duration: flight.segments.go[0].flightduration,
            }}
            returnFlight={{
              airline: flight.segments.back[0].marketingcareerName,
              flightNumber: `${flight.segments.back[0].marketingcareer}${flight.segments.back[0].marketingflight}`,
              operator: `Operated By ${flight.segments.back[0].operatingcareer}`,
              departureCode: flight.segments.back[0].departure,
              departureCity: flight.segments.back[0].departureLocation
                .split(",")[0]
                .trim(),
              departureCountry: flight.segments.back[0].departureLocation
                .split(",")[1]
                .trim(),
              departureAirport:
                flight.segments.back[0].departureAirport.slice(0, 10) + "...",
              departureAirportFull: flight.segments.back[0].departureAirport,
              departureDate: formatDate(flight.segments.back[0].departureTime),
              departureTime: formatTime(flight.segments.back[0].departureTime),
              arrivalCode: flight.segments.back[0].arrival,
              arrivalCity: flight.segments.back[0].arrivalLocation
                .split(",")[0]
                .trim(),
              arrivalCountry: flight.segments.back[0].arrivalLocation
                .split(",")[1]
                .trim(),
              arrivalAirport:
                flight.segments.back[0].arrivalAirport.slice(0, 10) + "...",
              arrivalAirportFull: flight.segments.back[0].arrivalAirport,
              arrivalDate: formatDate(flight.segments.back[0].arrivalTime),
              arrivalTime: formatTime(flight.segments.back[0].arrivalTime),
              duration: flight.segments.back[0].flightduration,
            }}
            fareSummary={{
              baseFare: Number(flight.BasePrice),
              taxFees: Number(flight.Taxes),
              totalCost: Number(flight.customerPrice),
              discount:
                Number(flight.BasePrice) +
                Number(flight.Taxes) -
                Number(flight.customerPrice),
              grandTotal: Number(flight.netfare),
            }}
            flight={flight}
          />
        </FlightDetailsDrawer>
      </PriceSection>
    </StyledCard>
  );
};

export default FlightCard;
