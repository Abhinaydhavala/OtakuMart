import React from "react";
import Card from "./common/Card";

function BottomSection() {
  const bestSellers = [
    { id: 1, title: "Spy X Family", price: "30" },
    { id: 2, title: "Blue Lock", price: "35" },
  ];

  return (
    <div id="bottom" style={{ padding: "20px" }}>
      <h2>Best Sellers</h2>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {bestSellers.map((item) => (
          <Card key={item.id} title={item.title} price={item.price} />
        ))}
      </div>
    </div>
  );
}

export default BottomSection;
