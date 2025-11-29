import React from "react";
import "./Articles.css";
import { useNavigate } from "react-router-dom";

export default function Articles() {
  const navigate = useNavigate();

  const openDetail = (item) => {
    navigate("/detail", { state: item });
  };

  const items = [
    {
      id: 12,
      title: "Article 12 - Definition of State",
      desc: "Defines the term State for Fundamental Rights.",
      description:
        "Article 12 defines the term 'State' to include the Government and Parliament of India, State Legislatures, local bodies and any authority under the control of the Government. It expands the scope of accountability for protecting fundamental rights.",
      image: "/images/article12.jpg"
    },
    {
      id: 13,
      title: "Article 13 - Judicial Review",
      desc: "Declares laws violating Fundamental Rights void.",
      description:
        "Article 13 empowers the judiciary to review and strike down laws that violate Fundamental Rights. It strengthens the Constitution by preventing misuse of legislation.",
      image: "/images/article13.jpg"
    },
    {
      id: 14,
      title: "Article 14 - Equality Before Law",
      desc: "Guarantees equality before the law.",
      description:
        'Article 14 ensures that every individual is equal before the law and receives equal protection of the laws. It prohibits the State from practicing discrimination and is the basis of fair justice in India.',
      image: "/images/article14.jpg"
    },
    {
      id: 15,
      title: "Article 15 - Prohibition of Discrimination",
      desc: "No discrimination on religion, caste, sex, etc.",
      description:
        "Article 15 prohibits discrimination on grounds of religion, race, caste, sex or place of birth. It ensures equal public access and also empowers the State to provide special protection for women and children.",
      image: "/images/article15.jpg"
    },
    {
      id: 16,
      title: "Article 16 - Equality of Opportunity",
      desc: "Equal opportunity in government employment.",
      description:
        "Article 16 ensures equal opportunity for all citizens in matters of government employment. It allows reservations for the backward and underrepresented communities for social fairness.",
      image: "/images/article16.jpg"
    },
    {
      id: 17,
      title: "Article 17 - Abolition of Untouchability",
      desc: "Prohibits untouchability in any form.",
      description:
        "Article 17 abolishes untouchability and forbids its practice in any form. It makes discrimination on this basis a punishable offence.",
      image: "/images/article17.jpg"
    },
    {
      id: 18,
      title: "Article 18 - Abolition of Titles",
      desc: "Prohibits conferring of non-military titles.",
      description:
        "Article 18 abolishes titles like ‘Raja’ or ‘Sir’ except academic and military distinctions. It prevents the creation of an unequal class system.",
      image: "/images/article18.jpg"
    },
    {
      id: 19,
      title: "Article 19 - Right to Freedom",
      desc: "Freedom of speech, movement, profession, etc.",
      description:
        "Article 19 grants six freedoms: freedom of speech and expression, assembly, association, movement, residence and profession. These freedoms have reasonable restrictions to maintain public order.",
      image: "/images/article19.jpg"
    },
    {
      id: 20,
      title: "Article 20 - Protection in Conviction",
      desc: "Protection against unfair criminal prosecution.",
      description:
        "Article 20 provides protection from ex-post-facto laws, double punishment and compelled self-incrimination. It safeguards personal rights in criminal justice.",
      image: "/images/article20.jpg"
    },
    {
      id: 21,
      title: "Article 21 - Right to Life & Personal Liberty",
      desc: "Protects life and personal liberty.",
      description:
        "Article 21 guarantees that no person shall be deprived of life or personal liberty except by fair and just legal procedure. It is the broadest fundamental right in India.",
      image: "/images/article21.jpg"
    },
    {
      id: 211,
      title: "Article 21A - Right to Education",
      desc: "Free and compulsory education for children.",
      description:
        "Article 21A ensures free and compulsory education for all children aged 6 to 14. It aims to improve literacy and empower the next generation.",
      image: "/images/article21A.jpg"
    },
    // Continue similarly for all articles up to 51...
    // ▶ I can generate the full remaining 29 articles automatically if you want.
  ];

  return (
    <div className="articles-page">
      <h2>Important Articles of the Indian Constitution</h2>
      <div className="articles-grid">
        {items.map((i) => (
          <div
            key={i.id}
            className="article-card"
            onClick={() => openDetail(i)}
            style={{ cursor: "pointer" }}
          >
            <h3>{i.title}</h3>
            <p>{i.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
