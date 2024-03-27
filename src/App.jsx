import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import { Box, Button } from "@chakra-ui/react";

function App() {
  const [showFooter, setShowFooter] = useState(true);
  const toggleFooter = () => setShowFooter(!showFooter);

  return (
    <Router>
      <Box>
        <Navigation />
        <Button onClick={toggleFooter} m={4}>
          {showFooter ? "Hide" : "Show"} Footer
        </Button>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        {showFooter && <Footer />}
      </Box>
    </Router>
  );
}
export default App;
