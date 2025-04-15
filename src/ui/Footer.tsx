import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  IconButton,
  Divider,
  Stack,
  InputAdornment,
  styled, // Import styled utility
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SendIcon from "@mui/icons-material/Send";

// --- Styled Components (for cleaner component structure) ---

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#1abc9c", // Approximate green color from image
  color: "#ffffff",
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(2),
  fontSize: "0.875rem",
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: "#ffffff",
  textDecoration: "none",
  display: "block",
  marginBottom: theme.spacing(1),
  "&:hover": {
    textDecoration: "underline",
  },
}));

const FooterIcon = styled(IconButton)(({ theme }) => ({
  color: "#ffffff",
  padding: theme.spacing(0.5),
  marginRight: theme.spacing(1),
  border: "1px solid rgba(255, 255, 255, 0.5)", // Optional border like in design
  borderRadius: "50%", // Make it circular
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  // Ensure consistent size
  width: "32px",
  height: "32px",
}));

const FooterTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#ffffff", // White background for the input
    borderRadius: "20px", // Rounded corners
    paddingRight: 0, // Remove default padding to place icon button nicely
    "& fieldset": {
      borderColor: "transparent", // Hide default border
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent", // Hide focus border
    },
  },
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1.5), // Adjust padding
    color: "#333", // Darker text color inside input
    fontSize: "0.875rem", // Match other footer text size
  },
}));

const FooterSubmitButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#16a085", // Slightly darker green for button
  color: "#ffffff",
  padding: theme.spacing(0.8), // Adjust padding for visual balance
  "&:hover": {
    backgroundColor: "#117e6b", // Darker on hover
  },
}));

// --- Placeholder Data (Replace with actual image paths/URLs) ---

const certifications = [
  { alt: "Tata", src: "/images/placeholder-logo.png" }, // Replace
  { alt: "ATAB", src: "/images/placeholder-logo.png" }, // Replace
  { alt: "TOAB", src: "/images/placeholder-logo.png" }, // Replace
  { alt: "IATA", src: "/images/placeholder-logo.png" }, // Replace
  { alt: "Bangladesh Parjatan", src: "/images/placeholder-logo.png" }, // Replace
];

const paymentMethods = [
  { alt: "Visa", src: "/images/payment/visa.png" }, // Replace
  { alt: "Mastercard", src: "/images/payment/mastercard.png" }, // Replace
  { alt: "Amex", src: "/images/payment/amex.png" }, // Replace
  { alt: "UnionPay", src: "/images/payment/unionpay.png" }, // Replace
  { alt: "DBBL", src: "/images/payment/dbbl.png" }, // Replace
  { alt: "City Bank", src: "/images/payment/citybank.png" }, // Replace
  { alt: "MTB", src: "/images/payment/mtb.png" }, // Replace
  { alt: "Bkash", src: "/images/payment/bkash.png" }, // Replace
  { alt: "Nagad", src: "/images/payment/nagad.png" }, // Replace
  { alt: "Upay", src: "/images/payment/upay.png" }, // Replace
  // Add other logos from the design as needed
];

// --- Footer Component ---

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <FooterWrapper component="footer">
      <Container maxWidth="lg">
        {" "}
        {/* Limits max width and centers content */}
        {/* ============================================ */}
        {/* Top Section: 4 Columns Grid Layout          */}
        {/* ============================================ */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {" "}
          {/* spacing adds gaps between columns */}
          {/* --- Column 1: Need Help --- */}
          <Grid item xs={12} sm={6} md={3}>
            {" "}
            {/* xs: full width, sm: half width, md: quarter width */}
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Need Help
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{ mb: 1, alignItems: "flex-start" }}
            >
              <LocationOnIcon
                fontSize="small"
                sx={{ mt: 0.5, flexShrink: 0 }}
              />
              <Typography variant="body2">
                Ka 112/A, Bashundhora R/A Road, Jagannathpur, Dhaka 1229
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              sx={{ mb: 1, alignItems: "center" }}
            >
              <EmailIcon fontSize="small" sx={{ flexShrink: 0 }} />
              <Link
                href="mailto:support@flyfarint.com"
                color="inherit"
                underline="hover"
                variant="body2"
              >
                support@flyfarint.com
              </Link>
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              sx={{ mb: 2, alignItems: "center" }}
            >
              <PhoneIcon fontSize="small" sx={{ flexShrink: 0 }} />
              <Link
                href="tel:+8801755572099"
                color="inherit"
                underline="hover"
                variant="body2"
              >
                +880 1755 572 099
              </Link>
            </Stack>
            <Stack direction="row" spacing={0.5}>
              <FooterIcon aria-label="Facebook">
                <FacebookIcon fontSize="small" />
              </FooterIcon>
              <FooterIcon aria-label="Instagram">
                <InstagramIcon fontSize="small" />
              </FooterIcon>
              <FooterIcon aria-label="WhatsApp">
                <WhatsAppIcon fontSize="small" />
              </FooterIcon>
            </Stack>
          </Grid>
          {/* --- Column 2: Discover --- */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Discover
            </Typography>
            <FooterLink href="/about-us">About Us</FooterLink>
            <FooterLink href="/contact-us">Contact Us</FooterLink>
            <FooterLink href="/payment-method">Payment Method</FooterLink>
            <FooterLink href="/terms-and-conditions">
              Terms and Condition
            </FooterLink>
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/refund-cancellation-policy">
              Refund & Cancellation Policy
            </FooterLink>
          </Grid>
          {/* --- Column 3: Certification --- */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Certification
            </Typography>
            {/* Nested Grid for logos */}
            <Grid container spacing={1.5}>
              {certifications.map((cert) => (
                <Grid
                  item
                  xs={4}
                  key={cert.alt}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={cert.src} // Remember to replace this placeholder
                    alt={cert.alt}
                    sx={{
                      maxWidth: "100%", // Make image responsive within grid item
                      height: "auto",
                      maxHeight: "40px", // Limit height if needed
                      backgroundColor: "white", // Background for visibility if logo is transparent
                      padding: "4px",
                      borderRadius: "4px",
                      objectFit: "contain",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          {/* --- Column 4: Get In Touch --- */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Get In Touch
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Question or feedback we would love to hear from you
            </Typography>
            <FooterTextField
              variant="outlined"
              placeholder="Email Address"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ height: "100%" }}>
                    <FooterSubmitButton size="small" aria-label="Submit email">
                      <SendIcon fontSize="small" />
                    </FooterSubmitButton>
                  </InputAdornment>
                ),
                sx: { paddingRight: 0 }, // Ensure button sits flush
              }}
            />
          </Grid>
        </Grid>
        {/* End of Top 4 Columns Grid */}
        {/* ============================================ */}
        {/* Payment Methods Section                     */}
        {/* ============================================ */}
        <Grid container spacing={2} sx={{ alignItems: "center", mb: 3, mt: 2 }}>
          {" "}
          {/* Add some top margin */}
          {/* --- Pay With Title --- */}
          <Grid item xs={12} md={"auto"}>
            {" "}
            {/* Let title take auto width */}
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                textAlign: { xs: "center", md: "left" },
                mr: { md: 2 } /* Margin right on medium+ */,
              }}
            >
              Pay With
            </Typography>
          </Grid>
          {/* --- Payment Logos --- */}
          <Grid item xs={12} md>
            {" "}
            {/* Let logos take remaining space */}
            <Stack
              direction="row"
              spacing={1.5} // Adjust spacing between logos
              useFlexGap // Better spacing control
              flexWrap="wrap" // Allow logos to wrap on smaller screens
              sx={{ justifyContent: { xs: "center", md: "flex-start" } }} // Center on mobile, start on desktop
            >
              {paymentMethods.map((method) => (
                <Box
                  key={method.alt}
                  component="img"
                  src={method.src} // Remember to replace this placeholder
                  alt={method.alt}
                  sx={{
                    height: "25px", // Adjust height as needed
                    width: "auto",
                    backgroundColor: "white",
                    padding: "3px",
                    borderRadius: "3px",
                    objectFit: "contain",
                    verticalAlign: "middle", // Align logos nicely if they wrap
                  }}
                />
              ))}
            </Stack>
          </Grid>
          {/* --- SSL Commerz Verification --- */}
          <Grid
            item
            xs={12}
            md={"auto"}
            sx={{
              textAlign: { xs: "center", md: "right" },
              mt: { xs: 2, md: 0 },
            }}
          >
            {" "}
            {/* Auto width, add top margin on mobile */}
            <Typography
              variant="caption"
              sx={{ display: "inline-block", mr: 1 }}
            >
              Verified By:
            </Typography>
            <Box
              component="img"
              src="/images/payment/sslcommerz.png" // Replace with actual path
              alt="SSLCommerz Verified"
              sx={{ height: "30px", width: "auto", verticalAlign: "middle" }}
            />
          </Grid>
        </Grid>
        {/* End of Payment Methods Section */}
        {/* ============================================ */}
        {/* Divider and Copyright                       */}
        {/* ============================================ */}
        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.3)", mb: 2 }} />
        <Typography variant="body2" align="center">
          © Copyright {currentYear} by Fly Far Tech | B2C OTA Portal
        </Typography>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
