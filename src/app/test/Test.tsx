import React from "react";

import { Box } from "@mui/material";
import { BoxTestStyle } from "./TestStyle";
import QuestionForm from "../components/question-form/QuestionForm";

const Test = () => {
  return (
    <BoxTestStyle>
      <QuestionForm />
    </BoxTestStyle>
  );
};

export default Test;
