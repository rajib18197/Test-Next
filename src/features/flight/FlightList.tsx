import { Box } from "@mui/material";
import FlightCard from "./FlightCard";

export default function FlightList() {
  return (
    <Box sx={{ p: 3, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <FlightCard
        airlineName="USBangla Airlines"
        airlineLogo="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gg-dkfnfc3aHqUC7K2znUmyWj2yYtXW6V.png"
        flightNumber="BS-141"
        departureCode="DAC"
        departureAirport="Hazrat Shahjalal Intl Airport"
        departureTime="07:20"
        departureDate="Sun 13 Apr 2025"
        arrivalCode="CXB"
        arrivalAirport="COXs Bazar Airport"
        arrivalTime="08:25"
        arrivalDate="Sun 13 Apr 2025"
        duration="1H 5Min"
        flightType="NON STOP"
        refundable={true}
        flightClass="Economy"
        baggage="20 Kg"
        currentPrice={11078}
        originalPrice={12398}
      />
    </Box>
  );
}
