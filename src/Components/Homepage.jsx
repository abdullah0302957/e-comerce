import React from "react";
import Categories from "./Categories.jsx";

import ImageSlider from "./ImageSlider.jsx";
import ProductCarousel from "./ProductCarousel.jsx";
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"


const Homepage = () => {


  return (
    <>
      <Navbar />
      <Categories />
      <ImageSlider />
      <ProductCarousel /> 
      <Footer/>
    </>
  );
};

export default Homepage;
