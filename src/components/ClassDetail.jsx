import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ClassDetail.css";

export default function ClassDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <h2>No class found</h2>;

  return (
    <div className="class-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>⬅ Back</button>
      <h2>{state.title}</h2>
      <p className="desc">{state.desc}</p>

      <iframe
        width="900"
        height="450"
        src={state.video}
        title="YouTube Class"
        allowFullScreen
        className="video-frame"
      ></iframe>
    </div>
  );
}
