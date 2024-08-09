import React, { useContext } from "react";
import { Context } from "../Context/MainContext";

const OurMenu = () => {
  const { menu } = useContext(Context);
  if (!menu) {
    return <div className="h-80">We Are Loading Our Menu...</div>;
  }

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <section
        id="ourMenu"
        className="w-full max-h-max py-2 px-10 pb-16 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 "
      >
        {menu.map((menuItem, index) => (
          <div
            key={index}
            className={`menu1 ${
              menuItem.id === 2
                ? "hidden sm:block col-span-1 md:col-span-2 lg:col-span-1"
                : ""
            }  p-2 `}
          >
            {menuItem.id === 0 ? (
              <div className="w-full ">
                <h1 className="text-5xl lg:text-6xl pt-5 text-white font-bold italic">
                  EXPLORE OUR MENU
                </h1>
              </div>
            ) : (
              ""
            )}
            {menuItem.items.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between mt-10 px-2 p-1 text-white border-b-2 border-black">
                  <h1 className="text-2xl font-bold italic">{item.title}</h1>
                  <img
                    src={item.img}
                    alt="menuImage"
                    className="w-9 h-9 rotate-12"
                  />
                </div>
                {item.dishes.map((dish, i) => {
                  return (
                    <ul
                      key={i}
                      className="px-3 mt-5 text-md sm:text-xl flex flex-col gap-2"
                    >
                      <li className="flex justify-between gap-4 hover:text-white hover:cursor-pointer">
                        <span>{dish.name}</span>
                        <span>{dish.price}rs</span>
                      </li>
                    </ul>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default OurMenu;
