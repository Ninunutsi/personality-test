"use client";

import React, { ChangeEvent, useState, FormEvent } from "react";
import QuestionsData from "../../../data/data.json";
import BtnComponent from "../button/btn-component";
import { TestBoxCard, TestLabel } from "@/app/test/TestStyle";
import { useRouter } from "next/navigation";
import { useValuesContext } from "@/app/context/ValuesContext";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { QuestionProps } from "@/app/interfaces/interfaces";

const QuestionForm = () => {
  const { attributes, setAttributes } = useValuesContext();
  const [data] = useState(QuestionsData);
  const [questionsIndex, setQuestionsIndex] = useState<number>(0);
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [radioText, setRadioText] = useState<string>("");
  const [radioGif, setRadioGif] = useState<string>("");

  const router = useRouter();

  interface rame {
    question_number: number;
    question_text: string;
    gif: string;
    options: {
      answer: string;
      text: string;
      attributeVal: string;
      radioGif: string;
    }[];
  }

  const questions: QuestionProps[] = data.questions;
  const question: QuestionProps = questions[questionsIndex];
  const { question_text, question_number, gif } = question;

  const onFormSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (value === "") {
      setError(true);
      return;
    }

    if (questionsIndex >= questions.length - 1) {
      router.push("/results");
    } else {
      setError(false);
      setQuestionsIndex((prev) => prev + 1);
      setAttributes([...attributes, value]);
    }

    setValue("");
    setRadioText("");
    setRadioGif("");
  };

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    const selectedOption = question.options.find(
      (option) => option.attributeVal === event.target.value
    );
    const selectedGif = question.options.find(
      (option) => option.attributeVal === event.target.value
    );
    selectedOption && setRadioText(selectedOption.text);
    selectedGif && setRadioGif(selectedGif.radioGif);
  };

  // window.onload = () => {
  //   router.push("/");
  // };

  return (
    <TestBoxCard>
      <TestLabel focused={false}>{question_text}</TestLabel>
      <Box component="form" onSubmit={onFormSubmit} key={question_number}>
        <Box className="radioBoxStyle">
          <img src={value ? radioGif : gif} alt={question_text} />
          <RadioGroup onChange={handleRadioChange} sx={{ height: 320 }}>
            {question.options.map(({ answer, attributeVal }, index) => (
              <Box key={index} width={{ sm: 500, md: 400, xs: 360 }} p={0}>
                <FormControlLabel
                  className="formControl"
                  value={attributeVal}
                  control={<Radio />}
                  label={answer}
                />
                {value === attributeVal && (
                  <Typography variant="body2" lineHeight={2.5}>
                    {radioText}
                  </Typography>
                )}
              </Box>
            ))}
          </RadioGroup>
        </Box>
        <Box mt={2} mr={{ md: 1, xs: 0, sm: 2 }} alignSelf={"end"}>
          <BtnComponent text="შემდეგი" error={error} />
        </Box>
      </Box>
    </TestBoxCard>
  );
};

export default QuestionForm;
