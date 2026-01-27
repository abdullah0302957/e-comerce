import { useNavigate } from "react-router-dom";
import "./ProductCard.css"; // Your existing CSS stays

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/product/${product.id}`)}>
      {product.reviews && <div className="reviews">{product.reviews}</div>}

      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>

      <h4>{product.name}</h4>
      <p className="price">
        Rs <span className="price-value">{product.price}</span>
      </p>

      <div className="badges">
        {product.discount && <span className="discount">{product.discount}% OFF</span>}
        <span className="fast-delivery">Fast Delivery</span>
      </div>
    </div>
  );
}
