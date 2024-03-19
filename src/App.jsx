import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Navigation from "./components/Navigation.jsx";
import { Box, Button } from "@chakra-ui/react";
import Footer from "./components/Footer";
const [showFooter, setShowFooter] = useState(true);
const toggleFooter = () => setShowFooter(!showFooter);

function App() {
  return (
    <Router>
      <Box as="main" pb={8}>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Button onClick={toggleFooter}>{showFooter ? "Hide" : "Show"} Footer</Button>
      </Box>
      {showFooter && <Footer />}
    </Router>
  );
}

export default App;
