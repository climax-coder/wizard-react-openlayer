import React, { useCallback, useState } from "react";
import { Box, Text, Button, Center } from "@chakra-ui/react";
import { PiFileArrowUp } from "react-icons/pi";
import { useDropzone } from "react-dropzone";

const UploadStep = ({ onNext }) => {
  const [uploadError, setUploadError] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file && file.name.endsWith(".geojson")) {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const geojsonData = JSON.parse(event.target.result);
            onNext(geojsonData);
          } catch (error) {
            console.error("Error parsing GeoJSON file: ", error);
            setUploadError(
              "Failed to parse the GeoJSON file. Please check the file format."
            );
          }
        };
        reader.readAsText(file);
      } else {
        setUploadError("Please upload a GeoJSON file.");
      }
    },
    [onNext]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
  });

  return (
    <Box textAlign="center" p={8} mt={10}>
      <Box
        {...getRootProps()}
        bg="#f5f7f9"
        border="2px dashed #c2c2c2"
        borderRadius={6}
        p={10}
      >
        <Center mb={4}>
          <PiFileArrowUp size={48} color="#a5a2c2" />
        </Center>
        <Text fontSize="lg" fontWeight="bold">
          Drag any geographic shape file here or click to select from disk
        </Text>
        <Text mt={2} color="gray.600">
          Use any format that allows to describe geometrics, e.g., SHP, GeoJSON,
          KML
        </Text>
        {uploadError && (
          <Text color="red.500" mt={5}>
            {uploadError}
          </Text>
        )}
        <input {...getInputProps()} />
      </Box>
      <Text mt={4} fontSize="lg" fontWeight="bold">
        ..or start drawing project shape manually
      </Text>
      <Button mt={2} colorScheme="blue" onClick={() => {}}>
        Draw project area on map
      </Button>
    </Box>
  );
};

export default UploadStep;
