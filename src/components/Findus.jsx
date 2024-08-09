import React from "react";

import Slider from "react-slick";
const Findus = () => {
  const userImages = [
    {
      id: 0,
      name: "Prem",
      img: "./img/user-1.webp",
      review:
        "What to say,good location, good coffee, good music... Perfect place to have a coffee, read books, or simply chat with buddys",
    },
    {
      id: 1,
      name: "Pooja",
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
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div id="findus" className="h-screen max-[1025px]:h-[max-content] lg:pt-12">
      <h1 className="text-2xl p-10 font-semibold text-center lg:text-left sm:text-3xl md:text-5xl">
        You can find us here!
      </h1>
      <section className="w-full min-[1025px]:grid grid-cols-5 ">
        <div className="map col-span-3 flex items-center justify-center px-5 ">
          <iframe
            title="FFC G Map"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] shadow-lg"
            src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Jaisinghpura%20Rd,%20Bhakrota,%20Bhankrota,%20Rajasthan%20302026+(Friends%20&amp;%20Family%20Cafe)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps trackers</a>
          </iframe>
        </div>
        <div className="review col-span-2">
          <div className=" flex items-center w-[80%] md:w-[60%] lg:w-[70%] h-[300px] sm:h-[400px] md:h-[450px]   mx-auto overflow-hidden p-4 ">
            <Slider {...settings} className="w-full mx-auto shadow-lg p-2 ">
              {userImages.map((user, index) => (
                <>
                  <div key={index} className="flex items-center gap-4 ">
                    <img
                      alt=""
                      src={user.img}
                      className="size-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <p className="mt-0.5 text-lg font-medium text-[#2c80ff]">
                        {user.name}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700 px-2">{user.review}</p>
                </>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Findus;
