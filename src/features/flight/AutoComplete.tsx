"use client";

import * as React from "react";
import { useTheme, styled } from "@mui/material/styles";
import Popper from "@mui/material/Popper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Autocomplete, {
  type AutocompleteCloseReason,
  autocompleteClasses,
} from "@mui/material/Autocomplete";
import ButtonBase from "@mui/material/ButtonBase";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import { LocationOn } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { getAllAirportsData } from "../../services/api/apiRoundways";

interface PopperComponentProps {
  anchorEl?: any;
  disablePortal?: boolean;
  open: boolean;
}

const StyledAutocompletePopper = styled("div")(({ theme }) => ({
  [`& .${autocompleteClasses.paper}`]: {
    boxShadow: "none",
    margin: 0,
    color: "inherit",
    fontSize: 13,
  },
  [`& .${autocompleteClasses.listbox}`]: {
    padding: 0,
    backgroundColor: "#fff",
    ...theme.applyStyles("dark", {
      backgroundColor: "#1c2128",
    }),
    [`& .${autocompleteClasses.option}`]: {
      minHeight: "auto",
      alignItems: "flex-start",
      padding: 8,
      borderBottom: "1px solid #eaecef",
      ...theme.applyStyles("dark", {
        borderBottom: "1px solid #30363d",
      }),
      '&[aria-selected="true"]': {
        backgroundColor: "transparent",
      },
      [`&.${autocompleteClasses.focused}, &.${autocompleteClasses.focused}[aria-selected="true"]`]:
        {
          backgroundColor: theme.palette.action.hover,
        },
    },
  },
  [`&.${autocompleteClasses.popperDisablePortal}`]: {
    position: "relative",
  },
}));

function PopperComponent(props: PopperComponentProps) {
  const { disablePortal, anchorEl, open, ...other } = props;
  return <StyledAutocompletePopper {...other} />;
}

const StyledPopper = styled(Popper)(({ theme }) => ({
  border: "1px solid #e1e4e8",
  boxShadow: `0 8px 24px ${"rgba(149, 157, 165, 0.2)"}`,
  color: "#24292e",
  backgroundColor: "#fff",
  borderRadius: 6,
  width: 300,
  zIndex: theme.zIndex.modal,
  fontSize: 13,
  ...theme.applyStyles("dark", {
    border: "1px solid #30363d",
    boxShadow: "0 8px 24px rgb(1, 4, 9)",
    color: "#c9d1d9",
    backgroundColor: "#1c2128",
  }),
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  padding: 10,
  width: "100%",
  borderBottom: "1px solid #eaecef",
  ...theme.applyStyles("dark", {
    borderBottom: "1px solid #30363d",
  }),
  "& input": {
    borderRadius: 4,
    padding: 8,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontSize: 14,
    backgroundColor: "#fff",
    border: "1px solid #30363d",
    ...theme.applyStyles("dark", {
      backgroundColor: "#0d1117",
      border: "1px solid #eaecef",
    }),
    "&:focus": {
      boxShadow: "0px 0px 0px 3px rgba(3, 102, 214, 0.3)",
      borderColor: "#0366d6",
      ...theme.applyStyles("dark", {
        boxShadow: "0px 0px 0px 3px rgb(12, 45, 107)",
        borderColor: "#388bfd",
      }),
    },
  },
}));

const Button = styled(ButtonBase)(({ theme }) => ({
  fontSize: 13,
  width: "100%",
  textAlign: "left",
  paddingBottom: 8,
  fontWeight: 600,
  color: "#586069",
  ...theme.applyStyles("dark", {
    color: "#8b949e",
  }),
  "&:hover,&:focus": {
    color: "#0366d6",
    ...theme.applyStyles("dark", {
      color: "#58a6ff",
    }),
  },
  "& span": {
    width: "100%",
  },
  "& svg": {
    width: 16,
    height: 16,
  },
}));

const LocationField = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#e3f2fd",
  borderRadius: "4px",
  padding: "12px",
  marginBottom: "10px",
});

const StyledDiv = styled("div")({
  borderRadius: "0 !important",
  "& ul": {
    backgroundColor: "#32d095",
    borderRadius: "0 !important",
    border: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

const StyledItem = styled("li")({
  padding: "0 6px !important",
  fontFamily: "sans-serif",
  backgroundColor: "#32d095 !important",
  borderBottom: "none !important",
  borderRadius: "none !important",
  color: "white !important",
  "&:hover": {
    backgroundColor: "#525371 !important",
  },
});

interface AirportType {
  airportName: string;
  acronym: string;
  city: string;
  country: string;
}

export default function AirportSelection({ initialValue, setAirport }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [value, setValue] = React.useState<AirportType | null>(null);
  const [inputValue, setInputValue] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [textValue, setTextValue] = React.useState<AirportType | null>(null);
  const labels = getAllAirportsData().slice(0, 7);
  const allLabels = getAllAirportsData();

  // Filter options based on search term
  const filteredOptions = React.useMemo(() => {
    if (!searchTerm.trim()) {
      return labels;
    }

    const term = searchTerm.trim().toLowerCase();
    return allLabels
      .filter(
        (option) =>
          option?.airportName.toLowerCase().includes(term) ||
          option?.acronym.toLowerCase().includes(term) ||
          option?.city.toLowerCase().includes(term) ||
          option?.country.toLowerCase().includes(term)
      )
      .slice(0, 7);
  }, [searchTerm, labels.length]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setSearchTerm("");
    setInputValue("");
    setValue(null);
  };

  const handleClose = () => {
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };

  const handleInputChange = (
    event: React.SyntheticEvent,
    newInputValue: string
  ) => {
    setInputValue(newInputValue);
    setSearchTerm(newInputValue);

    // Debug
    console.log("Search term:", newInputValue);
    console.log(
      "Filtered options count:",
      allLabels.filter(
        (option) =>
          option?.airportName
            .toLowerCase()
            .includes(newInputValue.toLowerCase()) ||
          option?.acronym.toLowerCase().includes(newInputValue.toLowerCase()) ||
          option?.city.toLowerCase().includes(newInputValue.toLowerCase()) ||
          option?.country.toLowerCase().includes(newInputValue.toLowerCase())
      ).length
    );
  };

  const handleOptionSelect = (
    event: React.SyntheticEvent,
    newValue: AirportType | null
  ) => {
    setValue(newValue);
    setTextValue(newValue);
    setAirport(newValue);
    handleClose(); // Close the popover when an option is selected
  };

  const open = Boolean(anchorEl);
  const id = open ? "github-label" : undefined;
  console.log(filteredOptions[0]?.airportName, 1817);
  const text = value || textValue || filteredOptions[initialValue];

  if (labels.length === 0) return null;
  console.log(labels);

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        borderRadius: "0 !important",
      }}
    >
      <Box sx={{ width: "100%", fontSize: 13 }}>
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
            {text ? `${text.airportName} (${text.acronym})` : "DAC"}
          </Typography>
        </LocationField>
      </Box>
      <StyledPopper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        style={{
          width: "100%,",
          padding: "4px 6px",
          background: "#32d095",
          borderRadius: "0 !important",
        }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <StyledDiv>
            <Autocomplete
              style={{
                backgroundColor: "#32d095",
                borderRadius: "0 !important",
              }}
              open
              onClose={(
                event: React.ChangeEvent<{}>,
                reason: AutocompleteCloseReason
              ) => {
                if (reason === "escape") {
                  handleClose();
                }
              }}
              value={value}
              onChange={handleOptionSelect}
              inputValue={inputValue}
              onInputChange={handleInputChange}
              noOptionsText="No airports found"
              filterOptions={(x) => x} // Important: disable the built-in filtering
              renderOption={(props, option, { _selected }) => {
                const { key, ...optionProps } = props;
                return (
                  <StyledItem key={key} {...optionProps}>
                    <Box
                      sx={(t) => ({
                        flexGrow: 1,
                        "& p": {
                          color: "#8b949e",
                          ...t.applyStyles("light", {
                            color: "#586069",
                          }),
                        },
                        display: "grid",
                        gridTemplateColumns: "3fr 1fr",
                        alignItems: "center",
                        color: "white",
                        minHeight: 0,
                        minWidth: 0,
                      })}
                    >
                      <div>
                        <p
                          style={{
                            lineHeight: 0.5,
                            fontSize: "12px",
                            textTransform: "uppercase",
                            color: "white",
                          }}
                        >
                          {option.city}, {option.country}
                        </p>
                        <p
                          style={{
                            lineHeight: 0.5,
                            fontSize: "11px",
                            color: "white",
                          }}
                        >
                          {option.airportName}
                        </p>
                      </div>
                      <p
                        style={{
                          lineHeight: 0,
                          justifySelf: "end",
                          color: "white",
                        }}
                      >
                        {option.acronym}
                      </p>
                    </Box>
                  </StyledItem>
                );
              }}
              options={filteredOptions}
              getOptionLabel={(option) => option.airportName}
              renderInput={(params) => (
                <StyledInput
                  ref={params.InputProps.ref}
                  inputProps={params.inputProps}
                  autoFocus
                  placeholder="Search"
                  style={{
                    width: "100%",
                    height: "45px",
                    border: "none",
                    padding: 0,
                    outline: "none",
                  }}
                />
              )}
              slots={{
                popper: PopperComponent,
              }}
            />
          </StyledDiv>
        </ClickAwayListener>
      </StyledPopper>
    </div>
  );
}

const labels = [
  {
    fullName: "Hazrat Shahjalal Intl Airport",
    acronym: "DAC",
    location: "Dhaka, Bangladesh",
  },
  {
    fullName: "Dubai Intl Airport",
    acronym: "DXB",
    location: "Dubai, United Arab Emirates",
  },
  {
    fullName: "Cox's Bazar Airport",
    acronym: "CXB",
    location: "Cox's Bazar, Bangladesh",
  },
  {
    fullName: "Jashore Airport",
    acronym: "JSR",
    location: "Jashore, Bangladesh",
  },
  {
    fullName: "Barishal Airport",
    acronym: "BZL",
    location: "Barishal, Bangladesh",
  },
  {
    fullName: "Shah Makhdum Airport",
    acronym: "RJH",
    location: "Rajshahi, Bangladesh",
  },
  {
    fullName: "Saidpur Airport",
    acronym: "SPD",
    location: "Saidpur, Bangladesh",
  },
];
