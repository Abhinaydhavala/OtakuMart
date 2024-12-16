import React from "react";
import FilterList from "./FilterList";
import CardGrid from "./CardGrid";

function Store() {
  return (
    <div
      className="middle-section"
      style={{ display: "flex", gap: "20px", padding: "20px" }}
    >
      {/* Left Side: Filter List */}
      <div
        style={{
          flex: "1",
          border: "1px solid #ddd",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <FilterList />
      </div>

      {/* Right Side: Card Grid */}
      <div style={{ flex: "3" }}>
        <CardGrid />
      </div>
    </div>
  );
}

export default Store;
