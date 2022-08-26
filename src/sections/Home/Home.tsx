import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button.component";
import "./Home.scss";

export const Home = () => {
  const navigation = useNavigate();
  return (
    <div className="home-container">
      <div className="home-left">
        <h1 className="heading">Quero aprender a programar</h1>
        <p className="subtitle">
          Esse é o Ideal Course, construido para mulheres, por mulheres que um
          dia também não sabiam por onde começar
        </p>
        <Button
          title="Vamos Começar?"
          onClick={() => navigation("/get-info")}
        />
      </div>
      <div className="home-right">
        <img
          src="https://www.pngall.com/wp-content/uploads/4/Thinking-Woman-PNG-Free-Download.png"
          alt=""
        />
      </div>
    </div>
  );
};
