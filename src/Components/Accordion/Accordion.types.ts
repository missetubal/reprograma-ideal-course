export interface AccordionProps {
  data: DataProps;
  score: number;
  index: number;
}

export interface DataProps {
  id: number;
  question: string;
  options: {
    description: string;
    score: number;
    checked: boolean;
  };
}
