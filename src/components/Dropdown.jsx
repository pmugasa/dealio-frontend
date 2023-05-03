import { Link } from "react-router-dom";
function Dropdown({ handleContainerLeave, cart, setCart }) {
  function removeItem(id) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  }
  function increaseQuantity(id) {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setCart(updatedCart);
  }

  //decreasing the number of items per deal
  function decreaseQuantity(id) {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    setCart(updatedCart);
  }

  //calculating subtotal
  function calculateTotal(array) {
    return array.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
  }

  const subTotal = calculateTotal(cart);

  return (
    <>
      <div
        className=" w-9/10 md:w-2/5 lg:w-1/3 h-fit p-4 bg-white shadow-lg text-sm absolute z-10 top-20 right-0 flex flex-col "
        onMouseLeave={handleContainerLeave}
      >
        <div className="grid grid-cols-6 gap-2 items-center">
          <div className="col-span-4">
            <p className="font-bold text-lg">
              Your cart
              <span className="italic font-normal ml-2">
                ({cart.length} items)
              </span>
            </p>
          </div>

          <div className="font-bold mx-auto">Qty</div>
          <div className="font-bold mx-auto">Price</div>
        </div>
        <div className="grid grid-cols-6 items-center gap-2">
          {cart.map((item) => {
            return (
              <>
                <div className="col-span-4">
                  <div className="flex w-full  justify-start space-x-4 mt-4">
                    <button onClick={() => removeItem(item.id)}>X</button>
                    <img src={item.image} alt="deal" className="w-20 h-12" />
                    <p className="text-wrap">{item.title}</p>
                  </div>
                </div>
                <div className="mx-auto font-semibold flex items-center space-x-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    disabled={item.quantity === 1 ? true : false}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <div className="mx-auto font-semibold">{item.price}</div>
              </>
            );
          })}
        </div>

        <div className="divider"></div>
        <div className="flex items-center space-x-4 font-bold ml-auto mr-4 ">
          <p>Subtotal:</p>
          <p className="">${subTotal}</p>
        </div>

        <Link
          to="/checkout"
          className="px-4 py-2 mt-4 text-sm font-bold bg-primary rounded-md text-center hover:bg-green-500 hover:text-white"
        >
          Proceed to checkout
        </Link>
      </div>
    </>
  );
}
export default Dropdown;
