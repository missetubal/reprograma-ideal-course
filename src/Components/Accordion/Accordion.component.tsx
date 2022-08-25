import React, { useState } from "react";
import { quizData } from "../../sections/Quiz/QuizData";
import { AccordionProps } from "./Accordion.types";
import "./Accordion.scss";

export const Accordion: React.FC<AccordionProps> = (props) => {
  const [open, isOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const { data, score, index } = props;

  function handleClick(index: number) {
    isOpen(!open);
    if (score == 10) setAnswer(quizData[index].options[0].description);
    if (score == -10) setAnswer(quizData[index].options[1].description);
    if (score == 0) setAnswer(quizData[index].options[2].description);
  }

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => handleClick(index)}>
        <div>
          Q{data.id}. {data.question}
        </div>
        <div>{open ? "-" : "+"}</div>
      </div>
      {open && <div className="accordion-content">{answer}</div>}
    </div>
  );
};
