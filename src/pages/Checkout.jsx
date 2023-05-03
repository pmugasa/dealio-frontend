import { useState } from "react";

function Checkout({ cart }) {
  const [billingInfo, setBillingInfo] = useState({
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    phone: "",
  });

  //input changes
  function handleChange(e) {
    setBillingInfo((prevInfo) => ({
      ...prevInfo,
      [e.target.name]: e.target.value,
    }));
  }

  //submitting form
  function handleSubmit(e) {
    e.preventDefault();
    console.log(billingInfo);
    setBillingInfo((prevInfo) => ({
      ...prevInfo,
      [e.target.name]: "",
    }));
  }

  return (
    <>
      <main className="mt-8  p-4 max-w-screen-lg  mx-auto md:max-w-screen-md md:max-h-screen md:mx-auto sm:max-w-screen-sm sm:mx-auto ">
        <div className="flex font-bold text-primary p-4">
          <div className="">Show order summary</div>
          <p className="ml-auto ">$300</p>
        </div>
        <form
          className="border border-gray-300 shadow-lg w-full p-4"
          onSubmit={handleSubmit}
        >
          <div className="flex space-x-8 items-center">
            <p className="font-bold text-lg">Contact</p>

            <p className="text-xs">
              Already have an account?{" "}
              <span className="text-primary hover:underline cursor-pointer">
                Login
              </span>
            </p>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <p className="font-bold text-lg my-8">Billing address</p>
          <div className="my-2">
            <label className="label">
              <span className="label-text">Country/Region</span>
            </label>
            <input
              type="text"
              placeholder="country/region"
              name="country"
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <div className="my-2">
            <label className="label">
              <span className="label-text">First name</span>
            </label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              placeholder="first name"
              className="input input-bordered w-full"
            />
          </div>

          <div className="my-2">
            <label className="label">
              <span className="label-text">Last name</span>
            </label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              placeholder="last name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="my-2">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              placeholder="address"
              className="input input-bordered w-full"
            />
          </div>
          <div className="my-2">
            <label className="label">
              <span className="label-text">City</span>
            </label>
            <input
              type="text"
              name="city"
              onChange={handleChange}
              placeholder="city"
              className="input input-bordered w-full"
            />
          </div>

          <div className="my-2">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              placeholder="phone"
              className="input input-bordered w-full"
            />
          </div>
          <button
            type="submit"
            className=" w-full py-2 rounded-md mt-4 font-semibold bg-primary hover:text-white hover:bg-green-400"
          >
            Continue to payment
          </button>
        </form>
      </main>
    </>
  );
}

export default Checkout;
