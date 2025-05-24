"use client";
import { useState } from "react";

const questions = [
  { question: "The primary role of a security officer is to:", options: ["Enforce the law", "Protect people and property", "Act like a peace officer", "Arrest law breakers"], answer: 1 },
  { question: "What is the responsibility of security personnel before an incident or offense has occurred?", options: ["Detain and punish", "Stay out of sight", "Prevent", "Search and seize"], answer: 2 },
  { question: "It is against the law for security personnel to:", options: ["Arrest someone", "Protect property", "Observe and report", "Make someone think they are a police officer"], answer: 3 },
  { question: "During an emergency on the employer’s property, a peace officer instructs security personnel to stand out of the way behind a police line. The security personnel must:", options: ["Refuse", "Cooperate and follow the lawful orders of the police officer", "Apprehend the persons violating the law on the employer’s property"], answer: 1 },
  { question: "The general public judges a security employee by:", options: ["Appearance", "Speech", "Attitude", "All of the above"], answer: 3 },
  { question: "According to the law, which of the following conditions must exist before you can make a misdemeanor arrest?", options: ["The suspect must admit to the crime", "The crime must have been committed or attempted in your presence", "Someone told you the suspect did it"], answer: 1 },
  { question: "What should you say to a person you are arresting for burglary?", options: ["State your intent to arrest", "State the charge", "State your authority to make the arrest", "All of the above"], answer: 3 },
  { question: "If you are struggling to get a suspect under control and there are a number of bystanders, what does the law say you can do?", options: ["Ask the bystanders to help you", "Demand the bystanders help you", "Demand the bystanders call the police", "None of the above"], answer: 0 },
  { question: "According to the text, you should:", options: ["Search all suspects immediately", "Not search a suspect unless you have reason to believe they have a weapon", "Only search persons suspected of major crimes", "Only search persons with a police record"], answer: 1 },
  { question: "It would be lawful to hold a suspect for two hours so your supervisor could question them before you called the police.", options: ["True", "False"], answer: 1 },
  { question: "If a security guard is charged with making a false arrest, what type of liability is incurred?", options: ["Civil liability", "Criminal liability", "Both"], answer: 2 },
  { question: "What type of liability refers to the right a party has to initiate a lawsuit for financial damages?", options: ["Civil liability", "Criminal liability"], answer: 0 },
  { question: "The standard to determine 'reasonable force' is based on:", options: ["Agreement by witnesses", "All facts at the time", "Video footage", "Future threat"], answer: 1 },
  { question: "An imminent threat is defined as:", options: ["Suspicion of danger", "Future fear", "Immediate fear of dangerous action", "Assumption of escalation"], answer: 2 },
  { question: "Which circumstances should be considered when using force?", options: ["Size", "Support", "Number of subjects", "Mental state", "All of the above"], answer: 4 },
  { question: "Professional presence and verbal commands are considered a force option.", options: ["True", "False"], answer: 0 },
  { question: "Appropriate force for passive but non-compliant subject:", options: ["Taser", "More commands", "Control holds", "Firearm", "All of the above"], answer: 2 },
  { question: "Use of force is always justified to protect property and persons.", options: ["True", "False"], answer: 1 },
  { question: "A guard must break up a fight across the street from their post.", options: ["True", "False"], answer: 1 },
  { question: "If you can't prevent an incident, you should:", options: ["Observe", "Ignore", "Report", "Observe and Report"], answer: 3 },
  { question: "Poor judgment has no consequences.", options: ["True", "False"], answer: 1 },
  { question: "Security personnel may be liable for failure to intercede.", options: ["True", "False"], answer: 0 },
  { question: "No need to report incidents without injuries.", options: ["True", "False"], answer: 1 },
  { question: "Penalty for not reporting a physical altercation to the Bureau?", options: ["Suspension", "Revocation", "Fine", "All of the above"], answer: 3 },
  { question: "Days allowed to report to Bureau:", options: ["7", "14", "21", "30"], answer: 0 },
  { question: "Bureau reports must include:", options: ["Injuries", "Names", "Police report", "All"], answer: 3 },
  { question: "Use of force should consider:", options: ["Size", "Witnesses", "Total circumstances", "Distance"], answer: 2 },
  { question: "Reasonable force is defined as:", options: ["Enough to do the job", "Not excessive, protects self/property", "What boss allows", "None"], answer: 1 },
  { question: "De-escalation benefits EXCEPT:", options: ["Public trust", "Safety", "Wellness", "Cowardice"], answer: 3 },
  { question: "NOT part of situation assessment:", options: ["Threat to others", "Company profit", "Immediate danger", "Imminent threat"], answer: 1 },
  { question: "De-escalation must be documented.", options: ["True", "False"], answer: 0 },
  { question: "Four de-escalation pillars include force options.", options: ["True", "False"], answer: 0 },
  { question: "Unconscious bias is called:", options: ["Perceptions", "Implicit bias", "Explicit bias", "Discrimination"], answer: 1 },
  { question: "When speaking to non-English speaker:", options: ["Wait", "Speak loudly", "Use jargon", "Talk to translator"], answer: 0 },
  { question: "Nonverbal actions that affect communication:", options: ["Facial expressions", "Eye contact", "Gestures", "All"], answer: 3 },
  { question: "NOT part of active listening:", options: ["Context", "Assuming you heard right", "Rephrasing", "Open mind"], answer: 1 },
  { question: "Guards must determine ADA protection.", options: ["True", "False"], answer: 1 },
  { question: "Mobility device is:", options: ["Remove it", "Extension of person", "Evaluate usefulness", "None"], answer: 1 },
  { question: "Deaf person support:", options: ["Pen and paper", "Lip read", "Shout", "All"], answer: 0 },
  { question: "Hallucinations are caused by:", options: ["Mental illness", "Substance use", "Both"], answer: 2 },
  { question: "Self-control is a guard's:", options: ["Weakness", "Asset", "Protection", "Awareness"], answer: 1 },
  { question: "Emotional focus for self-control:", options: ["Fear/Anger", "Fear/Self-Control", "Anger/Anxiety", "Distress/Excitement"], answer: 0 },
  { question: "Generate voluntary compliance without:", options: ["Anger", "Arrest", "Physical force", "Confrontation"], answer: 2 },
  { question: "Maintain public trust with force that is:", options: ["Reasonable", "Unreasonable", "Accurate", "Justifiable"], answer: 0 },
  { question: "Respond with humanity and:", options: ["Aggression", "Support", "Kindness", "Admiration"], answer: 1 },
  { question: "Mental illness can impair coping.", options: ["True", "False"], answer: 0 },
  { question: "Guards should diagnose mental illness.", options: ["True", "False"], answer: 1 },
  { question: "Mentally ill people may become suddenly:", options: ["Excited", "Quiet", "Anxious", "Agitated"], answer: 3 },
  { question: "First action in active shooter situation:", options: ["Disarm shooter", "Call 911", "Run"], answer: 1 },
  { question: "Call 911 — report:", options: ["Location", "Directions", "Shooter description", "A and C"], answer: 3 },
  { question: "Guard’s responsibility in active shooter:", options: ["Evacuate", "Disarm shooter", "Protect self"], answer: 2 },
  { question: "Safety order:", options: ["Confront, Fight, Run", "Run, Hide, Fight", "Hide, Attack, Run"], answer: 1 }
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
