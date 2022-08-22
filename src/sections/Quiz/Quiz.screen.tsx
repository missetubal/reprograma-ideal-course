import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button.component";
import { quizData } from "./QuizData";

export const Quiz: React.FC = () => {
  const navigation = useNavigate();
  const [total, setTotal] = useState(0);
  const [disable, isDisable] = useState(true);
  const [value, setValue] = useState("");

  function handleOnClick(id: number) {
    count++;
    setCount(count);
    navigation(`/quiz${id}`, { state: { total, count } });
  }
  let [count, setCount] = useState(0);

  return (
    <div className="quiz-container">
      <h1>Questão {quizData[count].id} </h1>
      <h2>{quizData[count].question}</h2>
      {quizData[count].options.map((option: any) => {
        return (
          <div className="option" key={option.id}>
            <input
              type="radio"
              name="option"
              value={value}
              onClick={() => {
                setTotal(total + option.score);
                isDisable(false);
                setValue("");
              }}
            />
            <label>{option.description}</label>
          </div>
        );
      })}
      <Button
        title="Próximo"
        onClick={() => handleOnClick(quizData[count].id)}
        disable={disable}
      />
    </div>
  );
};
