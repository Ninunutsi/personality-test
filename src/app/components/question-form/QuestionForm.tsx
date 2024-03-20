"use client";

import React, { ChangeEvent, useState } from "react";
import QuestionsData from "../../../data/data.json";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { TestBoxCard, TestLabel } from "@/app/test/TestStyle";
import BtnComponent from "../button/btn-component";
import { useRouter } from "next/navigation";

const QuestionForm = () => {
  const [data] = useState(QuestionsData);
  const [questionsIndex, setQuestionsIndex] = useState<number>(0);
  const [value, setValue] = useState<string>("");

  const router = useRouter();

  const questions = data.questions;
  const question = questions[questionsIndex];

  const onFormSubmit = (): void => {
    if (!value) return;
    setQuestionsIndex((prev) => prev + 1);

    setValue("");

    if (questionsIndex >= questions.length - 1) {
      setQuestionsIndex((prev) => prev - 1); // ეს რაღაც ვიბოდიალე
      router.push("/results");
    }
  };

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  console.log(value); // ილოგება ატრიბუტს

  return (
    <TestBoxCard height={400} width={780}>
      <FormControl key={question.question_number}>
        <TestLabel focused={false}>{question.question_text}</TestLabel>
        <Box className="radioBoxStyle">
          <img src={question.gif} alt={question.question_text} />
          <RadioGroup onChange={handleRadioChange}>
            {question.options.map((option, index) => (
              <FormControlLabel
                className="formControl"
                key={index}
                value={option.attributeVal}
                control={<Radio />}
                label={option.answer}
              />
            ))}
          </RadioGroup>
        </Box>
        <Box mt={2} mr={2} alignSelf={"end"}>
          <BtnComponent text="შემდეგი" onClick={onFormSubmit} checked={value} />
        </Box>
      </FormControl>
    </TestBoxCard>
  );
};

export default QuestionForm;
