// home section (hero section)
import React from "react";

import { BiCoffeeTogo } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <section id="hero" className="w-full h-screen">
        <div className=" w-full text-center  pt-[200px] sm:pt-[150px] ">
          <h1 className=" text-4xl sm:text-9xl py-4 font-bold text-white ">
            GOOD MOOD
          </h1>
          <h3 className=" text-[24px] sm:text-5xl  text-[#fff]">
            is sponsered by Coffee
          </h3>
          {/* <img
            src="./img/ffcfinalcoffee.png"
            alt=""
            className="w-[200px] h-[300px] my-[50px] mx-auto drop-shadow-[10px_10px_20px_rgba(216,177,117)] -rotate-[15deg]"
          /> */}
          <div className=" w-[80%] flex justify-center gap-5 py-5  sm:py-16 mx-auto mt-12 sm:mt-0">
            <a
              href="https://www.swiggy.com/city/jaipur/ffc-cafe-chora-sadatpur-mansarovar-extension-rest799530?is_retargeting=true&media_source=GooglePlaceOrder&utm_campaign=GoogleMap&utm_source=GooglePlaceOrder"
              class="relative inline-flex items-center px-2 md:px-8 lg:px-12 py-2 md:py-3 overflow-hidden text-sm lg:text-lg  text-white font-semibold border-2 border-white rounded-full hover:text-white group hover:bg-gray-50"
            >
              <span class="absolute left-0 block w-full h-0 transition-all bg-[#38b6ff] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span class="absolute  right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <BiCoffeeTogo className=" sm:text-[20px] lg:text-[25px] ml-4 sm:ml-0" />
              </span>
              <span class="relative mx-4">Order now</span>
            </a>
            <a
              href="#findus"
              class="relative  inline-flex items-center px-2 md:px-8 lg:px-12 py-2 md:py-3 overflow-hidden text:sm lg:text-lg text-white font-semibold border-2 border-white  rounded-full hover:text-white group hover:bg-gray-50"
            >
              <span class="absolute left-0 block w-full h-0 transition-all bg-[#38b6ff] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <FaMapMarkerAlt className=" sm:text-[20px] lg:text-[25px] ml-4 sm:ml-0" />
              </span>
              <span class="relative mx-4">Find us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
