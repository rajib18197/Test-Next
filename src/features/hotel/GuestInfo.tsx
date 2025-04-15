import {
  Box,
  Button,
  ClickAwayListener,
  Popper,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import GuestCounter from "../../ui/GuestCounter";

const StyledPopper = styled(Popper)(({ theme }) => ({
  borderRadius: 6,
  width: 300,
  fontSize: 13,
}));

export default function GuestInfo() {
  const [people, setPeople] = useState({
    adults: 1,
    children: 0,
  });
  const total = people.adults + people.children;

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? "date-picker-popover" : undefined;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl) {
      setAnchorEl(null); // toggle off
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
    // Don't close if select is open
    if (isSelectOpen) {
      return;
    }

    // Prevent closing when clicking on month or year selectors
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "12px",
        borderRadius: "10px",
        bgcolor: "white",
      }}
    >
      <Box>
        <Typography
          variant="body2"
          sx={{
            color: "#00c4a7",
            fontWeight: 500,
            mb: 1,
          }}
        >
          Guests & Rooms
        </Typography>
        {/*  */}
        <Box
          sx={{
            bgcolor: "#f0f7ff",
            // p: 1.5,
            borderRadius: "4px",
            mb: 2,
            width: "100%",
          }}
          onClick={handleClick}
        >
          <Typography variant="body2" sx={{ color: "#555" }}>
            1 ROOM, {total} {total === 1 ? "GUEST" : "GUESTS"}, {people.adults}{" "}
            {people.adults === 1 ? "ADULT" : "ADULTS"}{" "}
            {people.children
              ? `, ${people.children} ${
                  people.children === 1 ? "CHILD" : "CHILDS"
                }`
              : ""}
          </Typography>
        </Box>

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
          <ClickAwayListener onClickAway={handleClose}>
            <GuestCounter onChange={setPeople} />
          </ClickAwayListener>
        </StyledPopper>
      </Box>

      <Button
        variant="contained"
        fullWidth
        sx={{
          bgcolor: "#00c4a7",
          color: "white",
          "&:hover": {
            bgcolor: "#00a08a",
          },
          textTransform: "uppercase",
          py: 1.5,
        }}
      >
        SEARCH FOR HOTEL
      </Button>
    </Box>
  );
}
