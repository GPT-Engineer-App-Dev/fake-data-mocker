import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.200" color="gray.700" py={4}>
      <Container>
        <Text align="center">&copy; {new Date().getFullYear()} My Website</Text>
      </Container>
    </Box>
  );
};

export default Footer;
