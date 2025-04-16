import { LocationOn } from "@mui/icons-material";
import {
  Box,
  ClickAwayListener,
  Popper,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import DestinationSelector from "../hotel/DestinationSelector";

const LocationField = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#e3f2fd",
  borderRadius: "4px",
  padding: "12px",
  // marginBottom: "10px",
});
const StyledPopper = styled(Popper)(() => ({
  borderRadius: 6,
  width: 300,
  fontSize: 13,
}));

const countries = [
  { id: "bangladesh", countryName: "Bangladesh" },
  { id: "cananda", countryName: "CANADA" },
  { id: "cananda", countryName: "EGYPT" },
  { id: "malaysia", countryName: "MALAYSIA" },
  { id: "philippines", countryName: "PHILIPPINES" },
  { id: "srilanka", countryName: "SRILANKA" },
  { id: "tanzania", countryName: "TANZANIA" },
];

export default function DestinationCountry() {
  const [selectedCity, setSelectedCity] = useState("BANGLADESH");
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? "date-picker-popover" : undefined;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
    const target = event.target as HTMLElement;
    if (
      target.closest(".MuiSelect-select") ||
      target.closest(".MuiMenu-paper")
    ) {
      return;
    }

    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        padding: "0 16px",
        flex: 1,
        // borderRight: { xs: "none", md: "1px solid #e0e0e0" },
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "#555",
          fontWeight: 500,
          mb: 0.5,
        }}
      >
        SELECR VISA TYPE
      </Typography>
      <Typography
        variant="h4"
        sx={{
          color: "#00c4a7",
          fontWeight: 500,
          fontSize: "30px",
          mb: "auto",
        }}
      >
        {selectedCity.split(",")[0]}
      </Typography>

      <div style={{ width: "100%" }}>
        <LocationField
          onClick={handleClick}
          sx={{
            minHeight: 0,
            minWidth: 0,
            p: 0,
            borderRadius: "4px",
            cursor: "pointer",
          }}
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
            {selectedCity}
          </Typography>
        </LocationField>
      </div>

      <StyledPopper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        style={{
          width: "100%,",
          padding: "4px 6px",
          // background: "#32d095",
          borderRadius: "0 !important",
        }}
      >
        <ClickAwayListener onClickAway={(e) => handleClose(e as any)}>
          <DestinationSelector
            data={countries}
            onSelectItem={(str) => {
              setSelectedCity(str);
              setAnchorEl(null);
            }}
            getDisplayLabel={(item) => item.countryName}
            getSearchFields={(item) => [item.countryName]}
          />
        </ClickAwayListener>
      </StyledPopper>
    </Box>
  );
}
