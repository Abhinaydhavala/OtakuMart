import React from "react";
import Card from "./common/Card";

function CardGrid() {
  const products = [
    { id: 1, title: "T-Shirt", price: "20" },
    { id: 2, title: "Hoodie", price: "50" },
    { id: 3, title: "Joggers", price: "40" },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
      }}
    >
      {products.map((product) => (
        <Card key={product.id} title={product.title} price={product.price} />
      ))}
    </div>
  );
}

export default CardGrid;
