"use client";

import type React from "react";
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Paper,
  styled,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// Custom styled components
const CounterContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  width: "100%",
  maxWidth: 360,
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
  borderRadius: 8,
}));

const CounterRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1.5, 0),
}));

const CounterControls = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 16,
});

const CounterValue = styled(Typography)({
  minWidth: 20,
  textAlign: "center",
  fontWeight: 500,
});

const InfoText = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(-0.5),
}));

const DoneButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#4b4e6d",
  color: "white",
  textTransform: "none",
  borderRadius: 4,
  padding: theme.spacing(1.2),
  marginTop: theme.spacing(1),
  "&:hover": {
    backgroundColor: "#3d3f58",
  },
}));

// Counter component
const GuestCounter = ({ onChange }: { onChange: any }) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms] = useState(1);
  const total = adults + children;

  useEffect(() => {
    onChange({ adults, children });
  }, [adults, children]);

  const handleIncrement = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number
  ) => {
    if (total === 4) return;
    setter(value + 1);
  };

  const handleDecrement = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number
  ) => {
    // if(total ===)
    if (value > 0) {
      setter(value - 1);
    }
  };

  return (
    <CounterContainer elevation={0}>
      <CounterRow>
        <Typography color="text.primary" sx={{ fontWeight: 500 }}>
          Adults
        </Typography>
        <CounterControls>
          <IconButton
            size="small"
            onClick={() => handleDecrement(setAdults, adults)}
            disabled={adults <= 1}
            sx={{ color: "#4b4e6d" }}
          >
            <RemoveIcon fontSize="small" />
          </IconButton>
          <CounterValue>{adults}</CounterValue>
          <IconButton
            size="small"
            onClick={() => handleIncrement(setAdults, adults)}
            sx={{ color: "#4b4e6d" }}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </CounterControls>
      </CounterRow>

      <CounterRow>
        <Typography color="text.primary" sx={{ fontWeight: 500 }}>
          Children
        </Typography>
        <CounterControls>
          <IconButton
            size="small"
            onClick={() => handleDecrement(setChildren, children)}
            disabled={children <= 0}
            sx={{ color: "#4b4e6d" }}
          >
            <RemoveIcon fontSize="small" />
          </IconButton>
          <CounterValue>{children}</CounterValue>
          <IconButton
            size="small"
            onClick={() => handleIncrement(setChildren, children)}
            sx={{ color: "#4b4e6d" }}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </CounterControls>
      </CounterRow>

      <InfoText>
        To Find best deals with best price we must know how old your child will
        be at check-out
      </InfoText>

      <CounterRow>
        <Typography color="text.primary" sx={{ fontWeight: 500 }}>
          Room
        </Typography>
        <CounterControls>
          <IconButton
            size="small"
            // onClick={() => handleDecrement(setRooms, rooms)}
            disabled={rooms <= 1}
            sx={{ color: "#4b4e6d" }}
          >
            <RemoveIcon fontSize="small" />
          </IconButton>
          <CounterValue>{rooms}</CounterValue>
          <IconButton
            size="small"
            // onClick={() => handleIncrement(setRooms, rooms)}
            sx={{ color: "#4b4e6d" }}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </CounterControls>
      </CounterRow>

      <DoneButton fullWidth variant="contained" disableElevation>
        Done
      </DoneButton>
    </CounterContainer>
  );
};

export default GuestCounter;
