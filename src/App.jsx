import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Footer from "./components/Footer";
import { Button, Box } from "@chakra-ui/react";

import { useState } from "react";

function App() {
  const [showFooter, setShowFooter] = useState(true);

  return (
    <Router>
      <Box as="main">
        <Button onClick={() => setShowFooter(!showFooter)}>{showFooter ? "Hide" : "Show"} Footer</Button>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
        {showFooter && <Footer />}
      </Box>
    </Router>
  );
}

export default App;
