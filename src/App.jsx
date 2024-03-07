import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Footer from "./components/Footer";

function App() {
  const [showFooter, setShowFooter] = useState(true);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
      {showFooter && <Footer />}
    </Router>
  );
}

export default App;
