import { useState } from "react";
import "./ImageSlider.css";

function ImageSlider() {
  const images = [
    "img1.webp",
    "img2.webp",
    "img3.webp",
    "img4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">

      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>

      <img
        src={images[currentIndex]}
        alt="slider"
        className="slider-image"
      />
      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
}

export default ImageSlider;