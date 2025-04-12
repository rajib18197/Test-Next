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
// Custom styled components
const FlightDetailsContainer = styled(Paper)({
  borderRadius: 8,
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  width: "100%",
  maxWidth: "900px",
  margin: "0 auto",
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

const FlightDetails: React.FC<FlightDetailsProps> = ({
  outboundFlight,
  returnFlight,
  fareSummary,
}) => {
  return (
    <FlightDetailsContainer>
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
              <StyledTableCell>10,048 ৳</StyledTableCell>
              <StyledTableCell>2,350 ৳</StyledTableCell>
              <StyledTableCell>(10,048+2350 x 1) ৳</StyledTableCell>
              <StyledTableCell>12,398 ৳</StyledTableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Box mt={2} px={2} py={1} sx={{ borderTop: "1px solid #e0e0e0" }}>
          <Box display="flex" justifyContent="space-between" mb={0.5}>
            <Typography sx={{ color: "#2cd889", fontSize: "0.9rem" }}>
              Total
            </Typography>
            <Typography sx={{ color: "#2cd889", fontSize: "0.9rem" }}>
              12398 ৳
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mb={0.5}>
            <Typography sx={{ color: "#2cd889", fontSize: "0.9rem" }}>
              Discount
            </Typography>
            <Typography sx={{ color: "#2cd889", fontSize: "0.9rem" }}>
              1118 ৳
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
              11280 ৳
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
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <PolicyBox>Cancellation</PolicyBox>
            <PolicyText>
              Refund Amount = Paid Amount - Airline Cancellation Fee
            </PolicyText>
          </Grid>
          <Grid item xs={12} md={6}>
            <PolicyBox>Re-Issue</PolicyBox>
            <PolicyText>
              Re-issue Fee = Airline's Fee + Fare Difference
            </PolicyText>
          </Grid>
          <Grid item xs={12} md={6}>
            <PolicyBox>Refund</PolicyBox>
            <PolicyText>
              Refund Fee = Airline's Fee + Fare Difference
            </PolicyText>
          </Grid>
          <Grid item xs={12} md={6}>
            <PolicyBox>Void</PolicyBox>
            <PolicyText>Void Fee = Airline's Fee + Fare Difference</PolicyText>
          </Grid>
        </Grid>
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
