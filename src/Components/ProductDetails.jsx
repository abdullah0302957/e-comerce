import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const allProducts = JSON.parse(localStorage.getItem("products")) || [];

  const product = allProducts.find((p) => String(p.id) === id);

  if (!product) {
    return <p className="loading">Product not found</p>;
  }

  return (
    <div className="product-details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="product-details">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-description">
            {product.description || "High-quality product for your needs."}
          </p>

          <h2 className="product-price">
            Rs {product.price}
          </h2>

          {product.discount && (
            <p className="product-discount">{product.discount}% OFF</p>
          )}

          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
