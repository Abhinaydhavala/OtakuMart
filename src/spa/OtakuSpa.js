import React from "react";
import "../spa/style.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterList from "../components/FilterList";
import { OtakuMartContent } from "../content/DynamicContent"; // Import dynamic content

function OtakuMart() {
  const { heroCarousel, products, bestSellers, footer } = OtakuMartContent;

  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <Carousel>
          {heroCarousel.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 carousel-image"
                src={item.image}
                alt={`Slide ${index + 1}`}
              />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Middle Section */}
      <section id="products" className="middle-section">
        <div className="left-filter">
          <FilterList />
        </div>
        <div className="right-products">
          <h2>{products.heading}</h2>
          <div className="card-grid">
            {products.items.map((product, index) => (
              <div key={index} className="card">
                <img src={product.image} alt={`Product ${index + 1}`} />
                <h4>
                  {product.title} {index + 1}
                </h4>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section id="best-sellers" className="best-sellers">
        <h2>{bestSellers.heading}</h2>
        <div className="card-grid">
          {bestSellers.items.map((item, index) => (
            <div key={index} className="card clickable-card">
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>{footer.text}</p>
      </footer>
    </div>
  );
}

export default OtakuMart;
