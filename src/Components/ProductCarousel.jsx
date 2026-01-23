import { useRef, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductCarousel.css";

const categoriesList = [
  "Mobiles",
  "Wireless Earbuds",
  "Smart Watches",
  "Trimmers Shaver",
  "Power Banks",
  "Wall Chargers",
  "Bluetooth Speakers",
  "Tablets",
];

// 🔹 Category gradients only
const categoryColors = {
  "Mobiles": "linear-gradient(160deg, #3a57c6, #b5c4e0)",            
  "Wireless Earbuds": "linear-gradient(160deg, #2b5cb7, #799ded)",  
  "Smart Watches": "linear-gradient(160deg, #4b36c9, #7e6ae0)",     
  "Trimmers Shaver": "linear-gradient(160deg, #6a4dc9, #a384eb)",  
  "Power Banks": "linear-gradient(160deg, #2563a8, #699ce2)",       
  "Wall Chargers": "linear-gradient(160deg, #3e2a8f, #7562b9)",     
  "Bluetooth Speakers": "linear-gradient(160deg, #23748f, #5d9fbd)",
  "Tablets": "linear-gradient(160deg, #4b3170, #8c67a8)",           
};

export default function ProductCarousel() {
  const allProducts = JSON.parse(localStorage.getItem("products")) || [];

  // 🔥 BEST SELLER PRODUCTS
  const bestSellers = allProducts.filter((p) => p.isBestSeller);

  return (
    <div>
      {/* 🔥 BEST SELLER SECTION */}
      {bestSellers.length > 0 && (
        <div className="carousel" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="h1">
            <h2>Best Seller</h2>
          </div>

          <div className="grid">
            <div className="grid-inner">
              {bestSellers.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 🟡 SINGLE BANNER */}
      <div className="single-banner">
        <img src="img2.webp" alt="Promotion Banner" />
      </div>

      {/* 🔹 CATEGORY WISE PRODUCTS */}
      {categoriesList.map((cat) => {
        const categoryProducts = allProducts.filter(
          (p) => p.category === cat && !p.isBestSeller
        );

        if (categoryProducts.length === 0) return null;

        return (
          <CategorySlider
            key={cat}
            category={cat}
            products={categoryProducts}
            bgColor={categoryColors[cat]} // ✅ gradient applied
          />
        );
      })}
    </div>
  );
}

function CategorySlider({ category, products, bgColor }) {
  const sliderRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    const el = sliderRef.current;
    if (el) {
      setShowArrows(el.scrollWidth > el.clientWidth);
    }
  }, [products]);

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 300;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += 300;
  };

  return (
    <div className="carousel" style={{ background: bgColor }}>
      <div className="h1">
        <h2>{category}</h2>
        <button className="btn-best">View All</button>
      </div>

      {showArrows && (
        <button className="arrow left" onClick={slideLeft}>
          ❮
        </button>
      )}

      <div className="grid" ref={sliderRef}>
        <div className="grid-inner">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      {showArrows && (
        <button className="arrow right" onClick={slideRight}>
          ❯
        </button>
      )}
    </div>
  );
}
