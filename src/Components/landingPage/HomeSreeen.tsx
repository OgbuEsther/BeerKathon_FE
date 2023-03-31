import React from "react";
import Accept from "./Card/Accept";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Hello from "./HowItWorks/Hello";
import LastCard from "./LastCard/LastCard";

const HomeSreeen = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Hello />
      <Accept />
      <LastCard />
    </div>
  );
};

export default HomeSreeen;
