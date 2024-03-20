'use client'
import { useValuesContext } from '@/app/context/ValuesContext'
import React, { useEffect, useState } from 'react'
import resultsData from '../../../data/results.json'
import Image from 'next/image'
import { Typography } from '@mui/material'

const Result = () => {
    const {attributes} = useValuesContext()
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
          setResult("პასუხების ატრიბუტების რაოდენობა ერთმანეთს უდრის და აჩის უნდა ვკითხოთ ასეთ დროს რას ვშვებით")
        } else {
          setResult(mostRepeatedWord)
        }
  
    }, [])
    const matchingResult = resultsData.results.find((item) => item.title === result);
    return <div>
      {matchingResult && (
        <>
        <Image src={matchingResult.gif} alt="gif" width={400} height={400}/>
        <Typography sx={{color: "white", fontSize: '40px'}}>{matchingResult.text}</Typography>
        </>
      )}
      <Typography sx={{color: "white", fontSize: '40px'}}>{result}</Typography>
    </div>;
}

export default Result