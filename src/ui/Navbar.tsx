"use client";

import type React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router";

// Styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  position: "fixed",
  top: 0,
  height: "90px",
  fontFamily: "sans-serif",
}));

const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const LogoText = styled("div")({
  fontWeight: 700,
  fontSize: "24px",
  letterSpacing: "0.5px",
});

const GreenText = styled("span")({
  color: "#1ed393",
});

const GrayText = styled("span")({
  color: "#666",
});

const TravelAgencyButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#1ed393",
  color: "white",
  borderRadius: "25px",
  padding: "8px 20px",
  marginRight: "16px",
  "&:hover": {
    backgroundColor: "#19b37d",
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: "8px",
    padding: "6px 16px",
    fontSize: "12px",
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#4b4e6d",
  color: "white",
  borderRadius: "25px",
  padding: "8px 20px",
  "&:hover": {
    backgroundColor: "#3d3f58",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "6px 16px",
    fontSize: "12px",
  },
}));

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <StyledAppBar>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between", py: 1 }}
        >
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <LogoContainer>
              <LogoText>
                <GreenText>FLY</GreenText>
                <GreenText>FAR</GreenText>
                <GrayText>TECH</GrayText>
              </LogoText>
            </LogoContainer>
          </Link>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon sx={{ color: "#4b4e6d" }} />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <TravelAgencyButton fullWidth>
                          TRAVEL AGENCY
                        </TravelAgencyButton>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <LoginButton fullWidth>LOGIN / SIGN UP</LoginButton>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex" }}>
              <TravelAgencyButton variant="contained" disableElevation>
                TRAVEL AGENCY
              </TravelAgencyButton>
              <LoginButton variant="contained" disableElevation>
                LOGIN / SIGN UP
              </LoginButton>
            </Box>
          )}
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;
