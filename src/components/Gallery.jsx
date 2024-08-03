// Gallery viewer section for FFC Vibe
// Not in use currently!
import React from "react";
import Slider from "react-slick";

const Gallery = ({ FfcGallery }) => {
  const settings = {
    dots: false,
    buttons: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div className="slider-container w-full h-screen">
      <Slider {...settings}>
        {FfcGallery.map((image, i) => {
          return (
            <div key={i} className="border-2 border-blue-400">
              <img
                src={image.img}
                alt=""
                className="w-[50%] h-[500px] mx-auto border-2 border-green-500"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Gallery;
