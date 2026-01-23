import React from "react";
import { categoriesList } from "../data/categories.js";
import "./Categories.css";

export default function Categories() {
  return (
    <div className="categories-container">
      {categoriesList.map((cat, index) => (
        <div className="category-card" key={index}>
          <img src={cat.img} alt={cat.name} />
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  );
}
