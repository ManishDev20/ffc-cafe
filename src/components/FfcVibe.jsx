import React from "react";
// import Gallery from "./Gallery";

import { FaInstagram } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const FfcVibe = () => {
  const FfcGallery = [
    { id: 0, img: "./img/ffcimg1.webp" },
    { id: 1, img: "./img/ffcimg2.webp" },
    { id: 2, img: "./img/ffcimg3.webp" },
    { id: 3, img: "./img/ffcimg4.webp" },
    { id: 4, img: "./img/ffcimg5.webp" },
    { id: 5, img: "./img/ffcimg6.webp" },
    { id: 6, img: "./img/ffcimg7.webp" },
  ];
  const [currentPic, setCurrentPic] = React.useState(0);
  const length = FfcGallery.length;

  const nextSlide = () => {
    setCurrentPic(currentPic === length - 1 ? 0 : currentPic + 1);
  };

  const prevSlide = () => {
    setCurrentPic(currentPic === 0 ? length - 1 : currentPic - 1);
  };

  const [isViewer, setIsViewer] = React.useState(false);
  const ViewerHandler = () => {
    setIsViewer(!isViewer);
  };
  return (
    <div className="w-full max-h-max  relative pt-5 sm:py-0  bg-[#ffff0092] sm:bg-[#fff] broder ">
      <section
        id="fccvibe"
        className="w-[90%] md:h-[90%] mx-auto hidden sm:grid p-5 min-[1026px]:grid-cols-5 max-[1025px]:grid-cols-3  "
      >
        <div className="max-[1025px]:col-span-2 min-[1026px]:col-span-2 flex flex-col gap-5 p-2 ">
          <img
            src="./img/ffcvibes.webp"
            alt=""
            className="w-[500px] mx-auto drop-shadow-[5px_5px_2px_rgba(255,0,0,0.8)]"
          />
          <img
            onClick={ViewerHandler}
            src="./img/ffcimg7.webp"
            alt=""
            className="w-full h-[300px] rounded-xl"
          />
        </div>
        <div className="max-[1025px]:col-span-1 min-[1026px]:col-span-1 flex flex-col gap-5 p-2">
          <img
            onClick={ViewerHandler}
            src="./img/ffcimg1.webp"
            alt=""
            className="w-full h-[60%] rounded-xl "
          />
          <img
            onClick={ViewerHandler}
            src="./img/ffcimg2.webp"
            alt=""
            className="w-full h-[40%] rounded-xl "
          />
        </div>
        <div className="max-[1025px]:col-span-1 min-[1026px]:col-span-1 flex flex-col gap-5 p-2">
          <img
            onClick={ViewerHandler}
            src="./img/ffcimg3.webp"
            alt=""
            className="w-full h-[40%] rounded-xl "
          />
          <img
            onClick={ViewerHandler}
            src="./img/ffcimg6.webp"
            alt=""
            className="w-full h-[60%] rounded-xl "
          />
        </div>
        <div className="max-[1025px]:col-span-2 min-[1026px]:col-span-1 flex flex-col gap-5 p-2">
          <img
            onClick={ViewerHandler}
            src="./img/ffcimg5.webp"
            alt=""
            className="w-full h-[100%] rounded-xl "
          />
        </div>
      </section>
      <section className="block sm:hidden">
        <div className="ffcVibe">
          <img
            src="./img/ffcvibes.webp"
            alt=""
            className="w-[90%] mx-auto my-5"
          />
        </div>
        <div className="relative w-[100%] md:w-[90%] lg:w-[70%] h-[300px] sm:h-[400px] md:h-[450px]  flex items-center  mx-auto overflow-hidden p-4 ">
          <div
            className="w-full  flex transition-transform duration-700 ease-in-out "
            style={{ transform: `translateX(-${currentPic * 100}%)` }}
          >
            {FfcGallery.map((image, index) => (
              <div
                key={index}
                className="min-w-full relative flex justify-center "
              >
                <img
                  src={image.img}
                  alt={`Best Seller ${index + 1}`}
                  className="max-[350px]:w-[250px] min-[500px]:w-[400px] w-[300px] sm:w-[300px] md:w-[450px] max-[350px]:h-[200px] h-[250px] sm:h-[300px] md:h-[400px] rounded-[10%] "
                />
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
      </section>

      <div className="socialLabel w-full flex items-center sm:justify-between gap-2 sm:gap-5 overflow-hidden sm:h-[150px] bg-[#4b1d0d] py-5 px-2 lg:px-10">
        <h1 className=" text-3xl sm:text-5xl font-bold text-white">
          Follow us
        </h1>
        <div className="w-[50%] lg:w-[70%] flex gap-2 sm:gap-5 items-center lg:justify-between px-4 ">
          <a href="https://www.instagram.com/ffc_cafe_jpr/">
            <FaInstagram className="text-3xl lg:text-5xl text-white hover:text-pink-500" />
          </a>
          <div className="bg-gradient-to-r from-[#7e20fb] from-20% via-[#ff2f61] via-50% to-[#ffc509] to-80% rounded-md py-[1px] px-[2px] sm:p-[4px] ">
            <a
              href="https://www.instagram.com/ffc_cafe_jpr/"
              className="text-lg sm:text-xl bg-[#4b1d0d] px-2 lg:px-4 text-white rounded-md hover:bg-transparent"
            >
              ffc_cafe_jpr
            </a>
          </div>
          <h1 className="w-[50%] hidden lg:block text-2xl lg:text-md  leading-5 lg:leading-[40px]  font-semibold text-white">
            Follow for latest Events & Offers at FFC CAFE
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FfcVibe;
