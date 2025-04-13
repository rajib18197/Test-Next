import { Box } from "@mui/material";
import SelectionBox from "./SelectionBox";
import AirportSelection from "./AutoComplete";
import DatePicker from "./DatePicker";
import FlightIcon from "../../ui/FlightIcon";

export default function MultiCity() {
  return (
    <>
      {[1, 2].map((_, i) => {
        return (
          <Box
            key={i}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              width: "100%",
            }}
          >
            <SelectionBox labelText={"FROM"} acronym={"DAC"}>
              <AirportSelection setAirport={() => {}} />
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

            <SelectionBox labelText={"TO"} acronym={"CXB"}>
              <AirportSelection setAirport={() => {}} />
              <DatePicker onChange={() => {}} value={new Date()} />
            </SelectionBox>
          </Box>
        );
      })}
    </>
  );
}
