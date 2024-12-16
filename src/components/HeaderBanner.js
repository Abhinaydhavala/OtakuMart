import React from "react";
import HeroBanner from "../assets/HeroBanner.jpg";

function HeroSection() {
  return (
    <div
      className="hero-section"
      style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
    >
      <div style={{ width: "90%", maxWidth: "1200px" }}>
        <img src={HeroBanner} alt="Hero Banner" />
      </div>
    </div>
  );
}

export default HeroSection;
