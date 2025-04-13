import type React from "react";
import type { SxProps, Theme } from "@mui/material";

interface FlightIconProps {
  direction: "outbound" | "inbound";
  sx?: SxProps<Theme>;
}

/**
 * Flight icon component
 *
 * @param props - Component props
 * @returns SVG icon
 */
const FlightIcon: React.FC<FlightIconProps> = ({ direction, sx }) => {
  return (
    <svg
      className={`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-${
        direction === "outbound" ? "jr0dk7" : "10w0s29"
      }`}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="FlightOutlinedIcon"
      style={sx as React.CSSProperties}
    >
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"></path>
    </svg>
  );
};

export default FlightIcon;
