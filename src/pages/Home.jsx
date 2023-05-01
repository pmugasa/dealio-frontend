import { useState } from "react";
import Navbar from "../components/Navbar";
import data from "../data/db.json";
import Card from "../components/Card";
import Footer from "../components/Footer";
function Home() {
  const [deals, setDeals] = useState(data.deals);
  return (
    <>
      <Navbar />
      <main className="mt-8  p-4 max-w-screen-lg  mx-auto md:max-w-screen-md md:mx-auto sm:max-w-screen-sm sm:mx-auto ">
        <h1 className="font-bold text-2xl text-neutral">
          Experience the City's Top Deals
        </h1>
        <div className="mt-6 grid grid-cols-2 gap-4  w-fit md:grid-cols-3 lg:grid-cols-4">
          {deals.map((deal) => {
            return <Card deal={deal} key={deal.id} />;
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
