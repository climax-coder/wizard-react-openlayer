import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Grid,
  GridItem,
  Textarea,
  FormErrorMessage,
  useBreakpointValue,
} from "@chakra-ui/react";
import MapWithSelectedArea from "./MapWithSelectedArea";

const ConfigureStep = ({ onNext, geojsonData }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [nameError, setNameError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "name" && nameError) setNameError("");
  };

  const handleNext = () => {
    if (!formData.name.trim()) {
      setNameError("Please enter a project name.");
      return;
    }
    onNext(formData.name, formData.description);
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      gap={6}
      p={8}
      mt={10}
    >
      <GridItem order={{ base: 2, md: 1 }}>
        <FormControl isInvalid={!!nameError}>
          <FormLabel htmlFor="name">Name *</FormLabel>
          <Input
            id="name"
            name="name"
            placeholder="Enter project name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <FormErrorMessage>{nameError}</FormErrorMessage>
        </FormControl>
        <FormControl mt="4">
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            id="description"
            name="description"
            placeholder="Enter project description"
            value={formData.description}
            onChange={handleChange}
          />
        </FormControl>
        <Button colorScheme="blue" mt="5" width="100%" onClick={handleNext}>
          Next
        </Button>
      </GridItem>
      <GridItem order={{ base: 1, md: 2 }}>
        <MapWithSelectedArea
          geojson={geojsonData}
          width="100%"
          height="300px"
        />
      </GridItem>
    </Grid>
  );
};

export default ConfigureStep;
