import React from "react";
import { useNavigate } from "react-router-dom";
import "./loginpage.css";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="bg-container">
      <div className="page-container login-page">
        <div className="card-container">
          <h1>User Login</h1>
          <input className="input" placeholder="Email" />
          <input className="input" placeholder="Password" />
          <button className="btn-login" onClick={() => navigate("/")}>
            Login
          </button>
          <p className="signup-link" onClick={() => navigate("/signup")}>
            Signup
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
