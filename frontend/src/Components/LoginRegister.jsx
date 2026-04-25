import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style/LoginRegister.css";
import { useContext } from "react";
import { AttendEaseContext } from "../Context/AttendEaseContext";

function LoginRegister() {
  const { object } = useContext(AttendEaseContext);
  // const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      object.handleLogin(formData);
    } else {
      object.handleRegister(formData);
    }
  };

  return (
    <div
      className="auth-container"
      style={{
        backgroundImage:
          "url('/HeroImg.webp')",
      }}
    >
      <div className="auth-overlay"></div>

      <div className="auth-card">
        <div>
          {isLogin && <h1>Login</h1>}
          {!isLogin && <h1>Register</h1>}
        </div>
        {/* Form */}
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            {/* Show Name only when Register */}
            {!isLogin && (
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleChange(e)}
                  placeholder=" "
                  required
                  className="input-field"
                />
                <label className="input-label">Name</label>
              </div>
            )}

            <div className="input-group">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
                placeholder=" "
                required
                className="input-field"
              />
              <label className="input-label">Email</label>
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={(e) => handleChange(e)}
                placeholder=" "
                required
                className="input-field"
              />
              <label className="input-label">Password</label>
            </div>

            <div className="form-footer">
              <p>
                I have already an account
                {isLogin ? (
                  <button onClick={() => setIsLogin(!isLogin)}>Register</button>
                ) : (
                  <button onClick={() => setIsLogin(!isLogin)}>Login</button>
                )}
              </p>
            </div>

            <button type="submit" className="auth-btn">
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
