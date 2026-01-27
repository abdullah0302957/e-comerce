import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import "./ProductCarousel.css"; // same grid styles reuse
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"

export default function CategoryPage() {
  const { categoryName } = useParams();

  const allProducts = JSON.parse(localStorage.getItem("products")) || [];

  const products = allProducts.filter(
    (p) => p.category === categoryName
  );


  return (

    <>
<Navbar />
<div className="category-page">

   <h2>{categoryName}</h2>

  <div className="category-grid">
    {products.map((p) => (
      <ProductCard key={p.id} product={p} />
    ))}
  </div>
</div>

<Footer/>
</>

  );
}
