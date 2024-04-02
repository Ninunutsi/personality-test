"use client";

import React, { useEffect, useState } from "react";
import { useValuesContext } from "@/app/context/ValuesContext";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import resultsData from "../../../data/results.json";
import BtnComponent from "../button/btn-component";
import QuizHeader from "../quizheader/QuizHeader";
import UnmutchingRes from "../unmatchingres/UnmutchingRes";
import ModalForm from "../modal/ModalForm";
import {
  resultTypographyStyles,
  resultTextStyles,
  resultLinkContainerStyles,
  resultBoxStyles,
  BoxContainerStyles,
  BoxedContent,
  textTypography,
  resultMainContainer,
  buttons,
} from "./resultStyles";

const Result: React.FC = () => {
  const { attributes, setLastValue, showModal, setShowModal } =
    useValuesContext();
  const [result, setResult] = useState<string>("");
  const [wait, setWait] = useState<boolean>(false);

  useEffect(() => {
    let counts: { [key: string]: number } = {};
    let mostRepeatedWord: string = "";
    let maxCount: number = 0;
    let equalCounts: boolean = false;

    attributes.forEach((word: string) => {
      counts[word] = (counts[word] || 0) + 1;
      if (counts[word] > maxCount) {
        maxCount = counts[word];
        mostRepeatedWord = word;
        equalCounts = false;
      } else if (counts[word] === maxCount) {
        equalCounts = true;
      }
    });
    const random = Math.floor(Math.random() * 10) + 1;

    if (equalCounts) {
      setResult(attributes[random]);
      setLastValue(attributes[random]);
    } else {
      setResult(mostRepeatedWord);
      setLastValue(mostRepeatedWord);
    }
  }, []);

  const matchingResult = resultsData.results.find(
    (item) => item.title === result
  );

  console.log(matchingResult);

  useEffect(() => {
    if (!matchingResult) {
      return setWait(true);
    }
  }, [matchingResult]);

  const onClick = () => {
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };

  if (wait && !matchingResult) {
    return <UnmutchingRes />;
  }

  return (
    <Box sx={{ ...resultMainContainer }}>
      {matchingResult && (
        <Box
          sx={{
            ...BoxContainerStyles,
          }}
        >
          <QuizHeader value={10} visible={false} />
          <Box sx={{ ...resultBoxStyles }} pb={"1rem"}>
            <Typography sx={{ ...textTypography }}>
              რომელი პროფესიაა შენთვის განკუთვნილი?
            </Typography>
            <Typography sx={{ ...resultTypographyStyles }} pb={4}>
              გილოცავ! <br />
              შენ შეგეფერება {result}
            </Typography>
            <Box
              sx={{
                ...BoxedContent,
              }}
            >
              <Box maxWidth={570} height={{ md: 400, sm: 300, xs: 200 }}>
                <img src={matchingResult.gif} alt="gif" />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography sx={{ ...resultTextStyles }}>
                  {matchingResult.text}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ ...buttons }}>
              <Link href={matchingResult?.link} target="_blank">
                <Typography sx={{ ...resultLinkContainerStyles }}>
                  იყიდე კურსი
                </Typography>
              </Link>
              <Box onClick={onClick}>
                <BtnComponent
                  text="მოიგე Airpods"
                  checked={true}
                  variant={"outlined"}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {showModal && <ModalForm onClose={onClose} />}
    </Box>
  );
};

export default Result;
