import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Navigation from "./components/Navigation.jsx";
import { Box, Button } from "@chakra-ui/react";
import Footer from "./components/Footer";
// These lines were removed, as they should be inside the App component.

function App() {
  // Code related to showFooter state and toggleFooter function has been removed.

  return function App() {
    const [showFooter, setShowFooter] = useState(true);

    const toggleFooter = () => setShowFooter(!showFooter);

    return (
      <Router>
        <Box>
          <Navigation />
          <Button onClick={toggleFooter} m={4}>
            {showFooter ? "Hide Footer" : "Show Footer"}
          </Button>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {showFooter && <Footer />}
        </Box>
      </Router>
    );
  };
}

export default App;
