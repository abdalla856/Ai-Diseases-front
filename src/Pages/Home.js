import React from "react";
import Gradient from "../components/gradient/Gradient";
import Hero from "../components/hero/Hero";
import Nav from "../components/nav/Nav";
import Using from "../components/using/Using";
import WhyAi from "../components/Why Ai/WhyAi";

const Home = () => {
  return (
    <div style={{ background: "black" }}>
      <Nav />
      <Hero />
      <Using />
      <WhyAi />
      <Gradient />
    </div>
  );
};

export default Home;
