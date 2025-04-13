"use client";

import type React from "react";
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  IconButton,
  InputAdornment,
  useTheme,
  useMediaQuery,
  Divider,
  Link,
  styled,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";

// Styled components
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#2ecc9a", // Exact color from the design
  color: "white",
  padding: theme.spacing(5, 0, 2, 0),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4, 0, 2, 0),
  },
}));

const FooterLink = styled(Link)({
  color: "white",
  textDecoration: "none",
  display: "block",
  marginBottom: "10px",
  "&:hover": {
    textDecoration: "underline",
  },
});

const SocialIconButton = styled(Box)({
  width: "30px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "10px",
  cursor: "pointer",
});

const CertificationBox = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "4px",
  padding: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "70px",
  marginBottom: theme.spacing(1),
  marginRight: theme.spacing(1),
}));

const PaymentMethodsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(2),
}));

const PaymentMethodBox = styled(Box)({
  backgroundColor: "white",
  borderRadius: "4px",
  padding: "5px",
  margin: "3px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "50px",
  height: "30px",
});

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={isSmall ? 4 : 3}>
          {/* Need Help Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ mb: 3, fontWeight: "normal", fontSize: "1.25rem" }}
            >
              Need Help
            </Typography>
            <Box sx={{ display: "flex", mb: 2 }}>
              <LocationOnIcon
                sx={{ mr: 1, fontSize: "20px", mt: "2px", color: "white" }}
              />
              <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                Ka 11/2A, Bashundhora R/A Road, Jagannathpur, Dhaka 1229
              </Typography>
            </Box>
            <Box sx={{ display: "flex", mb: 2, alignItems: "center" }}>
              <EmailIcon sx={{ mr: 1, fontSize: "20px", color: "white" }} />
              <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                support@flyfannt.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", mb: 3, alignItems: "center" }}>
              <PhoneIcon sx={{ mr: 1, fontSize: "20px", color: "white" }} />
              <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                +880 1755 572 099
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              {/* Facebook icon */}
              <SocialIconButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
              </SocialIconButton>
              {/* Instagram icon */}
              <SocialIconButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
                </svg>
              </SocialIconButton>
              {/* WhatsApp icon */}
              <SocialIconButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M17.6 6.32C16.27 5.03 14.5 4.32 12.64 4.32C8.78 4.32 5.64 7.45 5.64 11.32C5.64 12.66 6.01 13.95 6.69 15.07L5.59 18.5L9.14 17.43C10.21 18.05 11.4 18.37 12.64 18.37C16.5 18.37 19.64 15.24 19.64 11.37C19.64 9.5 18.93 7.73 17.64 6.32H17.6ZM12.64 17.13C11.54 17.13 10.48 16.82 9.56 16.24L9.31 16.09L7.09 16.72L7.73 14.56L7.56 14.29C6.91 13.33 6.56 12.33 6.56 11.29C6.56 8.11 9.28 5.5 12.61 5.5C14.15 5.5 15.6 6.09 16.67 7.15C17.74 8.22 18.33 9.67 18.33 11.21C18.38 14.38 15.66 17.09 12.64 17.09V17.13ZM15.35 12.65C15.16 12.56 14.22 12.09 14.03 12.04C13.85 11.98 13.73 11.95 13.6 12.14C13.48 12.33 13.1 12.74 13 12.87C12.9 13 12.78 13.03 12.59 12.94C12.4 12.85 11.77 12.64 11.03 11.98C10.45 11.47 10.05 10.83 9.93 10.64C9.82 10.45 9.91 10.35 10 10.25C10.08 10.16 10.19 10.02 10.29 9.92C10.39 9.82 10.42 9.74 10.48 9.62C10.53 9.5 10.5 9.4 10.45 9.31C10.4 9.22 10.01 8.27 9.85 7.9C9.69 7.53 9.53 7.58 9.42 7.58C9.31 7.58 9.19 7.55 9.06 7.55C8.94 7.55 8.72 7.6 8.54 7.79C8.35 7.98 7.86 8.45 7.86 9.4C7.86 10.35 8.54 11.26 8.64 11.39C8.74 11.51 10.05 13.47 11.99 14.3C12.35 14.47 12.63 14.56 12.86 14.63C13.22 14.75 13.56 14.73 13.82 14.68C14.12 14.63 14.88 14.22 15.04 13.79C15.2 13.37 15.2 13 15.15 12.92C15.1 12.84 14.98 12.79 14.79 12.7L15.35 12.65Z" />
                </svg>
              </SocialIconButton>
            </Box>
          </Grid>

          {/* Discover Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ mb: 3, fontWeight: "normal", fontSize: "1.25rem" }}
            >
              Discover
            </Typography>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">Payment Method</FooterLink>
            <FooterLink href="#">Terms and Condition</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Refund & Cancellation Policy</FooterLink>
          </Grid>

          {/* Certification Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ mb: 3, fontWeight: "normal", fontSize: "1.25rem" }}
            >
              Certification
            </Typography>
            <Grid container spacing={1}>
              {/* IATA Logo */}
              <Grid item xs={6}>
                <CertificationBox>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        color: "#666",
                        fontSize: "0.7rem",
                      }}
                    >
                      Authorized by
                    </Typography>
                    <img
                      src="/placeholder.svg?height=30&width=60"
                      alt="IATA"
                      style={{ maxWidth: "100%", maxHeight: "30px" }}
                    />
                  </Box>
                </CertificationBox>
              </Grid>
              {/* ATAB Logo */}
              <Grid item xs={6}>
                <CertificationBox>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        color: "#666",
                        fontSize: "0.7rem",
                      }}
                    >
                      Member of
                    </Typography>
                    <img
                      src="/placeholder.svg?height=30&width=60"
                      alt="ATAB"
                      style={{ maxWidth: "100%", maxHeight: "30px" }}
                    />
                  </Box>
                </CertificationBox>
              </Grid>
              {/* TOAB Logo */}
              <Grid item xs={6}>
                <CertificationBox>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        color: "#666",
                        fontSize: "0.7rem",
                      }}
                    >
                      Member of
                    </Typography>
                    <img
                      src="/placeholder.svg?height=30&width=60"
                      alt="TOAB"
                      style={{ maxWidth: "100%", maxHeight: "30px" }}
                    />
                  </Box>
                </CertificationBox>
              </Grid>
              {/* Approved Agent Logo */}
              <Grid item xs={6}>
                <CertificationBox>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        color: "#666",
                        fontSize: "0.7rem",
                      }}
                    >
                      Approved Agent
                    </Typography>
                    <img
                      src="/placeholder.svg?height=30&width=60"
                      alt="Approved Agent"
                      style={{ maxWidth: "100%", maxHeight: "30px" }}
                    />
                  </Box>
                </CertificationBox>
              </Grid>
            </Grid>
          </Grid>

          {/* Get In Touch Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ mb: 3, fontWeight: "normal", fontSize: "1.25rem" }}
            >
              Get In Touch
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, fontSize: "0.9rem" }}>
              Question or feedback we would love to hear from you
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                placeholder="Email Address"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "50px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px",
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
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        type="submit"
                        edge="end"
                        sx={{
                          backgroundColor: "#2ecc9a",
                          color: "white",
                          borderRadius: "50%",
                          width: "36px",
                          height: "36px",
                          "&:hover": {
                            backgroundColor: "#25a07c",
                          },
                        }}
                      >
                        <SendIcon sx={{ fontSize: "18px" }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </form>
          </Grid>
        </Grid>

        {/* Payment Methods Section */}
        <Box sx={{ mt: 5, textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "500", mr: 1 }}>
              Pay With
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(45px, 1fr))",
                gap: "5px",
                maxWidth: "600px",
                justifyContent: "center",
              }}
            >
              {/* Payment method logos - 5 rows of 4 logos each */}
              {Array.from({ length: 20 }).map((_, index) => (
                <PaymentMethodBox key={index}>
                  <img
                    src="/placeholder.svg?height=20&width=40"
                    alt={`Payment method ${index + 1}`}
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </PaymentMethodBox>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                ml: { xs: 0, md: 2 },
                mt: { xs: 2, md: 0 },
              }}
            >
              <Typography variant="body2" sx={{ mr: 1, whiteSpace: "nowrap" }}>
                Verified by
              </Typography>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                  p: 0.5,
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src="/placeholder.svg?height=20&width=100"
                  alt="SSL Commerz"
                  style={{ height: "100%", maxWidth: "100px" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider
          sx={{ backgroundColor: "rgba(255,255,255,0.2)", my: 2, mt: 4 }}
        />

        {/* Copyright Section */}
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 2, fontSize: "0.85rem" }}
        >
          © Copyright 2025 by Fly Far Tech | B2C OTA Portal
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
