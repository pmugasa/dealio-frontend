import { useState } from "react";

function Navbar() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <nav className="p-4 shadow-lg relative">
        <div className="flex">
          <a className="font-bold text-xl text-primary">Dealio</a>
          <div className="ml-auto space-x-6">
            <button
              onClick={() => console.log("clicked")}
              className="indicator"
            >
              <span className="badge badge-primary badge-sm indicator-item">
                8
              </span>
              <ion-icon name="cart-outline"></ion-icon>
            </button>
            <button onClick={() => setShowProfile(!showProfile)}>
              <ion-icon name="person-outline"></ion-icon>
            </button>
          </div>
        </div>
        <ul
          className={
            showProfile === false
              ? "hidden"
              : "  absolute top-14 right-0  menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52"
          }
        >
          <li>
            <a className="justify-between">Profile</a>
          </li>
          <li>
            <a>Wishlist</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
