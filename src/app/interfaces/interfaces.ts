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

export interface QuestionFormProps {
  question: QuestionProps;
}

// Button interface

export interface IBtn {
  text: string;
  href?: string | undefined;
  onClick?: () => void;
  error?: boolean

}

// useRequest Interface

export interface UseRequestProps {
  url: string;
  method: string;
}
