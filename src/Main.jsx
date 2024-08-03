// import React from "react";

// import Bestfood from "./components/Bestfood";

// import { BiCoffeeTogo } from "react-icons/bi";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { MdMenuOpen } from "react-icons/md";

// const Main = () => {
//   const [navbar, setNavbar] = React.useState(false);
//   const toggleNavbar = () => {
//     setNavbar(!navbar);
//   };
//   return (
//     <div className="w-full h-[max-content] relative">
//       <div
//         className={` navbarToggle w-full h-screen bg-[#000000] ${
//           navbar === true ? "sticky" : "hidden"
//         } z-10 top-0 `}
//       >
//         <div className="flex justify-between items-center shadow-sm  p-5">
//           <img
//             src="./img/ffclogonew.png"
//             alt="brandLogo"
//             className="w-[50px] h-[50px]"
//           />
//           <span className="text-[40px] text-white">
//             <MdMenuOpen onClick={toggleNavbar} />
//           </span>
//         </div>
//         <div className="mt-20">
//           <ul className="sm:text-[20px] md:text-[25px] text-white px-8 flex flex-col gap-5 items-center">
//             <li>Home</li>
//             <li>About us</li>
//             <li>Our Menu</li>
//             <li>FFC Vibe</li>
//             <li className="my-5 border px-10 py-2 rounded-full hover:bg-[#38b6ff]">
//               Order now
//             </li>
//           </ul>
//         </div>
//       </div>
//       <section
//         id="home"
//         className="home relative w-full h-screen mx-auto bg-cover bg-left  md:bg-cover md:bg-center"
//       >
//         <nav className=" border-gray-200 ">
//           <div className="max-w-screen px-[20px] sm:px-[30px] lg:px-[50px] py-3 md:py-5 flex flex-wrap items-center justify-between">
//             <a
//               href="#home"
//               className="flex items-center space-x-3 rtl:space-x-reverse"
//             >
//               <img
//                 src="./img/ffclogonew.png"
//                 className="w-[60px] md:w-[80px] lg:w-[100px] h-[60px] md:h-[80px] lg:h-[100px]"
//                 alt="Flowbite Logo"
//               />
//             </a>
//             <div
//               className="lg:block hidden w-full md:w-auto"
//               id="navbar-default"
//             >
//               <ul className="font-medium flex flex-col  p-4 md:p-0 mt-4  border-gray-100 rounded-lg md:flex-row md:space-x-[10px] rtl:space-x-reverse md:mt-0 md:border-0   ">
//                 <li>
//                   <a
//                     href="#home"
//                     className="block md:text-[18px] lg:text-[20px] md:px-[10px] lg:px-8 py-2 text-white hover:text-[#38b6ff] rounded md:bg-transparent "
//                     aria-current="page"
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#aboutus"
//                     className="block  md:text-[18px] lg:text-[20px] md:px-[10px] lg:px-8 py-2  hover:text-[#38b6ff] rounded md:bg-transparent text-white "
//                   >
//                     About
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#ourMenu"
//                     className="block md:text-[18px] lg:text-[20px] md:px-[10px] lg:px-8 py-2  hover:text-[#38b6ff] rounded md:bg-transparent text-white "
//                   >
//                     Our Menu
//                   </a>
//                 </li>

//                 <li>
//                   <a
//                     href="#_"
//                     class="relative inline-flex items-center  md:px-8 lg:px-8 py-2 overflow-hidden text-md font-medium text-white border-2 border-white rounded-full hover:text-white group hover:bg-gray-50"
//                   >
//                     <span class="absolute left-0 block w-full h-0 transition-all bg-[#38b6ff] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
//                     <span class="absolute right-0 flex items-center px-2 justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
//                       <BiCoffeeTogo className="text-[22px] " />
//                     </span>
//                     <span class="relative">Order now</span>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             {/* navbar on mobile responsive */}
//             <button
//               onClick={toggleNavbar}
//               className="lg:hidden block text-white"
//             >
//               <svg
//                 className="w-7 h-7"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//           </div>
//         </nav>
//         <div className="hero  w-full pl-0 sm:pl-[50px] md:pl-[80px] lg:pl-[100px] mt-[50px]">
//           <h1 className="  max-w-max  mx-auto sm:mx-0 text-[45px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-bold text-white ">
//             GOOD MOOD
//           </h1>
//           <h3 className="text-[25px] max-w-max mx-auto sm:mx-0 sm:pl-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px]  text-white pl-2 md:pl-5">
//             is sponsered by
//             <span className=" font-semibold "> Coffee</span>
//           </h3>
//           <div className="flex justify-center sm:justify-normal gap-10 mt-[50px] sm:mt-[60px] md:mt-[80px] pl-[10px] sm:pl-[40px] lg:pl-[50px]">
//             <a
//               href="#_"
//               class="relative inline-flex items-center px-5 md:px-8 lg:px-12 py-2 md:py-3 overflow-hidden text-sm lg:text-lg font-medium text-white border-2 border-white rounded-full hover:text-white group hover:bg-gray-50"
//             >
//               <span class="absolute left-0 block w-full h-0 transition-all bg-[#38b6ff] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
//               <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
//                 <BiCoffeeTogo className="text-[18px] sm:text-[20px] lg:text-[25px]" />
//               </span>
//               <span class="relative ">Order now</span>
//             </a>
//             <a
//               href="#_"
//               class="relative text-white inline-flex items-center px-5 md:px-8 lg:px-12 py-2 md:py-3 overflow-hidden text:sm lg:text-lg font-medium border-2 border-white  rounded-full hover:text-white group hover:bg-gray-50"
//             >
//               <span class="absolute left-0 block w-full h-0 transition-all bg-[#38b6ff] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
//               <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
//                 <FaMapMarkerAlt className="text-[25px]" />
//               </span>
//               <span class="relative">Find us</span>
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Best seller seciton start here */}

//       <section
//         id="bestSeller"
//         className="bestSeller w-full h-screen bg-[yellow] "
//       >
//         <h1 className="text-[30px] sm:text-[40px] md:text-[50px] text-center pt-10 font-bold">
//           Our Best Seller
//         </h1>
//         <h2 className="text-[25px] sm:text-[40px] text-center py-2 font-semibold">
//           Come and try our tasty Cuisine
//         </h2>
//         <div className="foodCarousel w-full ">
//           <div className="w-[max-content] mx-auto">
//             <Bestfood />
//           </div>
//         </div>
//       </section>
//       <section id="aboutus" className="aboutus"></section>
//       <section id="ourMenu" className="ourMenu"></section>
//       <section id="ffcVibe" className="ffcVibe"></section>
//       <section id="findus" className="findus"></section>
//       <section id="footer" className="footer"></section>
//     </div>
//   );
// };

// export default Main;

import React from "react";
import Hero from "./components/Hero";
import BestSeller from "./components/BestSeller";
import OurMenu from "./components/OurMenu";
import AboutUs from "./components/AboutUs";
import FfcVibe from "./components/FfcVibe";
import Findus from "./components/Findus";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";

const Main = () => {
  const menu = [
    {
      id: 0,
      items: [
        {
          title: "Tea",
          img: "./img/tea-menu.png",
          dishes: [
            { name: "Simple Tea", price: 5 },
            { name: "Masala Tea", price: 10 },
            { name: "Kulhad Tea", price: 20 },
          ],
        },
        {
          title: "Coffee",
          img: "./img/coffee-menu.svg",
          dishes: [
            { name: "Hot Coffee", price: 0 },
            { name: "Cold Coffee", price: 0 },
            { name: "Cold Coffee with Ice-Cream", price: 0 },
          ],
        },
        {
          title: "Shakes",
          img: "./img/shake-menu.svg",
          dishes: [
            { name: "Strawberry Shake", price: 0 },
            { name: "Chocolate Shake", price: 0 },
            { name: "KitKat Shake", price: 0 },
            { name: "Mango Shake", price: 0 },
            { name: "Butter scotch Shake", price: 0 },
            { name: "Coldrink Shake", price: 0 },
          ],
        },
      ],
    },
    {
      id: 1,
      items: [
        {
          title: "Rolls",
          img: "./img/roll-menu.png",
          dishes: [
            { name: "Veg. Roll", price: 0 },
            { name: "Spring Roll", price: 0 },
            { name: "Paneer Capsicum Roll", price: 0 },
            { name: "Cheese Roll", price: 0 },
          ],
        },
        {
          title: "Pizza",
          img: "./img/pizza-menu.svg",
          dishes: [
            { name: "OTC Pizza", price: 0 },
            { name: "Paneer Pizza", price: 0 },
            { name: "Cheese Pizza", price: 0 },
            { name: "Onion Capsicum Pizza", price: 0 },
            { name: "Mushroom Pizza", price: 0 },
            { name: "Corn Pizza", price: 0 },
            { name: "FFC Special Pizza", price: 0 },
          ],
        },
        {
          title: "Sandwich",
          img: "./img/sandwich-menu.png",
          dishes: [
            { name: "Veg Sandwich", price: 0 },
            { name: "Veg Grilled Sandwich", price: 0 },
            { name: "Veg Cheese Grilled Sandwich", price: 0 },
            { name: "Onion Tomato Sandwich", price: 0 },
            { name: "Masala Sandwich", price: 0 },
          ],
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "Maggie",
          img: "./img/maggie-menu.png",
          dishes: [
            { name: "Plain Maggie", price: 0 },
            { name: "Masala Maggie", price: 0 },
            { name: "Cheese Maggie", price: 0 },
          ],
        },
        {
          title: "Burger",
          img: "./img/burger-menu.png",
          dishes: [
            { name: "Veg Burger", price: 0 },
            { name: "Cheese Burger", price: 0 },
          ],
        },
        {
          title: "Chinese",
          img: "./img/chinese-menu.png",
          dishes: [
            { name: "Veg Chowmine", price: 0 },
            { name: "Hakka Noodles", price: 0 },
            { name: "Shezwan Noodles", price: 0 },
            { name: "Chilli Paneer Gravy", price: 0 },
          ],
        },
      ],
    },
  ];
  return (
    <div className="">
      <Navbar />
      <Hero />
      <BestSeller />
      <OurMenu menu={menu} />
      <AboutUs />
      <FfcVibe />
      <Findus />
      <Footer />
    </div>
  );
};

export default Main;
