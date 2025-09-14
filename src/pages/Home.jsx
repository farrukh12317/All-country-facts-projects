import React from "react";

import './Hero.css'
const Home =()=> {

     const data = [
    { title: "Pakistan", fact: "Home to the world’s second-highest mountain, K2.", img: "https://flagcdn.com/w320/pk.png" },
    { title: "Japan", fact: "Known as the Land of the Rising Sun.", img: "https://flagcdn.com/w320/jp.png" },
    { title: "Brazil", fact: "The Amazon rainforest covers much of its land.", img: "https://flagcdn.com/w320/br.png" },
  ];
  return (
    <>
    <section className="hero">
      <div className="hero-content">
        <h1>Discover <span>World Facts</span></h1>
        <p>
          Explore countries around the globe, learn amazing facts, and expand your knowledge about cultures, people, and geography.
        </p>
        <button className="btn">Get Started</button>
      </div>
      <div className="hero-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg" alt="World" />
      </div>
    </section>

     <section className="cards">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.img} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.fact}</p>
        </div>
      ))}
    </section>
    </>

  );
}


export default Home;