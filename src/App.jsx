import { useState, useCallback } from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Footer from "./components/Footer";
import { Button, Box } from "@chakra-ui/react";

function App() {
  const [showFooter, setShowFooter] = useState(true);

  const toggleFooter = useCallback(() => {
    setShowFooter((prevShowFooter) => !prevShowFooter);
  }, []);

  return (
    <Router>
      <Box textAlign="center" my={4}>
        <Button onClick={toggleFooter} colorScheme="blue">
          {showFooter ? "Hide Footer" : "Show Footer"}
        </Button>
      </Box>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
      {showFooter && <Footer />}
    </Router>
  );
}

export default App;
