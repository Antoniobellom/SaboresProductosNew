import React, { useState } from "react";
import CardCarousel from "../carrusel/Carrusel";
import Productos from "../productos";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../footer/Footer";
import Lower from "../lower/Lower";
import Regiones from "../regiones";


const Body = () => {
  const cardData = [
    {
      image: "path/to/your/image1.jpg",
      title: "Card Title 1",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];
  return (
    <div>
        <Regiones/>
      <h1>brand</h1>
      <Productos />
      <div className="app">
        <h2>Te podría interesar también</h2>
        <CardCarousel cardData={cardData} />
        <Footer />
        <Lower />
      </div>
    </div>
  );
};

export default Body;
