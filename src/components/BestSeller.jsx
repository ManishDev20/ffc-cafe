// best selling food section

import React from "react";
import BestfoodSlider from "./BestfoodSlider";

const BestSeller = () => {
  return (
    <div className="w-full max-[1025px]:h-[max-content] min-[1026px]:h-screen bg-[#ffd620] text-white py-5 md:py-10 ">
      <section id="bestSeller" className="w-[90%]  mx-auto  relative">
        <div className="w-[90%] mx-auto text-center py-5 flex flex-col gap-5">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold">
            Best Seller
          </h1>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold ">
            Come and try our tasty Cuisine
          </h3>
        </div>
        <BestfoodSlider />
      </section>
    </div>
  );
};

export default BestSeller;
