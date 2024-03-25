import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const Services = () => {
  return (
    <Box p={4}>
      <Text fontSize="xl">Our Services</Text>
      <Button size="sm" onClick={() => window.dispatchEvent(new CustomEvent("toggleFooter"))}>
        Toggle Footer
      </Button>
    </Box>
  );
};

export default Services;
