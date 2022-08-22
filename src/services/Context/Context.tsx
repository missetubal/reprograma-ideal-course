import React, { createContext, useState } from "react";
import {
  GlobalContextProps,
  UserContextProps,
  USER_DEFAULT,
} from "./Context.types";

const UserContext = createContext<UserContextProps>(USER_DEFAULT);

const GlobalContext: React.FC<GlobalContextProps> = ({ children }) => {
  const [state, setState] = useState(USER_DEFAULT.state);
  return (
    <UserContext.Provider value={{ state, setState }}>
      {children}
    </UserContext.Provider>
  );
};

export { GlobalContext };
export default UserContext;
