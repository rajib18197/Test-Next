import type React from "react";
import { Box, Typography, Paper, styled, Button, Tooltip } from "@mui/material";
// import AirlineLogo from "./airline-logo";

// Custom styled components
const FlightDetailsContainer = styled(Paper)({
  borderRadius: 8,
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  width: "100%",
  maxWidth: "900px",
  margin: "0 auto",
});

const FlightDetailsHeader = styled(Box)({
  backgroundColor: "#e6f7f2",
  padding: "12px 20px",
});

const FlightSegment = styled(Box)({
  padding: "20px",
  display: "flex",
});

const AirlineLogoContainer = styled(Box)({
  width: 50,
  height: 50,
  borderRadius: "50%",
  backgroundColor: "#ff0000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 20,
});

const FlightPathLine = styled(Box)({
  height: 2,
  backgroundColor: "#666",
  flex: 1,
  position: "relative",
});

const FlightPathDot = styled(Box)({
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: "#666",
  position: "absolute",
  top: -3,
});

const ReturnFlightButton = styled(Button)({
  backgroundColor: "#2cd889",
  color: "white",
  borderRadius: 25,
  padding: "6px 20px",
  fontSize: "0.75rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  "&:hover": {
    backgroundColor: "#25c07a",
  },
});

// Divider with button in the middle - styled to match design exactly
const DividerWithButton = styled(Box)({
  position: "relative",
  width: "100%",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const HorizontalLine = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "1px",
  backgroundColor: "#e0e0e0",
  top: "50%",
  zIndex: 0,
});

interface FlightDetailsProps {
  outboundFlight: {
    airline: string;
    flightNumber: string;
    operator: string;
    departureCode: string;
    departureCity: string;
    departureCountry: string;
    departureAirport: string;
    departureAirportFull: string;
    departureDate: string;
    departureTime: string;
    arrivalCode: string;
    arrivalCity: string;
    arrivalCountry: string;
    arrivalAirport: string;
    arrivalAirportFull: string;
    arrivalDate: string;
    arrivalTime: string;
    duration: string;
  };
  returnFlight: {
    airline: string;
    flightNumber: string;
    operator: string;
    departureCode: string;
    departureCity: string;
    departureCountry: string;
    departureAirport: string;
    departureAirportFull: string;
    departureDate: string;
    departureTime: string;
    arrivalCode: string;
    arrivalCity: string;
    arrivalCountry: string;
    arrivalAirport: string;
    arrivalAirportFull: string;
    arrivalDate: string;
    arrivalTime: string;
    duration: string;
  };
}

const FlightDetails: React.FC<FlightDetailsProps> = ({
  outboundFlight,
  returnFlight,
}) => {
  return (
    <FlightDetailsContainer>
      {/* Header */}
      <FlightDetailsHeader>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#2cd889",
            fontWeight: "bold",
            fontSize: "0.9rem",
          }}
        >
          FLIGHT DETAILS
        </Typography>
      </FlightDetailsHeader>

      {/* Outbound Flight */}
      <FlightSegment>
        {/* Airline Logo and Info */}
        <Box>
          {/* <AirlineLogoContainer>
            <AirlineLogo />
          </AirlineLogoContainer> */}
          <Typography
            variant="body2"
            sx={{ color: "#2cd889", fontSize: "0.75rem", mt: 1 }}
          >
            {outboundFlight.airline}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", fontSize: "0.75rem" }}
          >
            {outboundFlight.flightNumber}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#2cd889", fontSize: "0.75rem" }}
          >
            {outboundFlight.operator}
          </Typography>
        </Box>

        {/* Flight Information */}
        <Box flex={1} ml={2}>
          <Box display="flex" justifyContent="space-between" mb={2}>
            {/* Departure */}
            <Box>
              <Typography
                variant="body2"
                sx={{ color: "#666", fontSize: "0.75rem", mb: 0.5 }}
              >
                Depart
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2cd889",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                {outboundFlight.departureCode}
              </Typography>
              <Tooltip
                title={`${outboundFlight.departureCity}, ${outboundFlight.departureCountry} | ${outboundFlight.departureAirportFull}`}
                arrow
                placement="top"
              >
                <Typography
                  variant="body2"
                  sx={{ color: "#666", fontSize: "0.75rem", cursor: "help" }}
                >
                  {outboundFlight.departureCity},{" "}
                  {outboundFlight.departureCountry} |{" "}
                  {outboundFlight.departureAirport}
                </Typography>
              </Tooltip>
              <Typography
                variant="body2"
                sx={{ color: "#666", fontSize: "0.75rem", mt: 0.5 }}
              >
                {outboundFlight.departureDate} {outboundFlight.departureTime}
              </Typography>
            </Box>

            {/* Flight Duration */}
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{ mt: 2 }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#666", fontSize: "0.75rem", mb: 1 }}
              >
                {outboundFlight.duration}
              </Typography>
              <Box position="relative" width="120px" sx={{ my: 0.5 }}>
                <FlightPathDot sx={{ left: 0 }} />
                <FlightPathLine />
                <FlightPathDot sx={{ right: 0 }} />
              </Box>
            </Box>

            {/* Arrival */}
            <Box textAlign="right">
              <Typography
                variant="body2"
                sx={{ color: "#666", fontSize: "0.75rem", mb: 0.5 }}
              >
                Arrival
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2cd889",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                {outboundFlight.arrivalCode}
              </Typography>
              <Tooltip
                title={`${outboundFlight.arrivalCity}, ${outboundFlight.arrivalCountry} | ${outboundFlight.arrivalAirportFull}`}
                arrow
                placement="top"
              >
                <Typography
                  variant="body2"
                  sx={{ color: "#666", fontSize: "0.75rem", cursor: "help" }}
                >
                  {outboundFlight.arrivalCity}, {outboundFlight.arrivalCountry}{" "}
                  | {outboundFlight.arrivalAirport}
                </Typography>
              </Tooltip>
              <Typography
                variant="body2"
                sx={{ color: "#666", fontSize: "0.75rem", mt: 0.5 }}
              >
                {outboundFlight.arrivalDate} {outboundFlight.arrivalTime}
              </Typography>
            </Box>
          </Box>
        </Box>
      </FlightSegment>

      {/* Return Flight Button with horizontal line - fixed to match design exactly */}
      <DividerWithButton>
        <HorizontalLine />
        <Box
          sx={{
            backgroundColor: "white",
            px: 2,
            position: "relative",
            zIndex: 1,
          }}
        >
          <ReturnFlightButton>RETURN FLIGHT</ReturnFlightButton>
        </Box>
      </DividerWithButton>

      {/* Return Flight */}
      <FlightSegment>
        {/* Airline Logo and Info */}
        <Box>
          {/* <AirlineLogoContainer>
            <AirlineLogo />
          </AirlineLogoContainer> */}
          <Typography
            variant="body2"
            sx={{ color: "#2cd889", fontSize: "0.75rem", mt: 1 }}
          >
            {returnFlight.airline}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", fontSize: "0.75rem" }}
          >
            {returnFlight.flightNumber}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#2cd889", fontSize: "0.75rem" }}
          >
            {returnFlight.operator}
          </Typography>
        </Box>

        {/* Flight Information */}
        <Box flex={1} ml={2}>
          <Box display="flex" justifyContent="space-between" mb={2}>
            {/* Departure */}
            <Box>
              <Typography
                variant="body2"
                sx={{ color: "#666", fontSize: "0.75rem", mb: 0.5 }}
              >
                Depart
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2cd889",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                {returnFlight.departureCode}
              </Typography>
              <Tooltip
                title={`${returnFlight.departureCity}, ${returnFlight.departureCountry} | ${returnFlight.departureAirportFull}`}
                arrow
                placement="top"
              >
                <Typography
                  variant="body2"
                  sx={{ color: "#666", fontSize: "0.75rem", cursor: "help" }}
                >
                  {returnFlight.departureCity}, {returnFlight.departureCountry}{" "}
                  | {returnFlight.departureAirport}
                </Typography>
              </Tooltip>
              <Typography
                variant="body2"
                sx={{ color: "#666", fontSize: "0.75rem", mt: 0.5 }}
              >
                {returnFlight.departureDate} {returnFlight.departureTime}
              </Typography>
            </Box>

            {/* Flight Duration */}
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{ mt: 2 }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#666", fontSize: "0.75rem", mb: 1 }}
              >
                {returnFlight.duration}
              </Typography>
              <Box position="relative" width="120px" sx={{ my: 0.5 }}>
                <FlightPathDot sx={{ left: 0 }} />
                <FlightPathLine />
                <FlightPathDot sx={{ right: 0 }} />
              </Box>
            </Box>

            {/* Arrival */}
            <Box textAlign="right">
              <Typography
                variant="body2"
                sx={{ color: "#666", fontSize: "0.75rem", mb: 0.5 }}
              >
                Arrival
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2cd889",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                {returnFlight.arrivalCode}
              </Typography>
              <Tooltip
                title={`${returnFlight.arrivalCity}, ${returnFlight.arrivalCountry} | ${returnFlight.arrivalAirportFull}`}
                arrow
                placement="top"
              >
                <Typography
                  variant="body2"
                  sx={{ color: "#666", fontSize: "0.75rem", cursor: "help" }}
                >
                  {returnFlight.arrivalCity}, {returnFlight.arrivalCountry} |{" "}
                  {returnFlight.arrivalAirport}
                </Typography>
              </Tooltip>
              <Typography
                variant="body2"
                sx={{ color: "#666", fontSize: "0.75rem", mt: 0.5 }}
              >
                {returnFlight.arrivalDate} {returnFlight.arrivalTime}
              </Typography>
            </Box>
          </Box>
        </Box>
      </FlightSegment>
    </FlightDetailsContainer>
  );
};

export default FlightDetails;
