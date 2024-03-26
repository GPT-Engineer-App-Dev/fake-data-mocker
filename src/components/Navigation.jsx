import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Box p={4}>
      <Button as={Link} to="/" m={2}>
        Home
      </Button>
      <Button as={Link} to="/about" m={2}>
        About
      </Button>
      <Button as={Link} to="/contact" m={2}>
        Contact
      </Button>
      <Button as={Link} to="/services" m={2}>
        Services
      </Button>
    </Box>
  );
};

export default Navigation;
