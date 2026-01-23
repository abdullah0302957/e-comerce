import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; 

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email (example@gmail.com)");
      emailRef.current.focus();
      return;
    }

    setError("");

    alert("Signup successful ✅\nName: " + name + "\nEmail: " + email);

    // Clear form after submit
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="bg-container">
      <div className="page-container signup-page">
        <div className="card-container">
          <h1>User Signup</h1>
          <form onSubmit={handleSubmit}>
            <input
            className="input"
              placeholder="Full Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
            className="input"
              placeholder="Email"
              type="text"
              value={email}
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && <p style={{ color: "red" }}>{error}</p>}

            <input
            className="input"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="btn-login" type="submit">Signup</button>
          </form>

          <p className="signup-link" onClick={() => navigate("/login")}>Login</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
