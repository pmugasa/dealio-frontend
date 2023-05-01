function Card({ deal }) {
  const discountAmount = deal.price * (1 - deal.discount / 100);

  return (
    <>
      <div className="w-full h-64 relative  bg-white shadow-md hover:shadow-2xl rounded-sm">
        <div className="h-2/5 overflow-hidden">
          <img
            src={deal.image}
            alt="deal_image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" absolute top-0 r-0 text-sm p-1 rounded-sm bg-primary text-white">
          {deal.discount}% OFF
        </div>
        <div className="p-2 ">
          <h2 className="font-bold text-md truncate">{deal.title}</h2>
          <p className="font-semibold text-sm mt-2 truncate">
            {deal.restaurantName}
          </p>
          <p className="font-semibold text-sm mt-2 ">
            {deal.restaurantSurburb}
          </p>

          <div className="flex space-x-4">
            <p className="font-bold text-lg mt-2 text-primary">
              ${discountAmount.toFixed(2)}
            </p>
            <p className="font-bold text-lg text-gray-500 line-through mt-2">
              ${deal.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
