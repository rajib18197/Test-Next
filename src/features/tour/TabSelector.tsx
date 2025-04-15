"use client";

import type React from "react";
import { useState } from "react";
import { Box, styled } from "@mui/material";

// Custom styled components to match the design exactly
const SelectorContainer = styled(Box)({
  width: "100%",
  maxWidth: 300,
  backgroundColor: "#00c853",
});

const Option = styled(Box)<{ active: boolean }>(({ active }) => ({
  padding: "12px 16px",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
  position: "relative",
  borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
  fontWeight: active ? 500 : 400,
}));

const TravelTypeSelector: React.FC = ({ onChange }) => {
  const [activeOption, setActiveOption] = useState(0);

  return (
    <SelectorContainer>
      <Option
        active={activeOption === 0}
        onClick={() => {
          setActiveOption(0);
          onChange("Domestic");
        }}
      >
        Domestic
      </Option>
      <Option
        active={activeOption === 1}
        onClick={() => {
          setActiveOption(1);
          onChange("International");
        }}
      >
        International
      </Option>
    </SelectorContainer>
  );
};

export default TravelTypeSelector;
