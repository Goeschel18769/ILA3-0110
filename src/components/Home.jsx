import React from "react";
import "./styles/Home.css";

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <p>Willkommen, mein Name ist</p>
        <h1> Joël Haldimann</h1>
      </header>

      <section className="profile">
        <img
          src="./img/Portrait2.jpg"
          alt="Picture of Joël Haldimann"
          className="profile-img"
        />
        <p className="description">
          Jeder Sieg in Fortnite ist nur ein kurzer Augenblick des Glanzes, aber
          die Niederlagen bleiben oft länger und prägen uns tiefer.
        </p>
      </section>
    </div>
  );
};

export default Home;
