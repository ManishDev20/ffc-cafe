import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section id="aboutus" className="py-10  px-2 ">
        <div className="w-full lg:flex justify-between">
          <div className="lg:w-[50%]  sm:pl-5">
            <h2
              id="about"
              className="max-w-max mx-auto sm:mx-0  my-5  py-4 px-5 rounded-[30%] text-3xl sm:text-3xl md:text-4xl text-center sm:text-left bg-[#dce7f5] text-[#4c1ef5]"
            >
              About Us
            </h2>
            <h1
              id="ffc_text"
              className="md:w-[70%] text-5xl md:text-5xl  text-center  sm:text-left text-[#7b5820]  font-bold mt-10 sm:mt-0 "
            >
              Friends & Family Cafe
            </h1>
            <img
              src="./img/ffcimg4.webp"
              alt=""
              className="w-full h-[500px] mx-auto sm:mx-0  rounded-2xl mt-5 lg:hidden"
            />
            <p className="text-justify my-10 md:my-16 text-xl px-3 md:px-2">
              At Friends & Family cafe, we believe that great moments in life
              are best accompanied by delectable food, aromatic coffee, and warm
              hospitality. Nestled in the heart of Jaipur, our cozy cafe is a
              haven for food anthusiasts and coffee connoisseurs alike.
              <br /> <br /> The scallops were perfectly cooked, tender, and
              flavorful, paired beautifully with a creamy risotto and seasonal
              vegetables. The presentation was artful, showcasing the chef's
              attention to detail.
            </p>
          </div>
          <div className="lg:w-[50%]  ">
            <img
              src="./img/ffcimg4.webp"
              alt=""
              className="mx-auto rounded-2xl hidden lg:block"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
