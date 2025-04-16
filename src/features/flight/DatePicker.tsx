"use client";

import type React from "react";
import { useState } from "react";
import {
  Box,
  IconButton,
  MenuItem,
  Paper,
  Select,
  type SelectChangeEvent,
  Typography,
  styled,
  Popper,
  ClickAwayListener,
} from "@mui/material";
import { CalendarMonth, ChevronRight } from "@mui/icons-material";

const CalendarContainer = styled(Paper)(() => ({
  padding: "16px",
  width: "300px",
}));

const CalendarHeader = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "16px",
}));

const MonthYearSelector = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
}));

const StyledSelect = styled(Select)(() => ({
  minWidth: "80px",
  "& .MuiSelect-select": {
    padding: "4px 8px",
  },

  "&::before": {
    borderBottom: "none !important",
  },
}));

const DaysHeader = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  textAlign: "center",
  marginBottom: "8px",
}));

const DaysGrid = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: "4px",
}));

const DayCell = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "isSelected" &&
    prop !== "isToday" &&
    prop !== "isCurrentMonth" &&
    prop !== "isDisabled",
})<{
  isSelected?: boolean;
  isToday?: boolean;
  isCurrentMonth?: boolean;
  isDisabled?: boolean;
}>(({ isSelected, isToday, isCurrentMonth, isDisabled }) => ({
  // height: "32px",
  // width: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // borderRadius: "50%",
  cursor: isDisabled ? "not-allowed" : "pointer",
  // backgroundColor: isSelected ? "#2dd4bf" : "transparent",
  // color: isSelected ? "white" : isCurrentMonth ? "inherit" : "#bdbdbd",
  fontWeight: isToday ? "bold" : "normal",
  position: "relative",

  height: "15px",
  backgroundColor: isSelected ? "#32d095" : "transparent",
  color: isDisabled
    ? "#bdbdbd"
    : isSelected
    ? "white"
    : isCurrentMonth
    ? "inherit"
    : "#bdbdbd",
  padding: "6px 3px",
  borderRadius: "20px",
  opacity: isDisabled ? 0.5 : 1,

  "&:hover": {
    outline: isDisabled ? "none" : "1px solid #32d095",
  },

  "&::after": isToday
    ? {
        content: '""',
        position: "absolute",
        bottom: "2px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "16px",
        height: "2px",
        backgroundColor: "#1976d2",
      }
    : {},
}));

const MonthTitle = styled(Typography)(() => ({
  fontWeight: "500",
  color: "#757575",
  marginBottom: "8px",
}));

const DateField = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#e3f2fd",
  borderRadius: "4px",
  padding: "12px",
});

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

const StyledPopper = styled(Popper)(({ theme }) => ({
  borderRadius: 6,
  width: 300,
  zIndex: theme.zIndex.modal,
  fontSize: 13,
}));

export default function DatePicker({
  value = new Date(),
  onChange,
}: DatePickerProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const currentMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);

  // Ensure initial value is not before today
  const safeInitialValue = value < today ? today : value;

  const [selectedDate, setSelectedDate] = useState<Date>(safeInitialValue);
  const [currentMonth, setCurrentMonth] = useState<Date>(
    new Date(safeInitialValue.getFullYear(), safeInitialValue.getMonth(), 1)
  );
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  // New state to disable click away when selects are open
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
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

  const handleDateSelect = (date: Date) => {
    // Don't allow selection of disabled dates
    if (isPastDate(date)) {
      return;
    }

    setSelectedDate(date);
    if (onChange) {
      onChange(date);
    }
    setAnchorEl(null);
  };

  // Handle select opening and closing
  const handleSelectOpen = () => {
    setIsSelectOpen(true);
  };

  const handleSelectClose = () => {
    setIsSelectOpen(false);
  };

  const handleMonthChange = (event: SelectChangeEvent) => {
    const newMonth = Number.parseInt(event.target.value);
    const newDate = new Date(currentMonth.getFullYear(), newMonth, 1);

    // Prevent changing to months before current month
    if (newDate < currentMonthStart) {
      return;
    }

    setCurrentMonth(newDate);
  };

  const handleYearChange = (event: SelectChangeEvent) => {
    const newYear = Number.parseInt(event.target.value);
    const newDate = new Date(newYear, currentMonth.getMonth(), 1);

    // Prevent changing to years before current year
    if (newDate < currentMonthStart) {
      return;
    }

    setCurrentMonth(newDate);
  };

  const handlePrevMonth = () => {
    const newDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1
    );

    // Prevent navigating to months before current month
    if (newDate < currentMonthStart) {
      return;
    }

    setCurrentMonth(newDate);
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const formatDate = (date: Date): string => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear().toString().slice(-2);
    return `${day} ${month} ${year}`;
  };

  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number): number => {
    return new Date(year, month, 1).getDay();
  };

  // Function to check if a date is before today (past date)
  const isPastDate = (date: Date): boolean => {
    return date < today;
  };

  // Function to check if a month/year combination is before the current month
  const isPastMonth = (year: number, month: number): boolean => {
    return new Date(year, month, 1) < currentMonthStart;
  };

  const renderCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const isToday = (date: Date) =>
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    const prevMonthDays = getDaysInMonth(year, month - 1);
    const days = [];

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      const date = new Date(year, month - 1, prevMonthDays - i);
      const isDisabled = isPastDate(date);

      days.push(
        <DayCell
          key={`prev-${i}`}
          isCurrentMonth={false}
          isDisabled={isDisabled}
          onClick={() => handleDateSelect(date)}
        >
          {prevMonthDays - i}
        </DayCell>
      );
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const isDateSelected =
        selectedDate.getDate() === i &&
        selectedDate.getMonth() === month &&
        selectedDate.getFullYear() === year;
      const isDisabled = isPastDate(date);

      days.push(
        <DayCell
          key={`current-${i}`}
          isSelected={isDateSelected}
          isToday={isToday(date)}
          isCurrentMonth={true}
          isDisabled={isDisabled}
          onClick={() => handleDateSelect(date)}
        >
          {i}
        </DayCell>
      );
    }

    // Next month days
    const remainingCells = 42 - days.length; // 6 rows * 7 columns
    for (let i = 1; i <= remainingCells; i++) {
      const date = new Date(year, month + 1, i);
      const isDisabled = isPastDate(date);

      days.push(
        <DayCell
          key={`next-${i}`}
          isCurrentMonth={false}
          isDisabled={isDisabled}
          onClick={() => handleDateSelect(date)}
        >
          {i}
        </DayCell>
      );
    }

    return days;
  };

  // Filter years to only show current and future years
  const getAvailableYears = () => {
    const currentYear = today.getFullYear();
    return Array.from({ length: 10 }, (_, i) => currentYear + i);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const availableYears = getAvailableYears();

  const open = Boolean(anchorEl);
  const id = open ? "date-picker-popover" : undefined;

  // Check if the previous month button should be disabled
  const isPrevMonthDisabled = () => {
    const prevMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1
    );
    return prevMonth < currentMonthStart;
  };

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        borderRadius: "0 !important",
      }}
    >
      <DateField
        sx={{ minHeight: 0, minWidth: 0, p: 0, borderRadius: "4px" }}
        onClick={handleClick}
      >
        <CalendarMonth
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
          {" "}
          {formatDate(selectedDate)}
        </Typography>
      </DateField>

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
          <CalendarContainer>
            <CalendarHeader>
              <IconButton
                onClick={handlePrevMonth}
                size="small"
                style={{
                  background: "#eff2f7",
                  height: "24px",
                  width: "24px",
                  opacity: isPrevMonthDisabled() ? 0.5 : 1,
                  cursor: isPrevMonthDisabled() ? "not-allowed" : "pointer",
                }}
                disabled={isPrevMonthDisabled()}
              >
                <i
                  style={{
                    borderColor: "#0000 #34495e #0000 #0000",
                    borderWidth: "4px 6px 4px 4px",
                    transform: "translate(-3px)",
                    textAlign: "center",
                    margin: "auto",
                    borderStyle: "solid",
                  }}
                ></i>
              </IconButton>

              <MonthYearSelector>
                <StyledSelect
                  data-month="month"
                  value={currentMonth.getMonth().toString()}
                  onChange={handleMonthChange as any}
                  variant="standard"
                  onOpen={handleSelectOpen}
                  onClose={handleSelectClose}
                  IconComponent={() => (
                    <ChevronRight
                      sx={{ transform: "rotate(90deg)", fontSize: 16 }}
                    />
                  )}
                  style={{ fontSize: "14px", borderBottom: "none" }}
                  MenuProps={{
                    // Prevent menu clicks from closing the datepicker
                    onClick: (e) => e.stopPropagation(),
                  }}
                >
                  {months.map((month, index) => {
                    const isDisabled = isPastMonth(
                      currentMonth.getFullYear(),
                      index
                    );
                    return (
                      <MenuItem
                        key={month}
                        value={index}
                        style={{
                          fontSize: "14px",
                          borderBottom: "none",
                          opacity: isDisabled ? 0.5 : 1,
                          cursor: isDisabled ? "not-allowed" : "pointer",
                        }}
                        disabled={isDisabled}
                      >
                        {month}
                      </MenuItem>
                    );
                  })}
                </StyledSelect>

                <StyledSelect
                  value={currentMonth.getFullYear().toString()}
                  onChange={handleYearChange as any}
                  variant="standard"
                  onOpen={handleSelectOpen}
                  onClose={handleSelectClose}
                  IconComponent={() => (
                    <ChevronRight
                      sx={{ transform: "rotate(90deg)", fontSize: 16 }}
                    />
                  )}
                  style={{ fontSize: "14px", borderBottom: "none" }}
                  MenuProps={{
                    // Prevent menu clicks from closing the datepicker
                    onClick: (e) => e.stopPropagation(),
                  }}
                >
                  {availableYears.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </StyledSelect>
              </MonthYearSelector>

              <IconButton
                onClick={handleNextMonth}
                size="small"
                style={{ background: "#eff2f7", height: "24px", width: "24px" }}
              >
                <i
                  style={{
                    borderColor: "#0000 #0000 #0000 #34495e",
                    borderWidth: "4px 4px 4px 6px",
                    transform: "translate(3px)",
                    textAlign: "center",
                    margin: "auto",
                    borderStyle: "solid",
                  }}
                ></i>
              </IconButton>
            </CalendarHeader>

            <MonthTitle style={{ fontSize: "14px", padding: "0 10px" }}>{`${
              months[currentMonth.getMonth()]
            } ${currentMonth.getFullYear()}`}</MonthTitle>

            <DaysHeader style={{ fontSize: "11px", padding: 0 }}>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <Typography
                  key={day}
                  variant="caption"
                  color="textSecondary"
                  style={{ fontSize: "12px", padding: 0 }}
                >
                  {day}
                </Typography>
              ))}
            </DaysHeader>

            <DaysGrid
              style={{
                fontSize: "12px",
                fontFamily: "sans-serif",
              }}
            >
              {renderCalendarDays()}
            </DaysGrid>
          </CalendarContainer>
        </ClickAwayListener>
      </StyledPopper>
    </div>
  );
}
