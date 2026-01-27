import React from "react";
import { useNavigate } from "react-router-dom";
import { categoriesList } from "../data/categories.js";
import "./Categories.css";

export default function Categories() {
  const navigate = useNavigate();

  return (
    <div className="categories-container">
      {categoriesList.map((cat, index) => (
        <div
          className="category-card"
          key={index}
          onClick={() => navigate(`/category/${cat.name}`)}
          style={{ cursor: "pointer" }}
        >
          <img src={cat.img} alt={cat.name} />
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  );
}
