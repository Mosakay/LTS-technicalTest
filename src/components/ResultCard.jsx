import React, { useState, useEffect } from "react";
import "./ResultCard.scss";
import { images } from "../constants";


const ResultCard = ({data, filteredData, wordEntered}) => {


console.log("resultCardData", filteredData);

  return (
    <div id="results">
      <div className="results-content">
        <h1 className="title">Welcome! / Search Results</h1>
       
        <div className="cards">
          {data.data?.filter((val) => {
            if  (wordEntered == "") {
                return val;
            } else if (val.name.toLowerCase().includes(wordEntered.toLowerCase())) {
                return val;
            }
          }).map((hotel, index) => (
            <div className="card">
              <p
                style={{
                  paddingLeft: "10px",
                  paddingBottom: "10px",
                }}
              >
                {hotel.name}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={images.searchResultsImage}
                  alt=""
                />
                <div>
                  <p
                    style={{
                      fontWeight: "bold",
                      padding: "15px",
                    }}
                  >
                    Only £{hotel.price.value}
                    {hotel.price.unit}
                  </p>
                  <p
                    style={{
                      padding: "15px",
                      marginTop: "10px",
                    }}
                  >
                    {hotel.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ResultCard;
