import { Container } from "@mui/material";
import SearchBox from "../features/flight/SearchBox";
import HotDealsTabs from "../ui/HotDeals";
import PromotionalSlider from "../ui/PromotionalSlider";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

// Sample tabs data with deals
const tabsData = [
  {
    id: "flight",
    label: "FLIGHT",
    deals: [
      {
        id: "usbangla",
        image:
          "https://cdn.flyfarint.com/WL/FFA2654/hotdealflightimg1.webp?uid=1744528336220",
        alt: "US Bangla Airlines - Up to 11% discount on tickets",
      },
      {
        id: "flydubai",
        image:
          "https://cdn.flyfarint.com/WL/FFA2654/hotdealflightimg2.webp?uid=1744528336220",
        alt: "FlyDubai - Get your best deal here",
      },
      {
        id: "airastra",
        image:
          "https://cdn.flyfarint.com/WL/FFA2654/hotdealflightimg3.webp?uid=1744528336220",
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
          "https://cdn.flyfarint.com/WL/FFA2654/hotdealgroupfareimg1.webp?uid=1744530171583",
        alt: "Group fare deal 1",
      },
      {
        id: "group-deal2",
        image:
          "https://cdn.flyfarint.com/WL/FFA2654/hotdealgroupfareimg2.webp?uid=1744530171583",
        alt: "Group fare deal 2",
      },
      {
        id: "group-deal3",
        image:
          "https://cdn.flyfarint.com/WL/FFA2654/hotdealgroupfareimg3.webp?uid=1744530171583",
        alt: "Group fare deal 3",
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
          "https://cdn.flyfarint.com/WL/FFA2654/hotdealtourimg1.webp?uid=1744530257398",
        alt: "Tour deal 1",
      },
      {
        id: "tour-deal2",
        image:
          "https://cdn.flyfarint.com/WL/FFA2654/hotdealtourimg2.webp?uid=1744530257398",
        alt: "Tour deal 2",
      },
      {
        id: "tour-deal3",
        image:
          "https://cdn.flyfarint.com/WL/FFA2654/hotdealtourimg3.webp?uid=1744530257398",
        alt: "Tour deal 3",
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
          "https://cdn.flyfarint.com/WL/FFA2654/hotdealvisaimg1.webp?uid=1744530320588",
        alt: "Visa deal 1",
      },
      {
        id: "visa-deal2",
        image:
          "https://cdn.flyfarint.com/WL/FFA2654/hotdealvisaimg2.webp?uid=1744530320588",
        alt: "Visa deal 2",
      },
      {
        id: "visa-deal3",
        image:
          "https://cdn.flyfarint.com/WL/FFA2654/hotdealvisaimg1.webp?uid=1744530320588",
        alt: "Visa deal 3",
      },
    ],
  },
];

// Sample slides data
const slides: {
  id: string;
  backgroundImage: string;
}[] = [
  {
    id: "slide1",
    backgroundImage:
      "https://cdn.flyfarint.com/WL/B2C/FFA2654/sliderimg5.webp?t=1744528336213",
  },
  {
    id: "slide2",
    backgroundImage:
      "https://images.hdqwalls.com/wallpapers/bear-lake-reflection-at-rocky-mountain-national-park-4k-w2.jpg",
  },
  {
    id: "slide3",
    backgroundImage:
      "https://images.coolwallpapers.me/picsup/2509942-high-quality-nature-wallpaper-free-download.jpg",
  },
  // {
  //   id: "slide4",
  //   backgroundImage:
  //     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slider4-jkl345mno678.png",
  // },
  // {
  //   id: "slide5",
  //   backgroundImage:
  //     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slider5-pqr901stu234.png",
  // },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <SearchBox />
      <Container
        maxWidth="lg"
        sx={{ width: "100%", paddingTop: "50px", boxSizing: "content-box" }}
      >
        <PromotionalSlider slides={slides} autoPlay={true} interval={5000} />
      </Container>

      <Container
        maxWidth="lg"
        sx={{ width: "100%", paddingTop: "50px", boxSizing: "content-box" }}
      >
        <HotDealsTabs tabs={tabsData} />
      </Container>
      <Footer />
    </>
  );
}
