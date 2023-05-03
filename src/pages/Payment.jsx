import { useState } from "react";

function Payment({ billingInfo }) {
  const [isChecked, setIsChecked] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState();

  function handleChange(e) {
    setPaymentMethod(e.target.value);
    setIsChecked(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(paymentMethod, billingInfo);
  }
  return (
    <main className="mt-8  p-4 max-w-screen-lg  mx-auto md:max-w-screen-md  md:mx-auto sm:max-w-screen-sm sm:mx-auto text-sm ">
      <div className="border border-gray-300 shadow-sm w-full p-4">
        <div className="flex flex-col">
          <div className="flex">
            <div>
              <p>Contact</p>
              <p>{billingInfo.email}</p>
            </div>
            <p className="ml-auto text-primary underline">Change</p>
          </div>
          <div className="divider"></div>
          <div className="">
            <div className="flex">
              <div>
                <p>Billing</p>
                <p>
                  {billingInfo.address},{billingInfo.city},{" "}
                  {billingInfo.country}
                </p>
              </div>
              <p className="ml-auto text-primary underline">Change</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4">
        <p className="font-bold text-lg">Payment</p>
        <form
          onSubmit={handleSubmit}
          className="mt-4 border border-gray-300 shadow-sm w-full p-4"
        >
          <div className="flex space-x-4">
            <input
              type="radio"
              name="radio-2"
              value="pesepay"
              className="radio radio-primary radio-sm"
              checked={paymentMethod === "pesepay"}
              onChange={handleChange}
            />

            <label htmlFor="pesepay" className="font-bold">
              Pesepay
            </label>
          </div>
          <div className="divider"></div>
          <div className="flex space-x-4 my-4">
            <input
              type="radio"
              name="radio-2"
              value="paynow"
              className="radio radio-primary radio-sm"
              onChange={handleChange}
              checked={paymentMethod === "paynow"}
            />
            <label htmlFor="paynow" className="font-bold">
              Paynow
            </label>
          </div>
          <button
            disabled={isChecked === false ? true : false}
            onClick={() => console.log("clicked")}
            className={
              isChecked === false
                ? " mt-4 w-full py-2 font-semibold bg-red-400"
                : "mt-4 w-full py-2 font-semibold bg-primary hover:text-white hover:bg-green-400"
            }
          >
            Pay now
          </button>
        </form>
      </div>
    </main>
  );
}

export default Payment;
