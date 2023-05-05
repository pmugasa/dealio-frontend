import Home from "./pages/Home";
import DealDetail from "./pages/DealDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import axios from "axios";

function App() {
  const [deals, setDeals] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [billingInfo, setBillingInfo] = useState({
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    phone: "",
  });
  const user = "pete";
  const baseUrl = "/api/deals";
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get(baseUrl);
        setDeals(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  //calculating subtotal
  function calculateTotal(array) {
    return array.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
  }
  return (
    <>
      <Router>
        <Navbar
          cart={cart}
          user={user}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setCart={setCart}
          calculateTotal={calculateTotal}
        />

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
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                billingInfo={billingInfo}
                setBillingInfo={setBillingInfo}
              />
            }
          />
          <Route
            path="/payment"
            element={
              <Payment
                billingInfo={billingInfo}
                cart={cart}
                calculateTotal={calculateTotal}
              />
            }
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
