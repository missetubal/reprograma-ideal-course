import React, { useEffect, useState } from "react";
import api from "../../services/api";

const Login: React.FC = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    api
      .get("/api")
      .then((response) => setUsers(response.data))
      .catch((err) => {
        console.error("Ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="login-container">
      {users.map((user, index) => {
        return (
          <div className="login-left" key={index}>
            {users.map((user, index) => {
              return (
                <div className="login-left" key={index++}>
                  <img src={user.results.picture} alt="" />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Login;
