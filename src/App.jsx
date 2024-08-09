import React from "react";
import Hero from "./components/Hero";
import BestSeller from "./components/BestSeller";
import OurMenu from "./components/OurMenu";
import AboutUs from "./components/AboutUs";
import Findus from "./components/Findus";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import FfcVibe from "./components/FfcVibe";
const App = () => {
  return (
    <div className="h-screen overflow-y-scroll relative">
      <Navbar />
      <Hero />
      <BestSeller />
      <OurMenu />
      <AboutUs />
      <FfcVibe />
      <Findus />
      <Footer />
    </div>
  );
};

export default App;
