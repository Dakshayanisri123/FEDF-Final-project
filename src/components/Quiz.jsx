import React, { useState } from "react";
import "./Quiz.css";

const quizData = [
  { q: "Who is known as the Father of the Indian Constitution?", opts: ["Ambedkar","Nehru","Rajendra Prasad"], a: "Ambedkar" },
  { q: "When did the Constitution come into effect?", opts: ["26 Jan 1950","15 Aug 1947","26 Nov 1949"], a: "26 Jan 1950" },
  { q: "What does Article 21 deal with?", opts: ["Education","Life & Liberty","Equality"], a: "Life & Liberty" },
  { q: "Which Article prohibits discrimination?", opts: ["Article 14","Article 15","Article 17"], a: "Article 15" },
  { q: "Right to Privacy is part of which Article?", opts: ["21","19","32"], a: "21" },
  { q: "Article 17 deals with:", opts: ["Freedom","Abolition of Untouchability","Education"], a: "Abolition of Untouchability" },
  { q: "Fundamental Duties are under:", opts: ["Part IVA","Part II","Part VII"], a: "Part IVA" },
  { q: "Which Article gives Right to Education?", opts: ["19","21A","29"], a: "21A" },
  { q: "Which Article gives Right to Constitutional Remedies?", opts: ["32","51","12"], a: "32" },
  { q: "Who elects the President of India?", opts: ["People","Electoral College","Rajya Sabha"], a: "Electoral College" }
];

export default function Quiz() {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const answer = (opt) => {
    if (opt === quizData[i].a) setScore(s => s + 1);
    if (i + 1 < quizData.length) setI(i + 1);
    else setDone(true);
  };

  return (
    <div className="quiz-page">
      <h2>Constitution Quiz</h2>
      {!done ? (
        <div className="quiz-card">
          <p className="q">{quizData[i].q}</p>
          <div className="opts">
            {quizData[i].opts.map(o => (
              <button key={o} onClick={() => answer(o)}>
                {o}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="quiz-result">
          <h3>Your score: {score} / {quizData.length}</h3>
        </div>
      )}
    </div>
  );
}
