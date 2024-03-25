import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <Text fontSize="xl">Welcome to the About page!</Text>
      <Button size="sm" onClick={() => window.dispatchEvent(new CustomEvent("toggleFooter"))}>
        Toggle Footer
      </Button>
    </Box>
  );
};

export default About;
