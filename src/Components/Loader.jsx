import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="loader-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h2 className="loader-text">Loading...</h2>
    </div>
  );
}
