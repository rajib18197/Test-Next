"use client";

import type React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Slider,
  Checkbox,
  FormControlLabel,
  styled,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// Custom styled components
const FilterContainer = styled(Paper)({
  borderRadius: 8,
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  width: "100%",
  maxWidth: "350px",
});

const FilterHeader = styled(Box)({
  padding: "16px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #f0f0f0",
});

const ResetButton = styled(Button)({
  color: "#666",
  padding: "0px",
  minWidth: "auto",
  fontWeight: "normal",
  fontSize: "0.85rem",
  "&:hover": {
    backgroundColor: "transparent",
    textDecoration: "underline",
  },
});

const FilterOptionButton = styled(Button)<{ selected?: boolean }>(
  ({ selected }) => ({
    backgroundColor: selected ? "#2cd889" : "#e0e0e0",
    color: selected ? "white" : "#666",
    borderRadius: 0,
    padding: "8px 16px",
    flex: 1,
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: selected ? "#25c07a" : "#d5d5d5",
    },
  })
);

const FilterSection = styled(Box)({
  padding: "16px 20px",
  borderBottom: "1px solid #f0f0f0",
});

const SectionHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px",
  cursor: "pointer",
});

const PriceRangeContainer = styled(Box)({
  padding: "0 10px",
  marginTop: "30px",
});

const PriceDisplay = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px",
});

const StyledCheckbox = styled(Checkbox)({
  color: "#2cd889",
  "&.Mui-checked": {
    color: "#2cd889",
  },
});

const StyledFormControlLabel = styled(FormControlLabel)({
  "& .MuiFormControlLabel-label": {
    fontSize: "0.9rem",
    color: "#2cd889",
  },
});

interface FlightFilterProps {
  onFilterChange?: (filters: FilterState) => void;
  minPrice?: number;
  maxPrice?: number;
}

interface FilterState {
  sortBy: "cheapest" | "fastest";
  priceRange: [number, number];
  refundable: boolean;
  nonRefundable: boolean;
}

const FilterBox: React.FC<FlightFilterProps> = ({
  onFilterChange,
  minPrice = 11128,
  maxPrice = 16368,
}) => {
  const [filters, setFilters] = useState<FilterState>({
    sortBy: "cheapest",
    priceRange: [minPrice, maxPrice],
    refundable: false,
    nonRefundable: false,
  });

  const [priceRangeExpanded, setPriceRangeExpanded] = useState(true);
  const [fareTypeExpanded, setFareTypeExpanded] = useState(true);

  const handleSortByChange = (sortBy: "cheapest" | "fastest") => {
    const newFilters = { ...filters, sortBy };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handlePriceRangeChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    const newFilters = { ...filters, priceRange: newValue as [number, number] };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleCheckboxChange =
    (name: "refundable" | "nonRefundable") =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newFilters = { ...filters, [name]: event.target.checked };
      setFilters(newFilters);
      onFilterChange?.(newFilters);
    };

  const handleReset = () => {
    const resetFilters = {
      sortBy: "cheapest",
      priceRange: [minPrice, maxPrice],
      refundable: false,
      nonRefundable: false,
    };
    setFilters(resetFilters);
    onFilterChange?.(resetFilters);
  };

  const formatPrice = (value: number) => {
    return `₹ ${value.toLocaleString()}`;
  };

  return (
    <FilterContainer>
      {/* Filter Header */}
      <FilterHeader>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", fontSize: "0.9rem" }}
        >
          FILTER
        </Typography>
        <ResetButton onClick={handleReset}>RESET</ResetButton>
      </FilterHeader>

      {/* Sort Options */}
      <Box sx={{ display: "flex", width: "100%" }}>
        <FilterOptionButton
          selected={filters.sortBy === "cheapest"}
          onClick={() => handleSortByChange("cheapest")}
        >
          CHEAPEST
        </FilterOptionButton>
        <FilterOptionButton
          selected={filters.sortBy === "fastest"}
          onClick={() => handleSortByChange("fastest")}
        >
          FASTEST
        </FilterOptionButton>
      </Box>

      {/* Price Range Section */}
      <FilterSection>
        <SectionHeader
          onClick={() => setPriceRangeExpanded(!priceRangeExpanded)}
        >
          <Typography
            variant="subtitle2"
            sx={{ color: "#2cd889", fontWeight: "medium", fontSize: "0.9rem" }}
          >
            Price Range
          </Typography>
          <IconButton size="small" sx={{ padding: 0 }}>
            {priceRangeExpanded ? (
              <ExpandLessIcon sx={{ color: "#666" }} />
            ) : (
              <ExpandMoreIcon sx={{ color: "#666" }} />
            )}
          </IconButton>
        </SectionHeader>

        {priceRangeExpanded && (
          <PriceRangeContainer>
            <Slider
              value={filters.priceRange}
              onChange={handlePriceRangeChange}
              min={minPrice}
              max={maxPrice}
              sx={{
                color: "#2cd889",
                "& .MuiSlider-thumb": {
                  height: 20,
                  width: 20,
                  backgroundColor: "#3f4b63",
                },
                "& .MuiSlider-rail": {
                  height: 4,
                  backgroundColor: "#e0e0e0",
                },
                "& .MuiSlider-track": {
                  height: 4,
                },
              }}
            />
            <PriceDisplay>
              <Typography variant="body2" sx={{ color: "#333" }}>
                ₹ {filters.priceRange[0].toLocaleString()}
              </Typography>
              <Typography variant="body2" sx={{ color: "#333" }}>
                ₹ {filters.priceRange[1].toLocaleString()}
              </Typography>
            </PriceDisplay>
          </PriceRangeContainer>
        )}
      </FilterSection>

      {/* Fare Type Section */}
      <FilterSection>
        <SectionHeader onClick={() => setFareTypeExpanded(!fareTypeExpanded)}>
          <Typography
            variant="subtitle2"
            sx={{ color: "#2cd889", fontWeight: "medium", fontSize: "0.9rem" }}
          >
            Fare Type
          </Typography>
          <IconButton size="small" sx={{ padding: 0 }}>
            {fareTypeExpanded ? (
              <ExpandLessIcon sx={{ color: "#666" }} />
            ) : (
              <ExpandMoreIcon sx={{ color: "#666" }} />
            )}
          </IconButton>
        </SectionHeader>

        {fareTypeExpanded && (
          <Box>
            <StyledFormControlLabel
              control={
                <StyledCheckbox
                  checked={filters.refundable}
                  onChange={handleCheckboxChange("refundable")}
                  name="refundable"
                />
              }
              label="Refundable"
            />
            <Box sx={{ width: "100%" }}>
              <StyledFormControlLabel
                control={
                  <StyledCheckbox
                    checked={filters.nonRefundable}
                    onChange={handleCheckboxChange("nonRefundable")}
                    name="nonRefundable"
                  />
                }
                label="Non Refundable"
              />
            </Box>
          </Box>
        )}
      </FilterSection>
    </FilterContainer>
  );
};

export default FilterBox;
