import React, { useContext, useEffect, useState } from "react";
import { Unless, When } from "react-if";
import { useNavigate } from "react-router-dom";
import { User } from "../../assets/female-icon";
import { Button } from "../../components/Button/Button.component";
import api from "../../services/api";
import UserContext from "../../services/Context/Context";
import "./Login.scss";

const Login: React.FC = () => {
  const [users, setUsers] = useState<any>();
  const { state, setState } = useContext(UserContext);
  const [login, loginNoPressed] = useState(true);
  const [loading, isLoading] = useState(true);
  const navigation = useNavigate();

  useEffect(() => {
    api
      .get("/api")
      .then((response) => setUsers(response.data))
      .then(() => isLoading(false))
      .catch((err) => {
        console.error("Ocorreu um erro" + err.response);
      });
  }, []);

  function handleOnClick() {
    setState({
      ...state,
      name: users.results[0].name.first + " " + users.results[0].name.last,
      picture: users.results[0].picture.large,
    });
    navigation("/quiz");
  }

  return (
    <>
      <When condition={loading}>
        <div className="loading"></div>
      </When>
      <Unless condition={loading}>
        <div className="login-container">
          <div className="login-left">
            {login ? (
              <User />
            ) : (
              <img src={users.results[0].picture.large} alt="" />
            )}
            <span>Foto do Perfil</span>
          </div>
          <div className="login-right">
            <Button
              className="button"
              title="LOGIN"
              onClick={() => loginNoPressed(false)}
              disable={!(async () => useEffect)}
            />
            <div className="login-inputs">
              <div className="login-info">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  value={
                    login
                      ? ""
                      : users.results[0].name.first +
                        " " +
                        users.results[0].name.last
                  }
                  disabled
                />
              </div>
              <div className="login-info">
                <label htmlFor="birth">Data de Nascimento</label>
                <input type="date" value={state.date} disabled />
              </div>
              <div className="login-info">
                <label htmlFor="birth">Identidade de Genero</label>
                <input type="text" value={state.id} disabled />
              </div>
            </div>
            <p>Tudo certo com as informações? Então vamos continuar!</p>
            <Button
              className="button"
              title="Próximo"
              onClick={() => handleOnClick()}
              disable={login}
            />
          </div>
        </div>
      </Unless>
    </>
  );
};

export default Login;
