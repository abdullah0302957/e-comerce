import { useState, useRef } from "react";
import "./ManageProducts.css";
import { useNavigate } from "react-router-dom";

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

export default function ManageProducts() {
  const [products, setProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("products")) || [];
  });

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [discount, setDiscount] = useState("");
  const [reviews, setReviews] = useState("");
  const [category, setCategory] = useState("");
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();
  const formRef = useRef(null);

  const saveProducts = (updater) => {
    setProducts((prev) => {
      const updated = typeof updater === "function" ? updater(prev) : updater;
      localStorage.setItem("products", JSON.stringify(updated));
      return updated;
    });
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const submitHandler = async () => {
    if (!name || !price || !category) {
      alert("Fill all required fields");
      return;
    }

    let imageBase64 = "";
    if (imageFile) {
      imageBase64 = await toBase64(imageFile);
    }

    if (editId !== null) {
      saveProducts((prev) =>
        prev.map((p) =>
          p.id === editId
            ? {
                ...p,
                name,
                price,
                image: imageBase64 || p.image,
                discount,
                reviews,
                category,
              }
            : p
        )
      );
      setEditId(null);
    } else {
      saveProducts((prev) => [
        ...prev,
        {
          id: Date.now(),
          name,
          price,
          image: imageBase64,
          discount,
          reviews,
          category,
          isBestSeller: false, // ✅ default false
        },
      ]);
    }

    setName("");
    setPrice("");
    setImageFile(null);
    setDiscount("");
    setReviews("");
    setCategory("");
    setShowForm(false);
  };

  const editHandler = (p) => {
    setName(p.name);
    setPrice(p.price);
    setDiscount(p.discount);
    setReviews(p.reviews);
    setCategory(p.category);
    setEditId(p.id);
    setShowForm(true);

    setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const deleteHandler = (id) => {
    saveProducts((prev) => prev.filter((p) => p.id !== id));
  };

  // ✅ DIRECT TOGGLE FROM LIST
  const toggleBestSeller = (id) => {
    saveProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, isBestSeller: !p.isBestSeller } : p
      )
    );
  };

  return (
    <div className="manage">
      <button className="animated-btn" onClick={() => navigate("/")}>Go to Home page</button>
    
      <h2 className="heading">Manage Products</h2>

      <button
       className="animated-btn"
        onClick={() => {
          setShowForm(true);
          setTimeout(() => {
            formRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }}
      >
        Add Product
      </button>

      {showForm && (
        <div className="form" ref={formRef}>
          <input
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
          />

          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            {categoriesList.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <input
            placeholder="Discount (%)"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />

          <input
            placeholder="Reviews"
            value={reviews}
            onChange={(e) => setReviews(e.target.value)}
          />

          <button  className="save-btn" onClick={submitHandler}>
            {editId !== null ? "Update" : "Save"}
          </button>

          <button
            className="save-btn"
            onClick={() => {
              setShowForm(false);
              setEditId(null);
              setName("");
              setPrice("");
              setImageFile(null);
              setDiscount("");
              setReviews("");
              setCategory("");
            }}
          >
            Cancel
          </button>
        </div>
      )}

      {/* 🔥 PRODUCT LIST WITH CHECKBOX */}
      <div className="list">
        {products.map((p) => (
          <div key={p.id} className="row">
            <input
              type="checkbox"
              checked={p.isBestSeller || false}
              onChange={() => toggleBestSeller(p.id)}
              title="Show as Best Seller"
            />

            <span>
              {p.name} - {p.price} ({p.category})
            </span>

            {p.image && (
              <img
                src={p.image}
                alt={p.name}
                style={{ width: "50px", height: "50px" }}
              />
            )}

            <div style={{ display: "flex", gap: "10px" }}>
              <button className="btn-best" onClick={() => editHandler(p)}>
                Edit
              </button>
              <button
                className="btn-best"
                onClick={() => deleteHandler(p.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
