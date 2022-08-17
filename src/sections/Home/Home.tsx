import React from "react";
import { Button } from "../../Components/Button/Button.component";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <h1 className="heading">Quero aprender a programar</h1>
        <p className="subtitle">
          Esse é o Ideal Course, construido para mulheres, por mulheres que um
          dia também não sabiam por onde começar
        </p>
        <Button title="Vamos Começar?" href="#get-info" />
      </div>
      <div className="home-right">
        <img
          src="https://img.freepik.com/vetores-premium/jovem-mulher-pensando-com-ponto-de-interrogacao-na-bolha-do-discurso-a-menina-pensa-sobre-o-problema-e-as-duvidas_501173-156.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
