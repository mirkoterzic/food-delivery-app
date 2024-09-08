import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadLineCards from "./components/HeadLineCards";
import Food from "./components/Food";
import Category from "./components/Category";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeadLineCards />
      <Food />
      <Category />
      <Footer />
    </>
  );
}

export default App;
