import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Navigation from "./components/Navigation.jsx";
import { Box } from "@chakra-ui/react";
import Services from "./pages/Services.jsx";
import Footer from "./components/Footer.jsx";

// Removed import of Button since it's no longer used directly in this file.

function App() {
  useEffect(() => {
    const toggleListener = () => setShowFooter((prev) => !prev);
    window.addEventListener("toggleFooter", toggleListener);
    return () => window.removeEventListener("toggleFooter", toggleListener);
  }, []);
  const [showFooter, setShowFooter] = useState(true);

  const toggleFooter = () => setShowFooter(!showFooter);

  return (
    <Router>
      <Box>
        <Navigation onToggleFooter={toggleFooter} />
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
