import { NavigateOptions, Params } from "react-router-dom";

export interface ButtonProps {
  title: string;
  onClick: () => void;
  disable?: boolean;
  className?: string;
}
