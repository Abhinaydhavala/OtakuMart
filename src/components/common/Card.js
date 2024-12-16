import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ image, title, description, link }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(link)} className="card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Card;
