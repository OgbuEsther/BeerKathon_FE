import React from "react";

import Accept from "./Card/Accept";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Hello from "./HowItWorks/Hello";
import LastCard from "./LastCard/LastCard"
import About from "./About/About";
import GetStarted from "./Header/GetStarted";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";


const HomeSreeen = () => {
  return (
    <div>
      <Header />
      <Hero />

      <Hello />
      <Accept />
      <LastCard />

      <GetStarted />
      <About />

    </div>
  );
};

export default HomeSreeen;
