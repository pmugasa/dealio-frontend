import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function Navbar({ cart }) {
  console.log(cart);
  const [showCart, setShowCart] = useState(false);

  const handleBtnHover = () => {
    setShowCart(true);
  };
  const handleContainerLeave = () => {
    setShowCart(false);
  };

  return (
    <>
      <nav className="p-4 border-b-2 border-gray-300 relative">
        <div className="flex">
          <Link to="/" className="font-bold text-xl text-primary">
            Offer<span className="text-neutral">ly</span>
          </Link>
          <div className="ml-auto space-x-6">
            <button
              className="  indicator relative"
              onMouseEnter={handleBtnHover}
            >
              <span className=" badge badge-primary badge-sm indicator-item">
                {cart.length}
              </span>
              <ion-icon name="cart-outline"></ion-icon>
            </button>
            {showCart === true ? (
              <Dropdown
                handleContainerLeave={handleContainerLeave}
                cart={cart}
              />
            ) : null}

            <Link to="/login">
              <ion-icon name="person-outline"></ion-icon>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
