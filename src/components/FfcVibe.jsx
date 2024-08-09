import React, { useContext } from "react";
import { Context } from "../Context/MainContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FfcVibe = () => {
  const { FfcImages } = useContext(Context);
  var settings = {
    dots: false,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div>
      <section
        id="ffcvibe"
        className="w-[100%] py-10 bg-yellow-300 md:max-h-max grid gap-5 lg:gap-0 grid-cols-1 lg:grid-cols-5"
      >
        <div className="w-full flex flex-col gap-5 col-span-1 lg:col-span-3 pl-5">
          <div className="w-full">
            <img src="./img/ffcvibes.webp" alt="" className=" object-fill" />
          </div>
          <div className="hidden w-[90%] mx-auto  lg:block ">
            <p className="text-[#1c0303f2] text-sm sm:text-md md:text-xl text-justify ">
              Our FFC VIBE is a unique blend of authenticity, quality, and
              creativity. Our menu is handcrafted by our in-house chefs and is
              made with the highest quality ingredients.
              <br />
              Our menu is a culinary journey through time, showcasing the
              evolution of our products.
            </p>
          </div>
        </div>
        <div className="w-full   col-span-1 lg:col-span-2">
          <Slider {...settings} className="w-[85%] mx-auto ">
            {FfcImages.map((image, i) => {
              return (
                <div
                  key={i}
                  className="w-[250px] h-[280px] md:w-[400px] md:h-[450px] lg:h-[450px] relative flex items-center justify-center p-2 "
                >
                  <img
                    src={image.img}
                    alt=""
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default FfcVibe;
