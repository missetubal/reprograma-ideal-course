import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Link to={props.href} className="button-container">
      <button disabled={props.disable}>{props.title}</button>
    </Link>
  );
};
