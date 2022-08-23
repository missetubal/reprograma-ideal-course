import moment from "moment";
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import UserContext from "../../services/Context/Context";
import { MaskData } from "../../services/Regex/DateMask";

export const Results: React.FC = () => {
  const location = useLocation();
  const { state } = useContext(UserContext);
  console.log(location.state);
  console.log(state);
  const data = moment(state.date, "YYYY-MM-DD").fromNow();

  console.log();

  return (
    <div className="results-container">
      <div className="results-user">
        <img src={state.picture} alt="" width={200} height={200} />
        <div className="results-info">
          <label htmlFor="name">Nome</label>
          <p>{state.name}</p>
        </div>
        <div className="results-info">
          <label htmlFor="name">Idade</label>
          <p>{data.split("", 2)}</p>
        </div>
      </div>
    </div>
  );
};
