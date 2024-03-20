"use client";

import React, { ChangeEvent, useState, FormEvent, useEffect } from "react";

import QuestionsData from "../../../data/data.json";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { TestBoxCard, TestLabel } from "@/app/test/TestStyle";
import BtnComponent from "../button/btn-component";
import { useRouter } from "next/navigation";
import { useValuesContext } from "@/app/context/ValuesContext";

const QuestionForm = () => {
  const [data] = useState(QuestionsData);
  const [questionsIndex, setQuestionsIndex] = useState<number>(0);
  const [value, setValue] = useState<string>("");
  const {attributes, setAttributes, setAuth, auth} = useValuesContext()
  const [error, setError] = useState<boolean>(false);

  const router = useRouter();

  const questions = data.questions;
  const question = questions[questionsIndex];
  const{question_text, question_number, gif } = question

  const onFormSubmit = (e: FormEvent): void => {
    e.preventDefault()

    value === '' ? setError(true) : setError(false)
    setValue("");
    if (!value) return;
    setQuestionsIndex((prev) => prev + 1);
    setAttributes([...attributes, value])
    

    if (questionsIndex >= questions.length - 1) {
      setQuestionsIndex((prev) => prev - 1); 
      setAuth(true)
      router.push("/results");
    }
    console.log(questionsIndex)
  };

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    if(!auth){
      router.push('/')
    }
  }, [auth])

  return (
    <TestBoxCard height={400} width={780}>
        <TestLabel focused={false}>{question_text}</TestLabel>
        <form onSubmit={onFormSubmit} key={question_number} >
        <Box className="radioBoxStyle">
          <img src={gif} alt={question_text} />
          <RadioGroup onChange={handleRadioChange}>
            {question.options.map(({answer, attributeVal}, index) => (
              <FormControlLabel
                className="formControl"
                key={index}
                value={attributeVal}
                control={<Radio />}
                label={answer}
              />
            ))}
          </RadioGroup>
        </Box>
        <Box mt={2} mr={2} alignSelf={"end"}>
          <BtnComponent text="შემდეგი" error={error}
           />
        </Box>
        </form>
    </TestBoxCard>
  );
};

export default QuestionForm;
