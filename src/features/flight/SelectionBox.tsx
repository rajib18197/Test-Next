import { Box, Typography } from "@mui/material";

interface SelectionBoxProps {
  labelText: "FROM" | "TO";
  acronym: string;
  children: React.ReactNode;
}

export default function SelectionBox({
  labelText,
  acronym,
  children,
}: SelectionBoxProps) {
  return (
    <Box sx={{ flex: 1, pr: 2, display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{
          mb: 1,
          textAlign: "center",
          color: "#666",
          fontSize: "14px",
        }}
      >
        {labelText}
      </Typography>
      <Typography
        sx={{
          fontSize: "40px",
          textAlign: "center",
          color: "#2dd4bf",
          mb: 2,
        }}
      >
        {acronym}
      </Typography>

      {children}
    </Box>
  );
}
