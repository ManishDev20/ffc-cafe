import React from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Findus = () => {
  const userImages = [
    {
      id: 0,
      name: "Findus",
      img: "./img/user-1.webp",
      review:
        "What to say,good location, good coffee, good music... Perfect place to have a coffee, read books, or simply chat with buddys",
    },
    {
      id: 1,
      name: "Ammu",
      img: "./img/user-2.webp",
      review:
        "This is a great cafe serving good cappuccino with a great brunch menu",
    },
    {
      id: 2,
      name: "Ashley",
      img: "./img/user-3.webp",
      review:
        "I would like to suggest everybody to visit whether come with family or friends",
    },
    {
      id: 3,
      name: "Sarah",
      img: "./img/user-4.webp",
      review:
        "Taste of everything is good. But never order anything which is preferred by cafe staff",
    },
    {
      id: 4,
      name: "Lisa",
      img: "./img/user-5.webp",
      review:
        " Penne pasta is a must try. Environment is very good. A must place to visit",
    },
  ];
  const [current, setCurrent] = React.useState(0);
  const length = userImages.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div
      id="findus"
      className="h-screen max-[1025px]:h-[max-content] border-2 lg:pt-12"
    >
      <h1 className="text-2xl p-10 font-semibold text-center lg:text-left sm:text-3xl md:text-5xl">
        You can find us here!
      </h1>
      <section className="w-full min-[1025px]:grid lg:grid-cols-2 ">
        <div className="map sm:col-span-1 flex items-center justify-center px-5 ">
          <iframe
            title="FFC G Map"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] shadow-lg"
            src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Jaisinghpura%20Rd,%20Bhakrota,%20Bhankrota,%20Rajasthan%20302026+(Friends%20&amp;%20Family%20Cafe)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps trackers</a>
          </iframe>
        </div>
        <div className="review sm:col-span-1 flex items-center">
          <div className="relative w-[100%] md:w-[90%] lg:w-[70%] h-[300px] sm:h-[400px] md:h-[450px]  flex items-center  mx-auto overflow-hidden p-4 ">
            <div
              className="w-full  flex transition-transform duration-700 ease-in-out "
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {userImages.map((user, index) => (
                <div
                  key={index}
                  className="min-w-full h-[250px] sm:h-[300px] md:h-[350px] relative flex justify-center  p-2"
                >
                  <div className="w-[90%] md:w-[80%] h-[200px] sm:h-[250px] md:h-[300px]  bg-[#111827] text-white shadow-md shadow-yellow-300  border-2 border-yellow-500 rounded-2xl relative p-5 ">
                    <p className="text-sm sm:text-md md:text-lg lg:text-xl text-center absolute top-5 left-0 px-2">
                      " {user.review} "
                    </p>
                    <div className="flex items-center justify-center gap-5 absolute bottom-5">
                      <img
                        src={user.img}
                        alt=""
                        className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 rounded-full"
                      />{" "}
                      <span className="text-sm sm:text-md md:text-lg lg:text-xl text-[yellow] font-semibold">
                        | {user.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="absolute top-1/2 left-3 sm:left-4 transform -translate-y-1/2 bg-[#000000ab] text-white rounded-full p-1 sm:p-2 text-[10px] sm:text-[14px]"
              onClick={prevSlide}
            >
              <FaArrowLeft />
            </button>
            <button
              className="absolute top-1/2 right-3 sm:right-4 transform -translate-y-1/2 bg-[#000000ab] text-white rounded-full p-1 sm:p-2 text-[10px] sm:text-[14px]"
              onClick={nextSlide}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Findus;
