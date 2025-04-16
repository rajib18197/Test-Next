"use client";

import { useState } from "react";
import {
  TextField,
  List,
  ListItem,
  Typography,
  Paper,
  InputAdornment,
} from "@mui/material";

// Generic type
interface DestinationSelectorProps<T> {
  data: T[];
  onSelectItem: (value: string) => void;
  getDisplayLabel: (item: T) => string;
  getSearchFields: (item: T) => string[];
}

function DestinationSelector<T>({
  data,
  onSelectItem,
  getDisplayLabel,
  getSearchFields,
}: DestinationSelectorProps<T>) {
  const [searchText, setSearchText] = useState("");

  const filteredData =
    searchText.trim() === ""
      ? data
      : data.filter((item) =>
          getSearchFields(item).some((field) =>
            field.toLowerCase().includes(searchText.toLowerCase())
          )
        );

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: 220,
        borderRadius: "4px",
        padding: "3px",
        background: "#32d095",
        overflow: "hidden",
      }}
    >
      <div style={{ background: "white" }}>
        <TextField
          fullWidth
          placeholder="City/Hotel/Street Name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: <InputAdornment position="start" />,
            sx: {
              fontSize: "14px",
              borderRadius: 0,
              "& fieldset": {
                border: "none",
              },
              padding: "4px 12px",
            },
          }}
        />

        <List disablePadding>
          {filteredData.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 16px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#101d28",
                  color: "white !important",
                },
              }}
              onClick={() => onSelectItem(getDisplayLabel(item))}
            >
              <Typography
                sx={{
                  color: "#555",
                  fontSize: "14px",
                }}
              >
                {getDisplayLabel(item)}
              </Typography>
            </ListItem>
          ))}
        </List>
      </div>
    </Paper>
  );
}

export default DestinationSelector;
