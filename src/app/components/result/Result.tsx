"use client";

import { useValuesContext } from "@/app/context/ValuesContext";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import resultsData from "../../../data/results.json";
import BtnComponent from "../button/btn-component";
import Link from "next/link";
import Countdown from "../countdown";
import ModalForm from "../modal/ModalForm";
import UnmutchingRes from "../unmatchingres/UnmutchingRes";
import {
  resultTypographyStyles,
  resultTextStyles,
  resultLinkContainerStyles,
  resultBoxStyles,
  BoxContainerStyles,
  BoxedContent,
} from "./resultStyles";

const Result: React.FC = () => {
  const { attributes } = useValuesContext();
  const [result, setResult] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showCountdown, setShowCountdown] = useState<boolean>(true);
  const [wait, setWait] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setShowCountdown(false);
    }, 3000);
  }, []);

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
    } else {
      setResult(mostRepeatedWord);
    }
  }, []);

  const matchingResult = resultsData.results.find(
    (item) => item.title === result
  );

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

  if (showCountdown && matchingResult) return <Countdown />;

  if (wait && !matchingResult) {
    return <UnmutchingRes />;
  }

  return (
    <Box>
      {matchingResult && (
        <Box
          sx={{
            ...BoxContainerStyles,
          }}
        >
          <Box sx={{ ...resultBoxStyles }} pb={"1rem"}>
            <Typography sx={{ ...resultTypographyStyles }} p={"1rem 0"}>
              {result}
            </Typography>
            <Box
              sx={{
                ...BoxedContent,
              }}
            >
              <Box maxWidth={450} height={{ md: 400, sm: 300, xs: 200 }}>
                <img
                  src={matchingResult.gif}
                  alt="gif"
                  width={"100%"}
                  height={"100%"}
                  style={{
                    borderRadius: "0.5rem",
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                  }}
                />
              </Box>
              <Box>
                <Typography sx={{ ...resultTextStyles }}>
                  {matchingResult.text}
                </Typography>
                <Typography sx={{ ...resultTextStyles }}>
                  მეტის სანახავად შეგიძლია ეწვიო:{" "}
                </Typography>
                <Box sx={{ ...resultLinkContainerStyles }}>
                  <Link
                    href={matchingResult?.link}
                    target="_blank"
                    style={{
                      color: "white",
                      width: "100%",
                      display: "block",
                      padding: "0.5rem",
                    }}
                  >
                    {result}
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box onClick={onClick}>
              <BtnComponent text="მიიღე გათამაშებაში მონაწილეობა" />
            </Box>
          </Box>
        </Box>
      )}
      {showModal && <ModalForm onClose={onClose} />}
    </Box>
  );
};

export default Result;
