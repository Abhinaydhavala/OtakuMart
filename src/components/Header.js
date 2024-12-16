import React from "react";

function Header() {
  return (
    <nav className="navbar">
      <h1>OtakuMart</h1>
      <div className="links">
        <a href="#hero">Home</a>
        <a href="#middle">Products</a>
        <a href="#bottom">Best Sellers</a>
      </div>
    </nav>
  );
}

export default Header;
