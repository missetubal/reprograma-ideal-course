import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    // <Link className="button-container" to={""}>
    <button disabled={props.disable} onClick={props.onClick}>
      {props.title}
    </button>
    // </Link>
  );
};
