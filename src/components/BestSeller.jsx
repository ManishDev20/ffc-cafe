// best selling food section

import React from "react";
import BestfoodSlider from "./BestfoodSlider";

const BestSeller = () => {
  return (
    <div className="w-full max-h-max bg-[#ffd620] text-white py-10 ">
      <section id="bestSeller" className="w-[90%]  mx-auto  relative ">
        <div className="w-[90%] mx-auto text-center  flex flex-col gap-5">
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
