import { Link, redirect } from "react-router-dom";

function Navbar({ cart, user }) {
  function redirectUser() {
    console.log("clicked");
    if (user === undefined) return redirect("/login");
  }

  return (
    <>
      <nav className="p-4 shadow-lg relative">
        <div className="flex">
          <Link to="/" className="font-bold text-xl text-primary">
            Dealio
          </Link>
          <div className="ml-auto space-x-6">
            <button
              onClick={() => console.log("clicked")}
              className="indicator"
            >
              <span className="badge badge-primary badge-sm indicator-item">
                {cart.length}
              </span>
              <ion-icon name="cart-outline"></ion-icon>
            </button>
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
