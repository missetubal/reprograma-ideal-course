import React, {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  useEffect,
  useState,
} from "react";
import { Button } from "../../Components/Button/Button.component";
import "./GetInfo.scss";

export const GetInfo = () => {
  const [date, setDate] = useState("");
  const [disable, setIsDisable] = useState(false);

  useEffect(() => {
    console.log(date);
    if (date === "") setIsDisable(true);
  });
  return (
    <div className="get-info-container" id="get-info">
      <div className="get-info-left">
        <h1>Seja bem vinda!</h1>
        <h2>
          Você chegou até aqui porque teve curiosidade quando o assunto é
          tecnologia e esta curiosidade é essencial
        </h2>

        <span>
          Antes de começarmos, você poderia nos responder algumas perguntas?
        </span>
        <form action="">
          <div className="question">
            <label htmlFor="id" defaultValue="Selecione">
              Como você se identifica?
            </label>
            <select name="id" id="id" required defaultValue="Selecionar">
              <option value="cis">Mulher Cisgenero</option>
              <option value="trans">Mulher Transgênero</option>
            </select>
          </div>
          <div className="question">
            <label htmlFor="birth">Data de Nascimento</label>
            <input
              type="date"
              name="birth"
              id="birth"
              value={date}
              onChange={(e) => setDate(e.toString)}
            />
          </div>
        </form>
        <Button title="Próximo" href="#" disable={disable} />
      </div>
      <div className="get-info-right">
        <img
          src="https://img.freepik.com/vetores-premium/menina-sentada-atras-de-sua-mesa-estudando-on-line-usando-seu-computador_186332-247.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
