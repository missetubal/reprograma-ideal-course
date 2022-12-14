import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button.component";
import UserContext from "../../services/Context/Context";
import { diffYears } from "../../services/helpers/helpers";
import "./GetInfo.scss";

export const GetInfo = () => {
  const [date, setDate] = useState<string>("");
  const [disable, setIsDisable] = useState(true);
  const [id, setId] = useState<string>("");
  const navigation = useNavigate();
  const { state, setState: setState } = useContext(UserContext);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsDisable(!!!date);
  }, [date]);

  function handleOnClick() {
    const diffYear = diffYears(date);

    if (diffYear >= 18) {
      setState({ ...state, id, date });
      navigation("/login");
    } else {
      setError("Você deve ser maior de 18 anos");
      setIsDisable(true);
    }
  }
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
        <div className="get-info-inputs">
          <div className="question">
            <label htmlFor="id">Como você se identifica?</label>
            <select
              name="id"
              id="id"
              onChange={(event) => setId(event.target.value)}
            >
              <option disabled selected value="none">
                Selecione
              </option>
              <option value="Mulher Cisgenero">Mulher Cisgenero</option>
              <option value="Mulher Trans">Mulher Transgênero</option>
            </select>
          </div>
          <div className="question">
            <label htmlFor="birth">Data de Nascimento</label>
            <input
              type="date"
              name="birth"
              id="birth"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
        </div>
        {error && <p className="error">{error}</p>}
        <Button title="Próximo" onClick={handleOnClick} disable={disable} />
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
