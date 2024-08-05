import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BestfoodSlider = () => {
  const foodImages = [
    { id: 0, img: "./img/hakka-noddles.webp", title: "Hakka Noodles" },
    { id: 1, img: "./img/spring-roll.webp", title: "Spring Roll" },
    { id: 2, img: "./img/veg-burger.webp", title: "FFC Burger" },
    { id: 3, img: "./img/blue-mojito.webp", title: "Virgin Mojito" },
    { id: 4, img: "./img/veg-fried-rice.webp", title: "Veg Fried Rice" },
    { id: 5, img: "./img/veg-masala-maggie.webp", title: "Masala Maggie" },
    { id: 6, img: "./img/veg-pizza.webp", title: "Special Veg Pizza" },
    { id: 7, img: "./img/veg-sandwich.webp", title: "Veg Sandwich" },
    { id: 8, img: "./img/veg-sizzler.webp", title: "FFC Sizzler" },
  ];
  const [current, setCurrent] = useState(0);
  const length = foodImages.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div className="relative w-[100%] md:w-[90%] lg:w-[70%] h-[300px] sm:h-[400px] md:h-[450px]  flex items-center  mx-auto overflow-hidden p-4 ">
      <div
        className="w-full  flex transition-transform duration-700 ease-in-out "
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {foodImages.map((image, index) => (
          <div key={index} className="min-w-full relative flex justify-center ">
            <img
              src={image.img}
              alt={`Best Seller ${index + 1}`}
              className="max-[350px]:w-[200px] w-[250px] sm:w-[300px] md:w-[450px] max-[350px]:h-[200px] h-[250px] sm:h-[300px] md:h-[400px] rounded-[10%] "
            />
            <h2 className="absolute left-auto bg-[#000000be] px-5 py-2 font-semibold rounded-xl bottom-4 md:bottom-5 text-md sm:text-lg md:text-xl lg:text-2xl">
              {image.title}
            </h2>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-[#000000ab] text-white rounded-full p-1 sm:p-2 text-[10px] sm:text-[16px]"
        onClick={prevSlide}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-[#000000ab] text-white rounded-full p-1 sm:p-2 text-[10px] sm:text-[16px]"
        onClick={nextSlide}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default BestfoodSlider;
