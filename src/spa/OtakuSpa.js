import React from "react";
import "../spa/style.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function OtakuMart() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>OtakuMart</h1>
        <nav>
          <a href="#hero">Home</a>
          <a href="#products">Products</a>
          <a href="#best-sellers">Best Sellers</a>
        </nav>
      </header>
      {/* Hero Section with Carousel */}
      <section id="hero" className="hero-section">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="./assets/HeroBanner.jpg"
              alt="First Slide"
            />
            <Carousel.Caption>
              <h3>Welcome to OtakuMart</h3>
              <p>Your one-stop shop for anime merchandise!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="./assets/SpyXFamily.jpg"
              alt="Second Slide"
            />
            <Carousel.Caption>
              <h3>Spy X Family Collection</h3>
              <p>Exclusive products for Spy X Family fans!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="./assets/LuffyCarousel.jpg"
              alt="Third Slide"
            />
            <Carousel.Caption>
              <h3>OnePiece Arrivals</h3>
              <p>Discover the latest Luffy Gear 5 collection.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      {/* Middle Section */}
      <section id="products" className="middle-section">
        <div className="left-filter">
          <h3>Filter Options</h3>
          <ul>
            <li>Category</li>
            <li>Price</li>
            <li>Color</li>
            <li>Size</li>
          </ul>
        </div>
        <div className="right-products">
          <h2>Our Products</h2>
          <div className="card-grid">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="card">
                <img src="./assets/tshirt.jpg" alt="Product" />
                <h4>Product Title {index + 1}</h4>
                <p>Some description of the product.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Best Sellers Section */}
      <section id="best-sellers" className="best-sellers">
        <h2>Best Sellers</h2>
        <div className="card-grid">
          <div className="card clickable-card">
            <img src="./assets/SpyXFamily.jpg" alt="Spy X Family" />
            <p>Spy X Family</p>
          </div>
          <div className="card clickable-card">
            <img src="./assets/BlueLock.jpeg" alt="Blue Lock" />
            <p>Blue Lock</p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
        <p>© 2024 OtakuMart. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default OtakuMart;
