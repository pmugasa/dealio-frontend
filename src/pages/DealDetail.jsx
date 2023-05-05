import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function DealDetail({ deals, cart, setCart }) {
  const id = useParams().id;
  const deal = deals.find((deal) => deal.id === id);
  const navigate = useNavigate();

  //add to cart
  function addToCart(id) {
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      return [
        ...cart,
        {
          ...existingItem,
          quantity: (existingItem.quantity += 1),
        },
      ];
    } else {
      setCart([...cart, deal]);
      alert("Item added successfully 😃");
    }
  }

  return (
    <>
      <main className="mt-6 md:max-w-screen-lg md:mx-auto   ">
        <div className="my-4">
          <button
            className="px-6 py-2 bg-primary text-white rounded-md mx-6"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>

        <div className="text-md font-normal text-neutral md:flex items-center mx-6 ">
          <div className="md:w-2/3  ">
            <img src={deal.image} alt="deal" className="object-cover md:h-96" />

            <p className="font-bold text-lg my-4">Description</p>
            <p className="text-gray-500 my-4">{deal.description}</p>
            <p className="font-bold text-lg my-4">Fine Print</p>
            <p className="text-gray-500 my-4">{deal.terms}</p>
          </div>

          <div className="ml-auto md:p-10 md:mb-28">
            <p className="font-semibold  ">
              <ion-icon name="restaurant-outline" size="small"></ion-icon>
              <span className="ml-2">{deal.restaurantName}</span>
            </p>
            <p className="font-semibold ">
              <ion-icon name="location-outline" size="small"></ion-icon>
              <span className="ml-2 ">{deal.restaurantAddress}</span>
            </p>
            <p className="font-bold text-xl my-4">{deal.title}</p>
            <div className="flex space-x-4 text-2xl">
              <p className="font-bold">
                ${deal.price * (1 - deal.discount / 100)}
              </p>
              <p className="font-bold text-gray-400 line-through">
                ${deal.price}
              </p>
            </div>
            <div className="flex space-x-4 my-4 ">
              <button
                className="btn btn-md btn-primary gap-2 w-full hover:text-white font-semibold "
                onClick={() => {
                  addToCart(deal.id);
                }}
              >
                Add to cart
                <ion-icon name="cart-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default DealDetail;
