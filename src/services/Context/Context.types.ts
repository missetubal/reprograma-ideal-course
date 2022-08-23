import { ReactNode } from "react";

type UserType = {
  date: string;
  id: string;
  name: string;
  picture: string;
};

export type UserContextProps = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>;
};

export type GlobalContextProps = {
  children: ReactNode;
};

export const USER_DEFAULT = {
  state: {
    date: "",
    id: "",
    name: "",
    picture: "",
  },
  setState: () => {},
};
