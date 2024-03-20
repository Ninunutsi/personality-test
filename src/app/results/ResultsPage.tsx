'use client'

import React, { useEffect, useState } from "react";
import { useValuesContext } from "../context/ValuesContext";
import { Typography } from "@mui/material";

const ResultsPage = () => {
  const {attributes, setAttributes} = useValuesContext()
  const [result, setResult] = useState<string>("'")

  useEffect(() => {
      let counts: { [key: string]: number } = {};
      let mostRepeatedWord: string = '';
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
  
      if (equalCounts) {
        setResult("პასუხების ატრიბუტების რაოდენობა ერთმანეთს უდრიდა და აჩის უნდა ვკითხოთ ასეთ დროს რას ვშვებით")
      } else {
        setResult(mostRepeatedWord)
      }

  }, [])


  return <div>
    <Typography sx={{color: "white", fontSize: '40px'}}>{result}</Typography>
  </div>;
};

export default ResultsPage;
