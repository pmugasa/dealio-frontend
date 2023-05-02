function Dropdown({ handleContainerLeave, cart }) {
  return (
    <>
      <div
        className="w-full h-fit p-4 bg-white shadow-lg text-sm absolute z-10 top-20 right-0 flex flex-col "
        onMouseLeave={handleContainerLeave}
      >
        <div className="grid grid-cols-6">
          <div className="col-span-4">
            <p>
              Your cart
              <span className="italic">({cart.length} items)</span>
            </p>

            {cart.map((item) => {
              <div className="flex w-full" key={item.id}>
                <img src="" alt="deal" className="w-8 h-8" />
                <p>{item.title}</p>
              </div>;
            })}
          </div>
          <div>
            <p>Qty</p>
            <p>2</p>
          </div>
          <div>
            <p>Price</p>
            <p>50</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="ml-auto mr-9 flex space-x-4 font-bold ">
          <p>Subtotal</p>
          <p>$50</p>
        </div>

        <button className="px-4 py-2 mt-4 text-sm font-bold bg-primary rounded-md">
          Proceed to checkout
        </button>
      </div>
    </>
  );
}
export default Dropdown;
