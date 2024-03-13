import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { Box } from "@chakra-ui/react";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Box as="main" pb={8}>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
