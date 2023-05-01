import Home from "./pages/Home";
import DealDetail from "./pages/DealDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import data from "./data/db.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
function App() {
  const [deals, setDeals] = useState(data.deals);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const user = undefined;
  return (
    <>
      <Router>
        <Navbar cart={cart} user={user} />
        <div className="bg-5 mx-auto">
          <Routes>
            <Route path="/" element={<Home deals={deals} />} />
            <Route
              path="/deals/:id"
              element={
                <DealDetail
                  deals={deals}
                  cart={cart}
                  setCart={setCart}
                  wishlist={wishlist}
                  setWishlist={setWishlist}
                />
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
