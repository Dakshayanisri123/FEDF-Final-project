import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ onLogout }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
    navigate("/signin");
    setMenuOpen(false);
  };

  return (
    <header className="nav-wrap">
      <div className="nav-left">
        <h1 className="site-title">
          Indian Constitution Portal <span className="in">IN</span>
        </h1>
      </div>

      {/* Desktop menu */}
      <nav className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/rights">Rights</Link>
        <Link to="/quiz">Quiz</Link>
      </nav>

      {/* Logout (Desktop) */}
      <div className="nav-right">
        <button className="btn-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Hamburger Button (Mobile) */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/articles" onClick={() => setMenuOpen(false)}>Articles</Link>
          <Link to="/rights" onClick={() => setMenuOpen(false)}>Rights</Link>
          <Link to="/quiz" onClick={() => setMenuOpen(false)}>Quiz</Link>

          <button className="btn-logout mobile-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
