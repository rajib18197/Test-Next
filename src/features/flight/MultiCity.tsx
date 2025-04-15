import { Box } from "@mui/material";
import SelectionBox from "./SelectionBox";
import AirportSelection from "./AutoComplete";
import DatePicker from "./DatePicker";
import FlightIcon from "../../ui/FlightIcon";

export default function MultiCity({ cities = [], removeNewCity }) {
  console.log(cities);
  return (
    <>
      {cities.map((city, i) => {
        return (
          <Box
            key={`${i} - ${city.from.acronym}`}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              width: "100%",
              position: "relative",
            }}
          >
            {i >= 2 && (
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1bkd1xk"
                style={{
                  userSelect: "none",
                  width: "1em",
                  height: "1em",
                  display: "inline-block",
                  fill: "currentcolor",
                  flexShrink: 0,
                  fontSize: "1.5rem",
                  position: "absolute",
                  top: "5px",
                  right: "0px",
                  color: "#ff4a4a",
                  transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onClick={() => removeNewCity(city)}
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="HighlightOffOutlinedIcon"
                aria-label="Remove City"
              >
                <path d="M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path>
              </svg>
            )}

            <SelectionBox labelText={"FROM"} acronym={city.from.acronym}>
              <AirportSelection
                initialValue={city.fromNum}
                setAirport={() => {}}
              />
            </SelectionBox>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "120px",
                // height: "120px",
                position: "relative",
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
                </div>
              </Box>
            </Box>

            <SelectionBox labelText={"TO"} acronym={city.to.acronym}>
              <AirportSelection
                initialValue={city.toNum}
                setAirport={() => {}}
              />
              <DatePicker onChange={() => {}} value={new Date()} />
            </SelectionBox>
          </Box>
        );
      })}
    </>
  );
}
