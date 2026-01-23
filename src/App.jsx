import { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/loginpage";
import Signup from "./Components/signuppage";
import Homepage from "./Components/Homepage";
import "./App.css";
import ManageProducts from "./Components/ManageProducts.jsx";
import Loader from "./Components/Loader.jsx"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
        {loading ? (
        <Loader /> 
      ) : (
      
    
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/manage-products" element={<ManageProducts />} />
        </Routes>
      </Router>
        )}
    </>
  );
}

export default App;
