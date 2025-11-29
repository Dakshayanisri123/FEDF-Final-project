import React from "react";
import "./Classes.css";
import { useNavigate } from "react-router-dom";

export default function Classes() {
  const navigate = useNavigate();

  const openClass = (cls) => {
    navigate("/class-detail", { state: cls });
  };

  const classList = [
    {
      id: 1,
      title: "Article 14 – Equality Before Law",
      desc: "Explaining equality and rule of law.",
      video: "https://www.youtube.com/embed/YEAoixRez_Q"
    },
    {
      id: 2,
      title: "Article 21 – Right to Life & Liberty",
      desc: "Complete lesson on Article 21.",
      video: "https://www.youtube.com/embed/0JEyG1V_OL8"
    },
    {
      id: 3,
      title: "Article 32 – Constitutional Remedies",
      desc: "Dr. B. R. Ambedkar called this 'Heart & Soul of Constitution'.",
      video: "https://www.youtube.com/embed/3cG-0QeRF3o"
    },
    {
      id: 4,
      title: "Article 370 – Jammu & Kashmir",
      desc: "Special status & removal explained simply.",
      video: "https://www.youtube.com/embed/5U_DQZIZXkQ"
    }
  ];

  return (
    <div className="classes-page">
      <h2>Constitution Classes</h2>
      <div className="classes-grid">
        {classList.map((cls) => (
          <div
            key={cls.id}
            className="class-card"
            onClick={() => openClass(cls)}
          >
            <h3>{cls.title}</h3>
            <p>{cls.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
