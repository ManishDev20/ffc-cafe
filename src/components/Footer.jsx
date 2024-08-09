import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { GrCafeteria } from "react-icons/gr";
import { RiSecurePaymentLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div id="footer" className="bg-[#111827] px-5 pt-[80px] lg:pt-5">
      <section className="py-5 grid gap-5 max-[765px]:grid-cols-1  max-[1025px]:grid-cols-2 min-[1026px]:grid-cols-4">
        <div className="col-span-1 flex flex-col gap-2 px-3 text-white">
          <h1 className="text-xl  font-semibold uppercase flex items-center gap-2">
            <IoMdContacts />
            Contact us
          </h1>
          <hr />
          <ul className="flex flex-col gap-2 px-2">
            <li className="flex  gap-2">
              <IoLocationSharp className="text-3xl text-yellow-200  inline" />{" "}
              Jaisinghpura Rd, Bhakrota, Rajasthan, India 302026
            </li>
            <li>
              <MdAddIcCall className="inline text-yellow-200 mr-1" /> +91
              2546358852
            </li>
            <li>
              <IoMail className="inline text-yellow-200 mr-2" />
              ffccafejpr@gmail.com
            </li>
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-2 px-3 text-white">
          <h1 className="text-xl font-semibold uppercase flex items-center gap-2">
            <MdOutlineRestaurantMenu /> Our Menu
          </h1>
          <hr />
          <ul className="flex flex-col gap-2 px-2">
            <li>
              <GrFormNextLink className="inline text-yellow-200 mr-2" />
              <a href="#ourMenu " className="hover:text-blue-500">
                Coffee
              </a>
            </li>
            <li>
              <GrFormNextLink className="inline text-yellow-200 mr-2" />
              <a href="#ourMenu" className="hover:text-blue-500">
                Shakes
              </a>
            </li>
            <li>
              <GrFormNextLink className="inline text-yellow-200 mr-2" />
              <a href="#ourMenu" className="hover:text-blue-500">
                Pizza
              </a>
            </li>
            <li>
              <GrFormNextLink className="inline text-yellow-200 mr-2" />
              <a href="#ourMenu" className="hover:text-blue-500">
                Chinese
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-2 px-3 text-white">
          <h1 className="text-xl font-semibold uppercase flex items-center gap-2">
            <GrCafeteria /> Our Services
          </h1>
          <hr />
          <ul className="flex flex-col gap-2 px-2">
            <li>
              <FaRegCheckCircle className="inline text-yellow-200 mr-2" />
              Outdoor seating
            </li>
            <li>
              <FaRegCheckCircle className="inline text-yellow-200 mr-2" />
              Kerbside pickup
            </li>
            <li>
              <FaRegCheckCircle className="inline text-yellow-200 mr-2" />
              Delivery
            </li>
            <li>
              <FaRegCheckCircle className="inline text-yellow-200 mr-2" />
              Drive-through
            </li>
            <li>
              <FaRegCheckCircle className="inline text-yellow-200 mr-2" />
              Takeaway
            </li>
            <li>
              <FaRegCheckCircle className="inline text-yellow-200 mr-2" />
              Dine-in
            </li>
          </ul>
        </div>
        <div className="col-span-1  flex flex-col gap-2 px-3 text-white">
          <h1 className="text-xl font-semibold uppercase flex items-center gap-2">
            <RiSecurePaymentLine />
            Payments
          </h1>
          <hr />
          <ul className="flex flex-col gap-2 px-2">
            <li>
              <FaRegCheckCircle className="inline text-yellow-200 mr-2" />
              Cheques
            </li>
            <li>
              <FaRegCheckCircle className="inline text-yellow-200 mr-2" />
              Debit cards
            </li>
            <li>
              <FaRegCheckCircle className="inline text-yellow-200 mr-2" />
              Credit cards
            </li>
            <li>
              <FaRegCheckCircle className="inline text-yellow-200 mr-2" />
              UPI
            </li>
          </ul>
        </div>
      </section>
      <div className="w-[90%] mx-auto text-[12px] text-center py-5  ">
        <p className="text-white ">
          &copy; 2023 FFC CAFE Jaipur. <br className="sm:hidden" /> All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
