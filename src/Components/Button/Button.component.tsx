import React from "react";
import { ButtonProps } from "./Button.types";
import "./Button.scss";

export const Button: React.FC<ButtonProps> = (props) => {
  console.log(props);
  return (
    <div className="button-container">
      <button disabled={true || props.disable}>
        <a href={props.href}>{props.title}</a>
      </button>
    </div>
  );
};
