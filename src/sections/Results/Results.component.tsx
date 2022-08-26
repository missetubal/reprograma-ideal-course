import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Accordion } from '../../components/Accordion/Accordion.component';
import { DataProps } from '../../components/Accordion/Accordion.types';
import UserContext from '../../services/Context/Context';
import { diffYears } from '../../services/helpers/helpers';
import { LocationProps } from '../../types/Location.types';
import { quizData } from '../Quiz/QuizData';
import './Results.scss';

export const Results: React.FC = () => {
  const { state } = useContext(UserContext);
  const age = diffYears(state.date);
  const location = useLocation();
  const locationState = location.state as LocationProps;
  const { scores, total, profile } = locationState;
  const [front, setFront] = useState(0);

  useEffect(() => {
    let n = 0;
    for (let i = 0; i < quizData.length; i++) {
      if (scores[i] == 10) n++;
    }
    setFront((n / quizData.length) * 100);
  });

  return (
    <div className='results-container'>
      <div className='results-user'>
        <h2>Informações de Perfil</h2>
        <div className='img-profile'>
          <img src={state.picture} alt='' width={200} height={200} />
        </div>
        <div className='results-info'>
          <p> {state.name}</p>
          <p>{state.id}</p>
          <p> {age} anos</p>
        </div>
      </div>
      <div className='quiz-results'>
        <h2>Respostas</h2>
        {quizData.map((quiz, index) => (
          <Accordion
            data={quiz as unknown as DataProps}
            score={scores[index]}
            index={index}
          />
        ))}
      </div>
      <div className='results-profile'>
        <div className='profile-title'>
          <h2>Perfil</h2>
        </div>
        {profile === 'front' && (
          <>
            <img
              src='https://cdni.iconscout.com/illustration/premium/thumb/html-programmer-working-on-front-end-5138115-4288271.png'
              alt=''
              width={300}
              height={300}
            />
            <p>Front-End</p>
          </>
        )}
        {profile === 'back' && (
          <>
            <img
              src='https://cdni.iconscout.com/illustration/premium/thumb/female-developer-working-on-backend-infrastructure-5597959-4676387.png'
              alt=''
              width={200}
              height={200}
            />
            <p>Back-End</p>
          </>
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
        <div className='result-percent'>
          <h3>Com base em suas respostas: </h3>
          <p>FrontEnd: {front}% </p>
          <p>BackEnd: {100 - front}%</p>
        </div>
      </div>
    </div>
  );
};
