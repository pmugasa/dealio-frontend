import Home from "./pages/Home";
import DealDetail from "./pages/DealDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import data from "./data/db.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  const [deals, setDeals] = useState(data.deals);
  return (
    <>
      <Navbar />
      <div className="bg-50">
        <Router>
          <Routes>
            <Route path="/" element={<Home deals={deals} />} />
            <Route path="/deals/:id" element={<DealDetail deals={deals} />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
