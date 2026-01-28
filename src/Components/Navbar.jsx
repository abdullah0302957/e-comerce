import { useState } from "react";
import "./Navbar.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Mobiles", sub: ["Samsung", "iPhone", "Xiaomi"] },
  { name: "Smart Watches", sub: ["Apple Watch", "Fitbit", "Huawei"] },
  { name: "Wireless Earbuds", sub: ["AirPods", "Galaxy Buds", "Realme Buds"] },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
   
      <nav className="navbar">
        <div className="nav-left">
          <button className="menu-btn" onClick={() => setMenuOpen(true)}>
            ☰
          </button>
          <a href="/" className="logo">
            OZ-Tech
          </a>
          <img
            src="/src/assets/find_4835655.jpeg"
            className="mobile-search-icon"
            onClick={() => setShowSearch(!showSearch)}
          />
        </div>

        <div className={`nav-center ${showSearch ? "show-search" : ""}`}>
          <form>
            <input type="text" placeholder="Search..." />
          </form>
        </div>

        <div className="nav-right">
          <button className="login" onClick={() => navigate("/login")}>
            Log in
          </button>
          <button className="register" onClick={() => navigate("/signup")}>
            Register
          </button>
        </div>
      </nav>

     
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}

      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="Header">
          <div className="sidebar-header">
            <button className="close-btn" onClick={() => setMenuOpen(false)}>
              X
            </button>
          </div>

          <a href="/" className="sidebar-logo">
            OZ-Tech
          </a>

          <a href="/track-order" className="sidebar-link">
            📍 Track my Order
          </a>
          <a href="/complaint" className="sidebar-link">
            📝 Launch a Complaint
          </a>

          <button className="sidebar-login" onClick={() => navigate("/manage-products")} >Admin Panel</button>
        </div>
        <div className="sidebar-categories">
          {categories.map((cat, index) => (
            <div key={index} className="category-item">
              <button
                className="category-toggle"
                data-bs-toggle="collapse"
                data-bs-target={`#cat-${index}`}
                aria-expanded="false"
                aria-controls={`cat-${index}`}
              >
                {cat.name} ▼
              </button>
              <div id={`cat-${index}`} className="collapse subcategory-list">
                {cat.sub.map((subItem, subIndex) => (
                  <div key={subIndex} className="subcategory-item">
                    {subItem}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
