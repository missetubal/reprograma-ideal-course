import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div className="button-container">
      <Link to={props.href}>
        <button disabled={props.disable}>{props.title}</button>
      </Link>
      {/* <a href={props.href}> */}
      {/* </a> */}
    </div>
  );
};
