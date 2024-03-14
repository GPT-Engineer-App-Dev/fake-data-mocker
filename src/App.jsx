import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { Box, Button } from "@chakra-ui/react";
import Footer from "./components/Footer";

function App() {
  const [showFooter, setShowFooter] = useState(() => {
    const isFooterVisible = localStorage.getItem("showFooter") === "true";
    return isFooterVisible;
  });

  const toggleFooter = () => {
    const newShowFooter = !showFooter;
    localStorage.setItem("showFooter", newShowFooter.toString());
    setShowFooter(newShowFooter);
  };

  return (
    <Router>
      <Box as="main" pb={8}>
        <Button onClick={toggleFooter} m={4}>
          {showFooter ? "Hide" : "Show"} Footer
        </Button>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
        {showFooter && <Footer />}
      </Box>
    </Router>
  );
}

export default App;
