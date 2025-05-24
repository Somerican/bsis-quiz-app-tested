"use client";
import { useState } from "react";

const questions = [
  { question: "The primary role of a security officer is to:", options: ["Enforce the law", "Protect people and property", "Act like a peace officer", "Arrest law breakers"], answer: 1 },
  { question: "What is the responsibility of security personnel before an incident or offense has occurred?", options: ["Detain and punish", "Stay out of sight", "Prevent", "Search and seize"], answer: 2 },
  { question: "It is against the law for security personnel to:", options: ["Arrest someone", "Protect property", "Observe and report", "Make someone think they are a police officer"], answer: 3 }
];

export default function Page() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [incorrect, setIncorrect] = useState([]);

  const handleNext = () => {
    if (selected === null) return;
    if (selected === questions[current].answer) {
      setScore(score + 1);
    } else {
      setIncorrect([...incorrect, current]);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setCompleted(true);
    }
  };

  if (completed) {
    return (
      <div style={{ padding: 20 }}>
        <h1>{score === questions.length ? "You got 100% correct. Perfect score! 🎉" : `You scored ${score} out of ${questions.length}`}</h1>
        {incorrect.length > 0 && (
          <ul>
            {incorrect.map((i) => (
              <li key={i}>{questions[i].question}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  const q = questions[current];
  return (
    <div style={{ padding: 20 }}>
      <h2>Question {current + 1} of {questions.length}</h2>
      <p>{q.question}</p>
      {q.options.map((option, idx) => (
        <div key={idx}>
          <label>
            <input type="radio" name="option" checked={selected === idx} onChange={() => setSelected(idx)} />
            {String.fromCharCode(65 + idx)}. {option}
          </label>
        </div>
      ))}
      <button onClick={handleNext}>{current + 1 === questions.length ? "Finish" : "Next"}</button>
    </div>
  );
}
