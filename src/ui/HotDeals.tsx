"use client";

import type React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  styled,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

// Custom styled components
const HotDealsContainer = styled(Box)({
  padding: "20px 0",
  backgroundColor: "#f0f4f7",
  width: "100%",
});

const ContentContainer = styled(Box)({
  maxWidth: "1200px",
  // margin: "0 auto",
  padding: "0 20px",
});

const HeaderContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
});

const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
  backgroundColor: "#2cd889",
  borderRadius: "100px",
  height: "50px",
  padding: "2px 20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .MuiToggleButtonGroup-grouped": {
    border: "none",
    borderRadius: "30px",
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "0.8rem",
    padding: "0 30px",
    minWidth: 0,
    height: "30px",
    // minHeight: 0,
    "&.Mui-selected": {
      backgroundColor: "#3f4b63",
      color: "white",
    },
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  },
});

const TabContent = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "8px",
});

const DealCard = styled(Box)({
  overflow: "hidden",
  height: "210px",
  width: "100%",
});

interface TabData {
  id: string;
  label: string;
  deals: {
    id: string;
    image: string;
    alt: string;
  }[];
}

interface HotDealsTabsProps {
  tabs: TabData[];
}

const HotDealsTabs: React.FC<HotDealsTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  const handleTabChange = (
    event: React.MouseEvent<HTMLElement>,
    newTab: string | null
  ) => {
    if (newTab !== null) {
      setActiveTab(newTab);
    }
  };

  const activeDeals = tabs.find((tab) => tab.id === activeTab)?.deals || [];

  return (
    <HotDealsContainer>
      <ContentContainer>
        <HeaderContainer>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333" }}>
            Hot Deals
          </Typography>
          <StyledToggleButtonGroup
            value={activeTab}
            exclusive
            onChange={handleTabChange}
            aria-label="deal categories"
          >
            {tabs.map((tab) => (
              <ToggleButton
                key={tab.id}
                value={tab.id}
                aria-label={`${tab.label} deals`}
              >
                {tab.label}
              </ToggleButton>
            ))}
          </StyledToggleButtonGroup>
        </HeaderContainer>

        <TabContent>
          {activeDeals.map((deal) => (
            <DealCard key={deal.id}>
              <Box
                component="img"
                src={deal.image}
                alt={deal.alt}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </DealCard>
          ))}
        </TabContent>
      </ContentContainer>
    </HotDealsContainer>
  );
};

export default HotDealsTabs;
