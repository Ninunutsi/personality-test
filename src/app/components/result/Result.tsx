'use client'
import { useValuesContext } from '@/app/context/ValuesContext'
import React, { useEffect, useState } from 'react'
import resultsData from '../../../data/results.json'
import { Box, Typography } from '@mui/material'
import BtnComponent from '../button/btn-component'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Countdown from '../countdown'
import { resultTypographyStyles, resultTextStyles, resultLinkContainerStyles, fadeInStyles, resultBoxStyles } from './resultStyles';

const Result: React.FC = () => {
    const {attributes, auth} = useValuesContext()
    const [result, setResult] = useState<string>("'")
    const [showCountdown, setShowCountdown] = useState(true); // State to manage countdown visibility
    const router = useRouter()

    useEffect(() => {
      setTimeout(() => {
        setShowCountdown(false)
      }, 3000)
    }, [])

    useEffect(() => {
        if(!auth){
          router.push('/')
        }
    }, [auth])
  
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
        const random = Math.floor(Math.random() * 10) + 1  
        console.log(random)
        if (equalCounts) {
          setResult(attributes[random])
        } else {
          setResult(mostRepeatedWord)
        }
  
    }, [])

    console.log(attributes)
    
    const matchingResult = resultsData.results.find((item) => item.title === result);
    // ეს სავარაუდოდ ამოსაღები იქნება მაგრამ ცდუნებას ვერ გავუძელი და მაინც გავაკეთეეეეეე
    if(showCountdown) return <Countdown />

    return (
        <div>
            {matchingResult && (
                <Box sx={{height: "100vh", display: 'flex', alignItems: 'center', justifyContent: 'center', ...fadeInStyles}}>
                  <Box sx={{ ...resultBoxStyles}} pb={'1rem'}>
                    <Typography sx={{ ...resultTypographyStyles }} p={"1rem 0"}>{result}</Typography>
                    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', padding: '0 1.5rem'}}>
                      <Box>
                        <img src={matchingResult.gif} alt="gif" width={'100%'} style={{borderRadius: '0.5rem', boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}}/>
                      </Box>
                      <Box >
                        <Typography sx={{ ...resultTextStyles }}>{matchingResult.text}</Typography>
                        <Typography sx={{ ...resultTextStyles }}>მეტის სანახავად შეგიძლია ეწვიო: </Typography>
                        <Box sx={{...resultLinkContainerStyles}}>
                        <Link href={matchingResult?.link} target='_blank' style={{color: "white"}}>{result}</Link>
                        </Box>
                      </Box>
                    </Box>
                    <BtnComponent text='მიიღე გათამაშებაში მონაწილეობა'/>
                </Box>
                </Box>
            )}
        </div>
    );
}

export default Result;
