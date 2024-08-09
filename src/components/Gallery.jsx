// Gallery viewer section for FFC Vibe
import React, { useState } from "react";
import Slider from "react-slick";
import { RxCross2 } from "react-icons/rx";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "rgba(0,0,0,0.6)",
        right: "-35px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "rgba(0,0,0,0.6)",
        left: "-35px",
      }}
      onClick={onClick}
    />
  );
}

const Gallery = () => {
  const [isSlider, setIsSlider] = useState(false);

  const sliderHandler = () => {
    setIsSlider(!isSlider);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div
      className={`slider-container w-full h-[calc(100vh-80px)]  z-10 my-4  "min-[1024px]:flex" : "hidden"
      }  min-[1024px]:fixed top-16 gap-5 min-[1024px]:flex-col justify-center bg-[#000000dd]`}
    >
      <div className="min-[1024px]:w-[90%] min-[1030px]:w-[50%] mx-auto ">
        {isSlider === true ? (
          <>
            <div className="w-[100%] mx-auto text-white  flex justify-end my-5">
              <RxCross2 onClick={sliderHandler} className="text-4xl" />
            </div>
            <Slider {...settings} className={` w-full h-full `}>
              {/* {FfcImages.map((image, i) => {
                return (
                  <div
                    key={i}
                    className="min-[1024px]:w-[600px] min-[1024px]:h-[700px] min-[1030px]:w-[200px] min-[1030px]:h-[500px]  px-5 py-2"
                  >
                    <img
                      key={i}
                      src={image.img}
                      alt=""
                      className=" w-full h-full object-fill rounded-3xl "
                    />
                  </div>
                );
              })} */}
            </Slider>
          </>
        ) : (
          <div className="min-[1024px]:w-[900px] min-[1024px]:h-[700px] min-[1030px]:w-[200px] min-[1030px]:h-[500px]  px-5 py-2">
            <div className="w-[100%] mx-auto text-white  flex justify-end">
              <RxCross2 className="text-4xl" />
            </div>
            {/* {pictures.map((image, i) => {
              return (
                <img
                  key={i}
                  src={image.img}
                  alt=""
                  className=" w-full h-full object-fill rounded-3xl border-2 "
                />
              );
            })} */}
            <button onClick={sliderHandler} className="text-white">
              see more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
