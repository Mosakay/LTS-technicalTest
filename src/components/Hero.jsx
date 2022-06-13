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
          <form action="">
            <div className="inputBox">
              <input type="text" placeholder="Location" />
            </div>
            <div className="inputBox">
              <input type="text" placeholder="Departure Airport" />
            </div>
            <div className="inputBox">
              <input type="text" placeholder="Arrival Airport" />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "46%",
                }}
                className="inputBox"
              >
                <input
                  type="text"
                  placeholder="Departure Date"
                  onChange={(e) => console.log(e.target.value)}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                />
              </div>
              <div
                style={{
                  width: "46%",
                }}
                className="inputBox"
              >
                <input
                  type="text"
                  placeholder="Arrival Date"
                  onChange={(e) => console.log(e.target.value)}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "46%",
                }}
                className="inputBox"
              >
                <input type="number" placeholder="Adult Passengers" />
              </div>
              <div
                style={{
                  width: "46%",
                }}
                className="inputBox"
              >
                <input type="number" placeholder="Child Passengers (0-16)" />
              </div>
            </div>
            <input type="submit" className="btn" value="Search" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
