import React from "react";
import heroImg from "../assets/picnic-hero.jpeg";
import Button from "./Button";
import "../style/hero.css";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-container">
          <h1 className="hero-title">We love to Picnic.</h1>
          <Button className="hero-btn" />
        </div>
        <div className="hero-img-container">
          <img className="hero-img" src={heroImg} alt="picnic_picture" />
        </div>
      </div>
    </>
  );
}

export default Hero;
