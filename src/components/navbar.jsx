import React, { useEffect } from "react";
import { BiCoffeeTogo } from "react-icons/bi";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const [isNavbar, setIsNavbar] = React.useState(false);
  const toggleNavbar = () => setIsNavbar(!isNavbar);

  const closeMenu = (e) => {
    if (isNavbar && !e.target.closest(".Navbar")) {
      setIsNavbar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [isNavbar]);
  return (
    <div className="fixed w-full top-0 z-10">
      {/* Hello world */}
      <nav className="Navbar bg-black md:bg-[#000000a4]">
        <div className="max-w-screen-xl h-[80px] relative flex  items-center justify-between mx-auto px-4 md:px-10 py-2">
          <a
            href="#hero"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="./img/ffclogoorg.webp"
              className="h-20 md:h-24"
              alt="Flowbite Logo"
            />
          </a>
          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-white rounded-lg "
          >
            <MdOutlineMenu className="text-2xl font-bold " />
          </button>
          <div
            className={` ${
              isNavbar === true ? "fixed scale-x-[100%]" : "scale-y-[0%]"
            }  w-full sm:w-[300px] absolute top-[80px] right-0 z-10 bg-black sm:bg-[#1a1a1aaf] h-screen sm:h-[max-content] transition-[3s]`}
            id="navbar-hamburger"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg text-center p-5">
              <li>
                <a
                  onClick={() => {
                    toggleNavbar();
                  }}
                  href="#hero"
                  className="block py-2 px-3 text-white rounded"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    toggleNavbar();
                  }}
                  href="#footer"
                  className="block py-2 px-3 text-[#e0d6d6] hover:text-black rounded hover:bg-gray-100 "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    toggleNavbar();
                  }}
                  href="#ourMenu"
                  className="block py-2 px-3 text-[#e0d6d6] hover:text-black rounded hover:bg-gray-100"
                >
                  Our Menu
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    toggleNavbar();
                  }}
                  href="#footer"
                  className="block py-2 px-3 text-[#e0d6d6] hover:text-black rounded hover:bg-gray-100 "
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setTimeout(() => {
                      toggleNavbar();
                    }, 1000);
                  }}
                  href="https://www.swiggy.com/city/jaipur/ffc-cafe-chora-sadatpur-mansarovar-extension-rest799530?is_retargeting=true&media_source=GooglePlaceOrder&utm_campaign=GoogleMap&utm_source=GooglePlaceOrder"
                  className="relative inline-flex items-center my-5 px-2 md:px-8 lg:px-12 py-2 md:py-3 overflow-hidden text-sm lg:text-lg font-medium text-white border-2 border-white rounded-full hover:text-white group hover:bg-gray-50"
                >
                  <span className="absolute left-0 block w-full h-0 transition-all bg-[#38b6ff] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span className="absolute  right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <BiCoffeeTogo className="text-[18px] sm:text-[20px] lg:text-[25px] ml-4 sm:ml-0" />
                  </span>
                  <span className="relative px-4 sm:px-0">Order Now</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
