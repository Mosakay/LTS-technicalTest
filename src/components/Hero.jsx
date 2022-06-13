import React from "react";
import "./Hero.scss";
import { images } from "../constants";

const Hero = () => {
  return (
    <div id="hero">
      <div className="background">
        <img src={images.heroBannerImage} alt="" />
      </div>
      <div className="widget">
        <div className="search">
          <div className="container">
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Departure Airport" />
            <input type="text" placeholder="Arrival Airport" />
          </div>
          <div className="container-row">
          <div className="container">
            <input type="date" placeholder="Departure Date" />
            <input type="number" placeholder="Adult Passengers" />
          </div>
          <div className="container">
            <input type="date" placeholder="Departure Date" />
            <input type="number" placeholder="Child Passengers (0-16)" />
          </div>
          </div>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
