import React, { createContext } from "react";

const Context = createContext();
const MainContext = (props) => {
  const menu = [
    {
      id: 0,
      items: [
        {
          title: "Tea",
          img: "./img/tea-menu.webp",
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
            { name: "Hot Coffee", price: 20 },
            { name: "Cold Coffee", price: 30 },
            { name: "Cold Coffee with Ice-Cream", price: 40 },
          ],
        },
        {
          title: "Shakes",
          img: "./img/shake-menu.svg",
          dishes: [
            { name: "Strawberry Shake", price: 60 },
            { name: "Chocolate Shake", price: 60 },
            { name: "KitKat Shake", price: 90 },
            { name: "Mango Shake", price: 60 },
            { name: "Butter scotch Shake", price: 60 },
            { name: "Coldrink Shake", price: 40 },
          ],
        },
      ],
    },
    {
      id: 1,
      items: [
        {
          title: "Rolls",
          img: "./img/roll-menu.webp",
          dishes: [
            { name: "Veg. Roll", price: 40 },
            { name: "Spring Roll", price: 70 },
            { name: "Paneer Capsicum Roll", price: 70 },
            { name: "Cheese Roll", price: 60 },
          ],
        },
        {
          title: "Pizza",
          img: "./img/pizza-menu.svg",
          dishes: [
            { name: "OTC Pizza", price: 100 },
            { name: "Paneer Pizza", price: 140 },
            { name: "Cheese Pizza", price: 120 },
            { name: "Onion Capsicum Pizza", price: 120 },
            { name: "Mushroom Pizza", price: 160 },
            { name: "Corn Pizza", price: 140 },
            { name: "FFC Special Pizza", price: 180 },
          ],
        },
        {
          title: "Sandwich",
          img: "./img/sandwich-menu.webp",
          dishes: [
            { name: "Veg Sandwich", price: 40 },
            { name: "Veg Grilled Sandwich", price: 45 },
            { name: "Veg Cheese Grilled Sandwich", price: 50 },
            { name: "Onion Tomato Sandwich", price: 50 },
            { name: "Masala Sandwich", price: 40 },
          ],
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "Maggie",
          img: "./img/maggie-menu.webp",
          dishes: [
            { name: "Plain Maggie", price: 25 },
            { name: "Masala Maggie", price: 30 },
            { name: "Cheese Maggie", price: 35 },
          ],
        },
        {
          title: "Burger",
          img: "./img/burger-menu.webp",
          dishes: [
            { name: "Veg Burger", price: 30 },
            { name: "Cheese Burger", price: 35 },
          ],
        },
        {
          title: "Chinese",
          img: "./img/chinese-menu.webp",
          dishes: [
            { name: "Veg Chowmine", price: 45 },
            { name: "Hakka Noodles", price: 60 },
            { name: "Shezwan Noodles", price: 55 },
            { name: "Chilli Paneer Gravy", price: 90 },
          ],
        },
      ],
    },
  ];
  const FfcImages = [
    { id: 1, img: "./img/ffcimg1.webp" },
    { id: 2, img: "./img/ffcimg2.webp" },
    { id: 3, img: "./img/ffcimg4.webp" },
    { id: 4, img: "./img/ffcimg5.webp" },
    { id: 5, img: "./img/ffcimg6.webp" },
    { id: 6, img: "./img/ffcimg7.webp" },
    { id: 7, img: "./img/ffcimg3.webp" },
  ];
  return (
    <Context.Provider value={{ menu, FfcImages }}>
      {props.children}
    </Context.Provider>
  );
};

export default MainContext;
export { Context };
