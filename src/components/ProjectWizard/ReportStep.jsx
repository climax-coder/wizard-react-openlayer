import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Wizard.css"

const ReportStep = ({ onNext }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [error, setError] = useState("");

  const handleDateChange = (dates) => {
    setDateRange(dates);
    if (!dates[0] || !dates[1] || dates[0] > dates[1]) {
      setError("Please select a valid date range");
    } else {
      setError("");
    }
  };

  const handleFinish = () => {
    const [start, end] = dateRange;
    if (!start || !end) {
      setError("Please select a valid date range");
      return;
    }
    onNext(dateRange);
  };

  return (
    <Box p={8} mt={10}>
      <Text fontSize="lg" fontWeight="bold">
        Observation date range *
      </Text>
      <Text>Provide date range for the observation</Text>
      <DatePicker
        selected={dateRange[0]}
        onChange={handleDateChange}
        startDate={dateRange[0]}
        endDate={dateRange[1]}
        selectsRange
        dateFormat="MMMM d, yyyy"
        className="custom-datepicker"
      />
      {error && <Text color="red">{error}</Text>}
      <Button
        colorScheme="green"
        mt="4"
        onClick={handleFinish}
        width="100%"
        fontSize="lg"
      >
        Create
      </Button>
    </Box>
  );
};

export default ReportStep;
