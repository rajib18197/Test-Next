import type React from "react";
import {
  Box,
  Typography,
  Paper,
  styled,
  Button,
  Tooltip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid,
} from "@mui/material";
import FlightCardInteractive from "./FlightCardInteractive";
import { useState } from "react";
import { useSearch } from "../../context/SearchContext";
// Custom styled components
const FlightDetailsContainer = styled(Paper)({
  borderRadius: 8,
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  // width: "100%",
  width: "800px",
  // margin: "0 auto",
});

const SectionHeader = styled(Box)({
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

// New styled components for fare summary and policy
const StyledTableCell = styled(TableCell)({
  padding: "10px 16px",
  fontSize: "0.8rem",
});

const StyledTableHeaderCell = styled(TableCell)({
  padding: "10px 16px",
  fontSize: "0.8rem",
  backgroundColor: "#3f4b63",
  color: "white",
});

const PolicyBox = styled(Box)({
  backgroundColor: "#e6f7f2",
  padding: "10px",
  borderRadius: "4px",
  fontSize: "0.8rem",
  fontWeight: "bold",
  color: "#333",
  textAlign: "center",
  width: "130px",
  marginBottom: "8px",
});

const PolicyText = styled(Typography)({
  fontSize: "0.75rem",
  color: "#666",
});

const FooterContainer = styled(Box)({
  backgroundColor: "#2cd889",
  padding: "16px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const BookHoldButton = styled(Button)({
  backgroundColor: "#3f4b63",
  color: "white",
  borderRadius: 25,
  padding: "8px 24px",
  fontWeight: "bold",
  textTransform: "uppercase",
  "&:hover": {
    backgroundColor: "#2d3748",
  },
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
  fareSummary?: {
    baseFare: number;
    taxFees: number;
    totalCost: number;
    discount: number;
    grandTotal: number;
  };
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

const FlightDetails: React.FC<FlightDetailsProps> = ({
  outboundFlight,
  returnFlight,
  fareSummary,
  flight,
}) => {
  const [status, setStatus] = useState("from-to");
  const { searchState } = useSearch();

  return (
    <FlightDetailsContainer>
      {status === "from-to" ? (
        <FlightCardInteractive
          airlineLogo=""
          airlineName={flight.segments.go[0].marketingcareerName}
          flightNumber={`${flight.segments.go[0].marketingcareer}-${flight.segments.go[0].marketingflight}`}
          departureCode={flight.segments.go[0].departure}
          departureAirport={flight.segments.go[0].departureAirport}
          departureTime={formatTime(flight.segments.go[0].departureTime)}
          departureDate={flight.godepartureDate}
          arrivalCode={flight.segments.go[0].arrival}
          arrivalAirport={flight.segments.go[0].arrivalAirport}
          arrivalTime={formatTime(flight.segments.go[0].arrivalTime)}
          arrivalDate={flight.goarrivalDate}
          duration={flight.goflightduration}
          flightType={
            flight.transit.go.transit1 === "0" ? "NON STOP" : "Transit"
          }
          refundable={flight.refundable}
          flightClass={flight.class}
          baggage={`${flight.bags} Kg`}
          currentPrice={flight.netfare}
          originalPrice={flight.customerPrice}
          flight={flight}
          onStatusChange={setStatus}
        />
      ) : status === "to-from" ? (
        <FlightCardInteractive
          airlineLogo=""
          airlineName={flight.segments.back[0].marketingcareerName}
          flightNumber={`${flight.segments.back[0].marketingcareer}-${flight.segments.back[0].marketingflight}`}
          departureCode={flight.segments.back[0].departure}
          departureAirport={flight.segments.back[0].departureAirport}
          departureTime={formatTime(flight.segments.back[0].departureTime)}
          departureDate={flight.backdepartureDate}
          arrivalCode={flight.segments.back[0].arrival}
          arrivalAirport={flight.segments.back[0].arrivalAirport}
          arrivalTime={formatTime(flight.segments.back[0].arrivalTime)}
          arrivalDate={flight.backarrivalDate}
          duration={flight.backflightduration}
          flightType={
            flight.transit.back.transit1 === "0" ? "NON STOP" : "Transit"
          }
          refundable={flight.refundable}
          flightClass={flight.class}
          baggage={`${flight.bags} Kg`}
          currentPrice={flight.netfare}
          originalPrice={flight.customerPrice}
          flight={flight}
          onStatusChange={setStatus}
        />
      ) : null}

      {/* <FlightCardInteractive
        airlineLogo=""
        airlineName={flight.segments.go[0].marketingcareerName} // "USBangla Airlines"
        flightNumber={`${flight.segments.go[0].marketingcareer}-${flight.segments.go[0].marketingflight}`} // "BS-157"
        departureCode={flight.segments.go[0].departure} // "DAC"
        departureAirport={flight.segments.go[0].departureAirport} // "Hazrat Shahjalal Intl Airport"
        departureTime={formatTime(flight.segments.go[0].departureTime)} // "16:35"
        departureDate={flight.godepartureDate} // "Wed 23 Apr 2025"
        arrivalCode={flight.segments.go[0].arrival} // "CXB"
        arrivalAirport={flight.segments.go[0].arrivalAirport} // "Cox's Bazar Airport"
        arrivalTime={formatTime(flight.segments.go[0].arrivalTime)} // "17:40"
        arrivalDate={flight.goarrivalDate} // "Wed 23 Apr 2025"
        duration={flight.goflightduration} // "1H 5Min"
        flightType={flight.transit.go.transit1 === "0" ? "NON STOP" : "Transit"} // "NON STOP"
        refundable={flight.refundable} // "Refundable"
        flightClass={flight.class} // "economy"
        baggage={`${flight.bags} Kg`} // "20 Kg"
        currentPrice={flight.netfare} // 11128
        originalPrice={flight.customerPrice} // 12398
        flight={flight}
      /> */}
      {/* Header */}
      <SectionHeader>
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
      </SectionHeader>

      {/* Outbound Flight */}
      <FlightSegment>
        {/* Airline Logo and Info */}
        <Box>
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

      {/* FARE SUMMARY SECTION */}
      <SectionHeader>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#2cd889",
            fontWeight: "bold",
            fontSize: "0.9rem",
          }}
        >
          FARE SUMMARY
        </Typography>
      </SectionHeader>

      <Box p={2}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <StyledTableHeaderCell>Pax Type</StyledTableHeaderCell>
              <StyledTableHeaderCell>Base Fare (BDT)</StyledTableHeaderCell>
              <StyledTableHeaderCell>Tax Fees (BDT)</StyledTableHeaderCell>
              <StyledTableHeaderCell>Per Passenger</StyledTableHeaderCell>
              <StyledTableHeaderCell>Total Cost (BDT)</StyledTableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell>Adult</StyledTableCell>
              <StyledTableCell>
                {flight.pricebreakdown[0].BaseFare} ৳
              </StyledTableCell>
              <StyledTableCell>
                {flight.pricebreakdown[0].Tax} ৳
              </StyledTableCell>
              <StyledTableCell>
                ({Number(flight.pricebreakdown[0].BaseFare)}+
                {Number(flight.pricebreakdown[0].Tax)} x {searchState.pax.adult}
                ) ৳
              </StyledTableCell>
              <StyledTableCell>
                {(Number(flight.pricebreakdown[0].BaseFare) +
                  Number(flight.pricebreakdown[0].Tax)) *
                  searchState.pax.adult}{" "}
                ৳
              </StyledTableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Box mt={2} px={2} py={1} sx={{ borderTop: "1px solid #e0e0e0" }}>
          <Box display="flex" justifyContent="space-between" mb={0.5}>
            <Typography sx={{ color: "#2cd889", fontSize: "0.9rem" }}>
              Total
            </Typography>
            <Typography sx={{ color: "#2cd889", fontSize: "0.9rem" }}>
              {(Number(flight.pricebreakdown[0].BaseFare) +
                Number(flight.pricebreakdown[0].Tax)) *
                searchState.pax.adult}{" "}
              ৳
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mb={0.5}>
            <Typography sx={{ color: "#2cd889", fontSize: "0.9rem" }}>
              Discount
            </Typography>
            <Typography sx={{ color: "#2cd889", fontSize: "0.9rem" }}>
              {flight.pricebreakdown[0].Discount} ৳
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography
              sx={{ color: "#2cd889", fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Grand Total
            </Typography>
            <Typography
              sx={{ color: "#2cd889", fontSize: "0.9rem", fontWeight: "bold" }}
            >
              {(Number(flight.pricebreakdown[0].BaseFare) +
                Number(flight.pricebreakdown[0].Tax)) *
                searchState.pax.adult -
                flight.pricebreakdown[0].Discount}{" "}
              ৳
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* FARE POLICY SECTION */}
      <SectionHeader>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#2cd889",
            fontWeight: "bold",
            fontSize: "0.9rem",
          }}
        >
          FARE POLICY
        </Typography>
      </SectionHeader>

      <Box p={2}>
        <div
          style={{
            display: "grid",
            gap: "10px",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div>
            <PolicyBox>Cancellation</PolicyBox>
            <PolicyText>
              Refund Amount = Paid Amount - Airline Cancellation Fee
            </PolicyText>
          </div>
          <div>
            <PolicyBox>Re-Issue</PolicyBox>
            <PolicyText>
              Re-issue Fee = Airline's Fee + Fare Difference
            </PolicyText>
          </div>
          <div>
            <PolicyBox>Refund</PolicyBox>
            <PolicyText>
              Refund Fee = Airline's Fee + Fare Difference
            </PolicyText>
          </div>
          <div>
            <PolicyBox>Void</PolicyBox>
            <PolicyText>Void Fee = Airline's Fee + Fare Difference</PolicyText>
          </div>
        </div>
      </Box>

      {/* Footer with Book & Hold */}
      <FooterContainer>
        <Box>
          <Typography sx={{ color: "white", fontSize: "0.8rem" }}>
            Total (include VAT)
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: "1.2rem", fontWeight: "bold" }}
          >
            Fare: 11280 ৳
          </Typography>
        </Box>
        <BookHoldButton>BOOK & HOLD</BookHoldButton>
      </FooterContainer>
    </FlightDetailsContainer>
  );
};

export default FlightDetails;
