import React from "react";
import "./Hero.css";
import { useState } from "react";
import countrydata from "../components/api/country.json";

export const About = () => {
  return (
    <>
      <section className="cards">
        {countrydata.map((item) => {
          const { id } = item; // Fixed: destructure from item, not countrydata
          return (
            <div className="card" key={id}>
              {/* <img src={item.img} alt={item.title} /> */}
              <h2>{item.country}</h2>
              <p>{item.capital}</p>
              <p>{item.region}</p>
              <h4>{item.big_city}</h4>
              <p>{item.native_languages}</p>
              <p>{item.population}</p>
              <button>see more</button>
            </div>
          );
        })}
      </section>
    </>
  );
};
