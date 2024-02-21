import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Box width="100%" minH="90vh" textAlign="center" p={20}>
      <Heading>404 - Not Found</Heading>
      <Text>The page you're looking for does not exist.</Text>
    </Box>
  );
};

export default NotFound;
