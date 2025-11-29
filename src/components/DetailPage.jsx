import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./DetailPage.css";

export default function DetailPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <h2>No data found</h2>;

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>⬅ Back</button>

      <h2 className="detail-title">{state.title}</h2>

      <img src={state.image} alt={state.title} className="detail-image" />

      <p className="detail-text">{state.description}</p>
    </div>
  );
}
