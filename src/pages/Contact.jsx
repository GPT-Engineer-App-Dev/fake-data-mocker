import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box p={4}>
      <Text fontSize="xl">Contact us at: info@example.com</Text>
      <Button size="sm" onClick={() => window.dispatchEvent(new CustomEvent("toggleFooter"))}>
        Toggle Footer
      </Button>
    </Box>
  );
};

export default Contact;
