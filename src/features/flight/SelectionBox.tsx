import { CalendarMonth, LocationOn } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";

const LocationField = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#e3f2fd",
  borderRadius: "4px",
  padding: "12px",
  marginBottom: "10px",
});

const DateField = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#e3f2fd",
  borderRadius: "4px",
  padding: "12px",
});

interface SelectionBoxProps {
  labelText: "FROM" | "TO";
  acronym: string;
  fullName: string;
  date: string;
}

export default function SelectionBox({
  labelText,
  acronym,
  fullName,
  date,
}: SelectionBoxProps) {
  return (
    <Box sx={{ flex: 1, pr: 2 }}>
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
          // fontWeight: "bold",
          textAlign: "center",
          color: "#2dd4bf",
          mb: 2,
        }}
      >
        {acronym}
      </Typography>

      <LocationField
        sx={{ minHeight: 0, minWidth: 0, p: 0, borderRadius: "4px" }}
      >
        <LocationOn
          sx={{
            color: "#d7e7f4",
            mr: 1,
            bgcolor: "#32d095",
            p: "4px 11px",
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
          }}
        />
        <Typography sx={{ color: "#666", fontSize: "14px" }}>
          {fullName}
        </Typography>
      </LocationField>

      <DateField sx={{ minHeight: 0, minWidth: 0, p: 0, borderRadius: "4px" }}>
        <CalendarMonth
          sx={{
            color: "#2dd4bf",
            mr: 1,
            bgcolor: "green",
            p: "4px 8px",
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
          }}
        />
        <Typography sx={{ color: "#666", fontSize: "14px" }}>{date}</Typography>
      </DateField>
    </Box>
  );
}
