import { Box, Container, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box as="footer" py="5" borderTop="1px" borderColor="gray.200">
      <Container maxW="container.md" textAlign="center">
        <Text fontSize="sm">&copy; {new Date().getFullYear()} My Website. All rights reserved.</Text>
      </Container>
    </Box>
  );
}

export default Footer;
