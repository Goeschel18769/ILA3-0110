import React from "react";
import "./styles/Home.css";

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <p>Willkommen, mein Name ist</p>
        <h1> Joël Haldimann</h1>
        <p>
          Angehender Informatiker mit Leidenschaft für Code und kreative
          Lösungen.
        </p>
      </header>

      <section className="profile">
        <img
          src="./img/Portrait2.jpg"
          alt="Picture of Joël Haldimann"
          className="profile-img"
        />
      </section>
    </div>
  );
};

export default Home;
