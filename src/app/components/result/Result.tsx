"use client";
import { useValuesContext } from "@/app/context/ValuesContext";
import React, { useEffect, useState } from "react";
import resultsData from "../../../data/results.json";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import BtnComponent from "../button/btn-component";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Result = () => {
  const { attributes, auth } = useValuesContext();
  const [result, setResult] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    !auth && router.push("/");
  }, [auth]);

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
    console.log(random);
    if (equalCounts) {
      setResult(attributes[random]);
    } else {
      setResult(mostRepeatedWord);
    }
  }, []);

  console.log(attributes);

  const matchingResult = resultsData.results.find(
    (item) => item.title === result
  );
  return (
    <Box>
      {matchingResult && (
        <Box>
          <Image src={matchingResult.gif} alt="gif" width={400} height={400} />
          <Typography sx={{ color: "white", fontSize: "40px" }}>
            {matchingResult.text}
          </Typography>
          <Link color="white" href={matchingResult?.link} target="_blank">
            {result}
          </Link>
        </Box>
      )}
      <Typography sx={{ color: "white", fontSize: "40px" }}>
        {result}
      </Typography>
      <BtnComponent text="მიიღე გათამაშებაში მონაწილეობა" />
    </Box>
  );
};

export default Result;
