import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Navigation from "./components/Navigation.jsx";
import { Box, Button } from "@chakra-ui/react";
import Footer from "./components/Footer";

function App() {
  const [showFooter, setShowFooter] = useState(true);

  const toggleFooter = () => setShowFooter(!showFooter);

  return (
    <Router>
      <Box as="main" pb={8}>
        <Button onClick={toggleFooter} m={4} colorScheme="blue" variant="outline">
          {showFooter ? "Hide Footer" : "Show Footer"}
        </Button>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {showFooter && <Footer />}
      </Box>
    </Router>
  );
}

export default App;
