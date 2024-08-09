import React from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: false,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          pauseOnHover: false,
          draggable: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: false,
          pauseOnHover: false,
          draggable: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <div className="slider-container w-[90%]    h-full mx-auto my-4">
      <Slider {...settings} className="w-full  ">
        {foodImages.map((image, i) => {
          return (
            <div
              key={i}
              className="w-[250px] h-[280px] md:w-[400px] md:h-[350px] lg:h-[500px]  relative flex items-center justify-center p-2 "
            >
              <img
                src={image.img}
                alt=""
                className="w-full h-full object-cover rounded-xl "
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BestfoodSlider;
