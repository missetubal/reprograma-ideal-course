import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizData } from "./QuizData";
import { Button } from "../../components/Button/Button.component";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar.component";
import "./Quiz.scss";

export const Quiz: React.FC = () => {
  const [index, setIndex] = useState(1);
  const currentQuiz = quizData.filter((quiz) => quiz.id === index);
  const navigation = useNavigate();
  const [disable, isDisable] = useState(true);
  const [checked, isChecked] = useState(false);
  const [scores, setscores] = useState<number[]>([]);
  const [profile, setProfile] = useState("");
  const [value, setValue] = useState(0);

  function handleOnClickNext(id: number, value: number) {
    setIndex(id + 1);
    setscores([...scores, value]);

    if (id < quizData.length) {
      isDisable(true);
      isChecked(false);
    } else {
      navigation("/results", {
        state: { scores: scores, total: total, profile: profile },
      });
    }
  }

  const total = useMemo(() => {
    let soma = 0;
    for (let i = 0; i < scores.length; i++) {
      soma += scores[i];
    }
    return soma;
  }, [scores]);

  function handleOnClickPrev(id: number, value: number) {
    setIndex(id - 1);
    if (id > 1) {
      isDisable(true);
    }
    setscores([...scores, value]);
    if (id === 1) navigation("/login");
  }

  useEffect(() => {
    if (total > 0) setProfile("front");
    if (total < 0) setProfile("back");
    // if (total === 0) {
    //   if (index > 1) setProfile("full");
    // }
    if (index === 1) setProfile("");
  });

  return (
    <div className="quiz-container">
      <div className="progress-bar">
        <ProgressBar steps={quizData.length} current={index} />
      </div>
      <div className="questions">
        <div className="question-card-container">
          <h1>Questão{currentQuiz[0].id}</h1>
          <p>{currentQuiz[0].question}</p>
          {currentQuiz[0].options.map((option: any, index) => {
            return (
              <>
                <div className="question-options" key={index}>
                  <input
                    className="question-radio-input"
                    type="radio"
                    name="option"
                    value={option.description}
                    checked={checked}
                    onChange={() => {
                      setValue(option.score);
                      isChecked(true);
                      isDisable(false);
                    }}
                  />
                  <label>{option.description}</label>
                </div>
              </>
            );
          })}
          <div className="buttons">
            <Button
              title="Voltar"
              onClick={() => handleOnClickPrev(index, value)}
            />
            <Button
              title="Próximo"
              onClick={() => handleOnClickNext(index, value)}
              disable={disable}
            />
          </div>
        </div>
        <div className="profile">
          <h2>Perfil</h2>
          {profile === "front" && (
            <div>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/html-programmer-working-on-front-end-5138115-4288271.png"
                alt=""
                width={300}
                height={300}
              />
              <p>Front-End</p>
            </div>
          )}
          {profile === "back" && (
            <div>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/female-developer-working-on-backend-infrastructure-5597959-4676387.png"
                alt=""
                width={200}
                height={200}
              />
              <p>Back-End</p>
            </div>
          )}
          {/* {profile === "full" && (
            <div>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/full-stack-developer-4316247-3611090.png"
                width={200}
                height={200}
                alt=""
              />
              <p>Fullstack</p>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};
