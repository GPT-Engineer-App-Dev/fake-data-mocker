import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Footer from "./components/Footer";
import { Button, Box } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Box as="main">
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
