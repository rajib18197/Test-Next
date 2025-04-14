import { Box } from "@mui/material";
import SelectionBox from "./SelectionBox";
import AirportSelection from "./AutoComplete";
import DatePicker from "./DatePicker";
import FlightIcon from "../../ui/FlightIcon";
import { useState } from "react";

//   "city": "Dhaka",
//   "country": "Bangladesh",
//   "airportName": "Hazrat Shahjalal Intl Airport",
//   "acronym": "DAC"
// },
export default function MultiCity({ cities = [] }) {
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
            }}
          >
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
