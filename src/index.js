import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

// Main Application Component
function App() {
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

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-container">
          <img src="./assets/HeroBanner.jpg" alt="Hero Banner" />
        </div>
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

// Render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
