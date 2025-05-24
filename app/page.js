"use client";
import { useState } from "react";

const questions = [""" + "
  " + ",
  ".join([
    '{ question: "The primary role of a security officer is to:", options: ["Enforce the law", "Protect people and property", "Act like a peace officer", "Arrest law breakers"], answer: 1 }',
    '{ question: "What is the responsibility of security personnel before an incident or offense has occurred?", options: ["Detain and punish", "Stay out of sight", "Prevent", "Search and seize"], answer: 2 }',
    '{ question: "It is against the law for security personnel to:", options: ["Arrest someone", "Protect property", "Observe and report", "Make someone think they are a police officer"], answer: 3 }',
    '{ question: "During an emergency on the employer’s property, a peace officer instructs security personnel to stand out of the way behind a police line. The security personnel must:", options: ["Refuse", "Cooperate and follow the lawful orders of the police officer", "Apprehend the persons violating the law on the employer’s property"], answer: 1 }',
    '{ question: "The general public judges a security employee by:", options: ["Appearance", "Speech", "Attitude", "All of the above"], answer: 3 }'
]) + """
];

export default function Page() {
  const [current, setCurrent] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [incorrect, setIncorrect] = useState([]);

  const handleSelect = (idx) => {
    setSelected(idx);
    const isCorrect = idx === questions[current].answer;
    if (isCorrect) {
      setScore(score + 1);
      setFeedback("");
      setTimeout(() => {
        if (current + 1 < questions.length) {
          setCurrent(current + 1);
          setSelected(null);
        } else {
          setCompleted(true);
        }
      }, 600);
    } else {
      setFeedback("Incorrect! Try again.");
      if (!incorrect.includes(current)) {
        setIncorrect([...incorrect, current]);
      }
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
        <div key={idx} style={{ marginBottom: 8 }}>
          <button
            style={{ padding: 10, width: "100%", textAlign: "left" }}
            onClick={() => handleSelect(idx)}
            disabled={selected === idx && idx !== q.answer}
          >
            {String.fromCharCode(65 + idx)}. {option}
          </button>
        </div>
      ))}
      {feedback && <p style={{ color: "red" }}>{feedback}</p>}
    </div>
  );
}
