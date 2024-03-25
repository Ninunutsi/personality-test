"use client";

import React, { ChangeEvent, useState, FormEvent, useEffect } from "react";
import QuestionsData from "../../../data/data.json";
import QuizHeader from "../quizheader/QuizHeader";
import BtnComponent from "../button/btn-component";
import { useRouter } from "next/navigation";
import { QuestionProps } from "@/app/interfaces/interfaces";
import { BoxStyle } from "@/app/mainpage/HomePageStyle";
import {
  TestBox,
  RadioContent,
  RadioInsideContent,
} from "@/app/test/TestStyle";
import { useValuesContext } from "@/app/context/ValuesContext";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

const QuestionForm = () => {
  const { attributes, setAttributes } = useValuesContext();
  const [data] = useState(QuestionsData);
  const [questionsIndex, setQuestionsIndex] = useState<number>(0);
  const [questIndex, setQuestIndex] = useState<number>(1);
  const [value, setValue] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [radioText, setRadioText] = useState<string>("");
  const [radioGif, setRadioGif] = useState<string>("");

  const router = useRouter();

  const questions: QuestionProps[] = data.questions;
  const question: QuestionProps = questions[questionsIndex];
  const { question_text, question_number, gif } = question;

  useEffect(() => {
    value === "" ? setChecked(false) : setChecked(true);
  }, [value]);

  const onFormSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (value === "") return;

    if (questionsIndex >= questions.length - 1) {
      router.push("/results");
    } else {
      setQuestionsIndex((prev) => prev + 1);
      setQuestIndex((prev) => prev + 1);
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
    <BoxStyle>
      <QuizHeader value={questIndex} />
      <Box sx={{ ...TestBox }}>
        <Typography variant="h2" height={80}>
          {question_text}
        </Typography>
        <Box component="form" onSubmit={onFormSubmit} key={question_number}>
          <RadioGroup onChange={handleRadioChange}>
            {question.options.map(({ answer, attributeVal }, index) => (
              <Box sx={{ ...RadioContent }} key={index} mb={1}>
                <FormControlLabel
                  value={attributeVal}
                  control={<Radio />}
                  label={answer}
                />

                {value === attributeVal && (
                  <Box sx={{ ...RadioInsideContent }}>
                    <img src={radioGif} alt={question_text} />
                    <Typography variant="body2" lineHeight={2.5}>
                      {radioText}
                    </Typography>
                  </Box>
                )}
              </Box>
            ))}
          </RadioGroup>
          <Box mt={15} mr={{ md: 1, xs: 0, sm: 2 }} textAlign={"end"}>
            <BtnComponent text="შემდეგი" checked={checked} />
          </Box>
        </Box>
      </Box>
    </BoxStyle>
  );
};

export default QuestionForm;
