import React from "react";
import Card from "../components/common/Card";
import "../styles.css";

// Import images explicitly
import HeroBanner from "../../public/assets/HeroBanner";
import BlueLock from "../../public/assets/BlueLock";
import SpyXFamily from "../../public/assets/SpyXFamily";
import Tshirt from "../../public/assets/tshirt.jpg";

function OtakuSpa() {
  return (
    <div>
      {/* Top Section: Hero Banner */}
      <section id="hero" className="hero-section">
        <div className="hero-container">
          <img src={HeroBanner} alt="Hero Banner" />
        </div>
      </section>

      {/* Middle Section: Filter and Product Cards */}
      <section id="products" className="middle-section">
        {/* Left: Filter */}
        <div className="left-filter">
          <h3>Filter Options</h3>
          <ul>
            <li>Category</li>
            <li>Price</li>
            <li>Color</li>
            <li>Size</li>
          </ul>
        </div>

        {/* Right: Product Cards */}
        <div className="right-products">
          <h2>Our Products</h2>
          <div className="card-grid">
            {/* Display 6 Product Cards */}
            {[...Array(6)].map((_, index) => (
              <Card
                key={index}
                image={Tshirt}
                title={`Product Title ${index + 1}`}
                description="Some description of the product."
                link="/details"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section: Best Sellers */}
      <section id="best-sellers" className="best-sellers">
        <h2>Best Sellers</h2>
        <div className="card-grid">
          {/* Best Sellers Cards */}
          <Card
            image={SpyXFamily}
            title="Spy X Family"
            description="Best Seller Product"
            link="/details"
          />
          <Card
            image={BlueLock}
            title="Blue Lock"
            description="Best Seller Product"
            link="/details"
          />
        </div>
      </section>
    </div>
  );
}

export default OtakuSpa;
