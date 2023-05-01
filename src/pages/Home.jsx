import Navbar from "../components/Navbar";

import Card from "../components/Card";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function Home({ deals }) {
  return (
    <>
      <main className="mt-8  p-4 max-w-screen-lg  mx-auto md:max-w-screen-md md:mx-auto sm:max-w-screen-sm sm:mx-auto ">
        <h1 className="font-bold text-2xl text-neutral">
          Explore Harare's Best Restaurants, Spas, Attractions, and More with
          our Exclusive Deals
        </h1>
        <div className="mt-6 grid grid-cols-2 gap-4  w-fit md:grid-cols-3 lg:grid-cols-4">
          {deals.map((deal) => {
            return (
              <Link key={deal.id} to={`/deals/${deal.id}`}>
                <Card deal={deal} />
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Home;
