"use client";
import { Box, type SxProps, type Theme } from "@mui/material";
import SelectionBox from "./SelectionBox";
import AirportSelection from "./AutoComplete";
import DatePicker from "./DatePicker";
import FlightIcon from "../../ui/FlightIcon";

interface BaseTripTypeProps {
  fromAcronym?: string;
  toAcronym?: string;
  setFromAirport: (str: string) => void;
  setToAirport: (str: string) => void;

  fromDate?: string;
  setFromDate: (str: string) => void;

  fromLabel?: string;
  toLabel?: string;
  showIcons?: boolean;
  containerSx?: SxProps<Theme>;
  iconContainerSx?: SxProps<Theme>;
  selectionBoxSx?: SxProps<Theme>;
}

interface OneWayTripProps extends BaseTripTypeProps {
  tripType: "one-way";
}

interface RoundWayTripProps extends BaseTripTypeProps {
  tripType: "round-way";
  toDate?: string;
  setToDate: (str: string) => void;
}

export type TripTypeProps = OneWayTripProps | RoundWayTripProps;

/**
 * TripType component for selecting flight details
 *
 * @param props - Component props
 * @returns React component
 *
 * @example
 * // One-way trip
 * <TripType
 *   tripType="one-way"
 *   fromAcronym="JFK"
 *   toAcronym="LAX"
 *   setFromAirport={setFrom}
 *   setToAirport={setTo}
 *   fromDate={departureDate}
 *   setFromDate={setDepartureDate}
 * />
 *
 * // Round-way trip
 * <TripType
 *   tripType="round-way"
 *   fromAcronym="JFK"
 *   toAcronym="LAX"
 *   setFromAirport={setFrom}
 *   setToAirport={setTo}
 *   fromDate={departureDate}
 *   setFromDate={setDepartureDate}
 *   toDate={returnDate}
 *   setToDate={setReturnDate}
 * />
 */
export default function TripType(props: TripTypeProps) {
  const {
    tripType,
    fromAcronym = "DAC",
    toAcronym = "CXB",
    setFromAirport,
    setToAirport,
    fromDate = "",
    setFromDate,
    fromLabel = "FROM",
    toLabel = "TO",
    showIcons = true,
    containerSx,
    iconContainerSx,
    selectionBoxSx,
  } = props;

  const toDate = tripType === "round-way" ? props.toDate || "" : "";
  const setToDate = tripType === "round-way" ? props.setToDate : () => {};

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        // alignItems: "center",
        width: "100%",
        ...containerSx,
      }}
    >
      <SelectionBox
        labelText={fromLabel}
        acronym={fromAcronym}
        sx={selectionBoxSx}
      >
        <AirportSelection setAirport={setFromAirport} initialValue={0} />
        <DatePicker onChange={setFromDate} value={fromDate} />
      </SelectionBox>

      {showIcons && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            // height: "120px",
            position: "relative",
            ...iconContainerSx,
          }}
        >
          <Box
            component="div"
            sx={{
              width: 120,
              height: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ height: "100%", width: "100%" }}>
              <FlightIcon
                direction="outbound"
                sx={{
                  transform: "rotate(90deg) translateX(-30px)",
                  width: "100px",
                  height: "100px",
                }}
              />

              {tripType === "round-way" && (
                <FlightIcon
                  direction="inbound"
                  sx={{
                    width: "100px",
                    height: "100px",
                    transform:
                      "rotate(-90deg) translateY(-100px) translateX(-20px)",
                    position: "absolute",
                  }}
                />
              )}
            </div>
          </Box>
        </Box>
      )}

      <SelectionBox labelText={toLabel} acronym={toAcronym} sx={selectionBoxSx}>
        <AirportSelection setAirport={setToAirport} initialValue={1} />
        {tripType === "round-way" ? (
          <DatePicker onChange={setToDate} value={toDate} />
        ) : null}
      </SelectionBox>
    </Box>
  );
}
