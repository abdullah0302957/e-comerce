import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginpage.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const fixedEmail = "abdullah@gmail.com";
    const fixedPassword = "123456";

    if (email === fixedEmail && password === fixedPassword) {
      setError("");
      navigate("/"); // successful login
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="bg-container">
      <div className="page-container login-page">
        <div className="card-container">
          <h1>User Login</h1>

          <input
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button className="btn-login" onClick={handleLogin}>
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
