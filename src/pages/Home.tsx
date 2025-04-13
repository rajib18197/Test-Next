import { Box, Container } from "@mui/material";
import SearchBox from "../features/flight/SearchBox";
import HotDealsTabs from "../ui/HotDeals";
import PromotionalSlider from "../ui/PromotionalSlider";
import Footer from "../ui/Footer";

// Sample tabs data with deals
const tabsData = [
  {
    id: "flight",
    label: "FLIGHT",
    deals: [
      {
        id: "usbangla",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd-oWp1vhBBcnLDLGf2WjnBMI2vZSg5ya.png",
        alt: "US Bangla Airlines - Up to 11% discount on tickets",
      },
      {
        id: "flydubai",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd-oWp1vhBBcnLDLGf2WjnBMI2vZSg5ya.png",
        alt: "FlyDubai - Get your best deal here",
      },
      {
        id: "airastra",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd-oWp1vhBBcnLDLGf2WjnBMI2vZSg5ya.png",
        alt: "Air Astra - Tickets available here",
      },
    ],
  },
  {
    id: "group",
    label: "GROUP FARE",
    deals: [
      {
        id: "group-deal1",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd-oWp1vhBBcnLDLGf2WjnBMI2vZSg5ya.png",
        alt: "Group fare deal 1",
      },
      {
        id: "group-deal2",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd-oWp1vhBBcnLDLGf2WjnBMI2vZSg5ya.png",
        alt: "Group fare deal 2",
      },
    ],
  },
  {
    id: "tour",
    label: "TOUR",
    deals: [
      {
        id: "tour-deal1",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd-oWp1vhBBcnLDLGf2WjnBMI2vZSg5ya.png",
        alt: "Tour deal 1",
      },
      {
        id: "tour-deal2",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd-oWp1vhBBcnLDLGf2WjnBMI2vZSg5ya.png",
        alt: "Tour deal 2",
      },
    ],
  },
  {
    id: "visa",
    label: "VISA",
    deals: [
      {
        id: "visa-deal1",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd-oWp1vhBBcnLDLGf2WjnBMI2vZSg5ya.png",
        alt: "Visa deal 1",
      },
    ],
  },
];

// Sample slides data
const slides = [
  {
    id: "slide1",
    backgroundImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slider-wZgTTD7U8OM1clq8Su4mzTE4P00vzY.png",
    title: "CALL US",
    subtitle:
      "TO DISCOVER DOMESTIC & INTERNATIONAL GROUP FARE RATES IN ANY AIRLINES",
    backgroundColor: "linear-gradient(90deg, #F9A826 0%, #F8B049 100%)",
    titleColor: "#1976d2",
    subtitleColor: "white",
  },
  {
    id: "slide2",
    backgroundColor: "linear-gradient(90deg, #1976d2 0%, #2196f3 100%)",
    title: "BOOK NOW",
    subtitle: "SPECIAL OFFERS ON INTERNATIONAL FLIGHTS",
    titleColor: "white",
    subtitleColor: "#F9A826",
  },
  {
    id: "slide3",
    backgroundColor: "linear-gradient(90deg, #388e3c 0%, #4caf50 100%)",
    title: "TRAVEL SAFE",
    subtitle: "COVID-19 SAFETY MEASURES FOR ALL FLIGHTS",
    titleColor: "white",
    subtitleColor: "white",
  },
  {
    id: "slide4",
    backgroundColor: "linear-gradient(90deg, #7b1fa2 0%, #9c27b0 100%)",
    title: "JOIN NOW",
    subtitle: "BECOME A MEMBER AND GET EXCLUSIVE DEALS",
    titleColor: "white",
    subtitleColor: "white",
  },
  {
    id: "slide5",
    backgroundColor: "linear-gradient(90deg, #c62828 0%, #e53935 100%)",
    title: "LAST MINUTE",
    subtitle: "GRAB THE BEST DEALS ON LAST MINUTE FLIGHTS",
    titleColor: "white",
    subtitleColor: "white",
  },
];

export default function Home() {
  return (
    <>
      <SearchBox />
      <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", py: 3 }}>
        <Container maxWidth="lg">
          <PromotionalSlider slides={slides} autoPlay={true} interval={5000} />
        </Container>
      </Box>
      <Footer />
    </>
  );
}
