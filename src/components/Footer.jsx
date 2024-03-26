import React from "react";
import { Box, Container, Text, Button } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.200" color="gray.700" py={4}>
      <Container display="flex" flexDirection="column" alignItems="center">
        <Text align="center" mb={2}>
          &copy; {new Date().getFullYear()} My Website
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
