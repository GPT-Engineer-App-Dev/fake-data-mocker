import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Navigation from "./components/Navigation.jsx";
import { Box, Button } from "@chakra-ui/react";
import Services from "./pages/Services.jsx";
import Footer from "./components/Footer.jsx";

// Removed import of Button since it's no longer used directly in this file.

function App() {
  const [showFooter, setShowFooter] = useState(true);

  const toggleFooter = () => setShowFooter(!showFooter);
  return (
    <Router>
      <Box>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        {showFooter && <Footer />}
        <Box position="absolute" bottom={4} left={4} zIndex="sticky">
          <Button onClick={toggleFooter} colorScheme="blue">
            {showFooter ? "Hide" : "Show"} Footer
          </Button>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
