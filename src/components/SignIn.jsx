import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

export default function SignIn({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const navigate = useNavigate();

  function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUserJSON = localStorage.getItem("user");
    if (!storedUserJSON) {
      alert("No account found! Please sign up first.");
      return;
    }

    const storedUser = JSON.parse(storedUserJSON);

    if (captchaInput !== captcha) {
      alert("Incorrect Captcha!");
      refreshCaptcha();
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      alert("Login successful!");
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      navigate("/");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

          {/* Captcha display */}
          <div className="captcha-box">
            <span className="captcha-text">{captcha}</span>
            <button type="button" className="refresh-btn" onClick={refreshCaptcha}>↻</button>
          </div>

          <input
            type="text"
            placeholder="Enter Captcha"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
          />

          <button type="submit">Sign In</button>
        </form>

        <p>
          Don’t have an account?{" "}
          <Link to="/signup" className="link-btn">Create an account</Link>
        </p>
      </div>
    </div>
  );
}
