// Data interface

export interface IOptions {
  answer: string;
  attribute: string;
}

export interface QuestionProps {
  question_number: number;
  question_text: string;
  gif: string;
  options: IOptions[];
}

// Button interface

export interface IBtn {
  text: string;
  href?: string;
  onClick?: () => void;
}

// useRequest Interface

export interface UseRequestProps {
  url: string;
  method: string;
}
