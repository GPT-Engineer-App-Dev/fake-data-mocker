import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Navigation from "./components/Navigation.jsx";
import { Box } from "@chakra-ui/react";
// The import for Footer has been removed.

function App() {
  return (
    <Router>
      <Box>
        <Navigation />
        {}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {}
      </Box>
    </Router>
  );
}

export default App;
