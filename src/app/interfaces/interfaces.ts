// Data interface

export interface IOptions {
  answer: string;
  text: string;
  attributeVal: string;
  radioGif: string;
}

export interface QuestionProps {
  question_number: number;
  question_text: string;
  options: IOptions[];
}

// Context interface

export interface ValuesContextType {
  attributes: string[];
  setAttributes: React.Dispatch<React.SetStateAction<string[]>>;
  lastValue: string;
  setLastValue: React.Dispatch<React.SetStateAction<string>>;
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

// Button interface

export interface IBtn {
  text: string | any;
  href?: string | undefined;
  checked?: boolean;
  variant?: string;
  inputField?: boolean;
}

// QuizHeader Interface

export interface QuizHeaderProps {
  value?: number | string;
  checked?: boolean;
  visible: boolean;
}
