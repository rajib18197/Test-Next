import React from "react";
import { Box, styled, keyframes, Container } from "@mui/material";

// Create shimmer animation
const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

// Base shimmer component
const ShimmerBase = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#dddddd",
  backgroundImage:
    "linear-gradient(to right, #dddddd 0%, #e8e8e8 20%, #dddddd 40%, #dddddd 100%)",
  backgroundSize: "800px 104px",
  animation: `${shimmer} 1.5s infinite linear forwards`,
  borderRadius: "4px",
}));

// Container for the entire loading UI
const LoadingContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
});

// Sidebar shimmer
const SidebarShimmer = styled(Box)({
  //   width: "220px",
  height: "530px",
  backgroundColor: "#c9c9c9",
  borderRadius: "4px",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

// Header shimmer in the blue section
const HeaderShimmer = styled(Box)({
  backgroundColor: "#d9e6f2", // Light blue background
  padding: "16px",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

// Flight item shimmer
const FlightItemShimmer = styled(Box)({
  borderRadius: "4px",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  backgroundColor: "#eaeaea",
  width: "100%",
  height: "180px",
});

// Main content area
const MainContent = styled(Box)({
  display: "grid",
  gridTemplateColumns: "220px 1fr",
  gap: "10px",
});

const ContentArea = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
});

export const ShimmerLoadingEffect: React.FC = () => {
  return (
    <Container>
      <MainContent>
        {/* Left sidebar */}
        <SidebarShimmer>
          {/* Sidebar elements */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <ShimmerBase sx={{ width: "70px", height: "20px" }} />
            <ShimmerBase sx={{ width: "90px", height: "20px" }} />
          </Box>
          <ShimmerBase sx={{ width: "100%", height: "35px" }} />
          <Box sx={{ display: "flex", gap: 1 }}>
            <ShimmerBase sx={{ width: "120px", height: "20px" }} />
            <ShimmerBase sx={{ width: "40px", height: "20px" }} />
          </Box>
          <ShimmerBase sx={{ width: "100%", height: "30px" }} />
          <ShimmerBase sx={{ width: "100%", height: "30px" }} />
          <ShimmerBase sx={{ width: "100%", height: "30px" }} />
          <Box sx={{ display: "flex", gap: 1 }}>
            <ShimmerBase sx={{ width: "120px", height: "20px" }} />
            <ShimmerBase sx={{ width: "40px", height: "20px" }} />
          </Box>
          <ShimmerBase sx={{ width: "100%", height: "30px" }} />
          <ShimmerBase sx={{ width: "100%", height: "30px" }} />
          <ShimmerBase sx={{ width: "100%", height: "50px", mt: "auto" }} />
        </SidebarShimmer>

        {/* Right content area */}
        <ContentArea>
          {/* Header with light blue background */}
          <HeaderShimmer>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <ShimmerBase
                sx={{ width: "30px", height: "30px", borderRadius: "50%" }}
              />
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <ShimmerBase sx={{ width: "200px", height: "16px" }} />
                <ShimmerBase sx={{ width: "150px", height: "14px" }} />
              </Box>
            </Box>
            <ShimmerBase sx={{ width: "120px", height: "30px" }} />
          </HeaderShimmer>

          {/* Empty container for search results */}
          <ShimmerBase sx={{ width: "100%", height: "40px" }} />

          {/* Flight items - three of them */}
          {[1, 2, 3].map((item) => (
            <FlightItemShimmer key={item}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  height: "100%",
                }}
              >
                {/* Left side: Airline logo and name */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    width: "20%",
                  }}
                >
                  <ShimmerBase
                    sx={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  />
                  <Box>
                    <ShimmerBase
                      sx={{ width: "100px", height: "16px", mb: 1 }}
                    />
                    <ShimmerBase sx={{ width: "60px", height: "14px" }} />
                  </Box>
                </Box>

                {/* Center: Departure, icon, Arrival */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    width: "40%",
                    justifyContent: "center",
                  }}
                >
                  <Box>
                    <ShimmerBase
                      sx={{ width: "40px", height: "20px", mb: 1 }}
                    />
                    <ShimmerBase
                      sx={{ width: "100px", height: "14px", mb: 1 }}
                    />
                    <ShimmerBase sx={{ width: "80px", height: "14px" }} />
                  </Box>

                  <ShimmerBase
                    sx={{ width: "40px", height: "40px", borderRadius: "4px" }}
                  />

                  <Box>
                    <ShimmerBase
                      sx={{ width: "40px", height: "20px", mb: 1 }}
                    />
                    <ShimmerBase
                      sx={{ width: "100px", height: "14px", mb: 1 }}
                    />
                    <ShimmerBase sx={{ width: "80px", height: "14px" }} />
                  </Box>
                </Box>

                {/* Right Side: Price + Button */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: 1,
                    width: "20%",
                  }}
                >
                  <ShimmerBase sx={{ width: "60px", height: "20px" }} />
                  <ShimmerBase sx={{ width: "40px", height: "12px" }} />
                  <ShimmerBase
                    sx={{
                      width: "100px",
                      height: "36px",
                      borderRadius: "20px",
                    }}
                  />
                </Box>
              </Box>
            </FlightItemShimmer>
          ))}
        </ContentArea>
      </MainContent>
    </Container>
  );
};

export default ShimmerLoadingEffect;
