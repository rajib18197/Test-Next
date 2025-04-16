import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  TextField,
  IconButton,
  Divider,
  Stack,
  InputAdornment,
  styled,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SendIcon from "@mui/icons-material/Send";

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
  border: "1px solid rgba(255, 255, 255, 0.5)",
  borderRadius: "50%",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  width: "32px",
  height: "32px",
}));

const FooterTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    paddingRight: 0,
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1.5),
    color: "#333",
    fontSize: "0.875rem",
  },
}));

const FooterSubmitButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#16a085",
  color: "#ffffff",
  padding: theme.spacing(0.8),
  "&:hover": {
    backgroundColor: "#117e6b",
  },
}));

const certifications = [
  { alt: "Tata", src: "/download (1).png" },
  { alt: "ATAB", src: "/download (2).png" },
  { alt: "TOAB", src: "/download (3).png" },
  { alt: "IATA", src: "/download (4).png" },
  { alt: "Bangladesh Parjatan", src: "/download.png" },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ fontFamily: "sans-serif", width: "100%" }}>
      <Container maxWidth="lg">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr max-content max-content max-content",
            gap: "40px",
            marginBottom: "30px",
          }}
        >
          <div>
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
          </div>

          <div>
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
          </div>
          <div>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Certification
            </Typography>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "8px",
              }}
            >
              {certifications.map((cert) => (
                <div>
                  <Box
                    component="img"
                    src={cert.src}
                    alt={cert.alt}
                    sx={{
                      maxWidth: "100%",
                      height: "auto",
                      maxHeight: "40px",
                      backgroundColor: "white",
                      padding: "4px",
                      borderRadius: "4px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
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
                sx: { paddingRight: 0 },
              }}
            />
          </div>
        </div>

        <div
          style={{
            width: "800px",
            display: "grid",

            gap: "20px",
            justifyContent: "center",
            margin: "10px auto",
          }}
        >
          <img
            src="/payments/paymentgetway.webp"
            style={{
              width: "800px",
              height: "100px",
            }}
          />
        </div>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.3)", mb: 2 }} />
        <Typography variant="body2" align="center">
          © Copyright {currentYear} by Fly Far Tech | B2C OTA Portal
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
