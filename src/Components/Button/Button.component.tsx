import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      disabled={props.disable}
      onClick={props.onClick}
      className={props.className}
    >
      {props.title}
    </button>
  );
};
