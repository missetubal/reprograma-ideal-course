import React from "react";
import { ProgressBarProps } from "./ProgressBar";
import "./ProgressBar.scss";

export const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const steps = new Array(props.steps);
  const current = props.current;
  steps.fill(null);
  console.log(current);

  const handleClass = (i: number) => {
    if (current == i) return "current";
    if (i < current) return "complete";
    return "";
  };

  return (
    <div className="progress-container">
      {steps.map((index, step) => {
        return (
          <ul key={index} className={`step  ${handleClass(step + 1)}`}>
            <li>{step + 1}</li>
          </ul>
        );
      })}
    </div>
  );
};
