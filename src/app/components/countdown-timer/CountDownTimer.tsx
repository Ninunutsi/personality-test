'use client'
import React, { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";

import { Box, Typography } from '@mui/material';
import { supabaseKey, supabaseUrl } from '@/api/Api';
import Winner from '../Winner';

const supabase = createClient(supabaseUrl, supabaseKey);

interface IUser {
    name: string,
    last_name: string
}

const CountdownTimer: React.FC = () => {
  const [countdown, setCountdown] = useState<number>(0);
  const [winnerChosen, setWinnerChosen] = useState<boolean>(true);

  useEffect(() => {
    const targetTime = new Date();
    targetTime.setHours(20, 0, 0, 0); // 7 PM

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime.getTime() - now;

      if (distance > 0) {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown(hours * 3600 + minutes * 60 + seconds);
      } else {
        clearInterval(interval);
        setWinnerChosen(true)
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  if(winnerChosen) return <Winner/>

  return (
    <Box sx={{display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh', textAlign: 'center', backgroundColor: '#f8f8f8'}}>
      <Typography variant="h3" gutterBottom sx={{
                fontSize: {
                  xs: "h6.fontSize",
                  sm: "h4.fontSize",
                  md: "h3.fontSize",
                },
                lineHeight: {
                    xs: "1.8rem",
                    sm: "2.5rem",
                    md: "3.2rem",
                  },
              }} mb='20px'>გამარჯვებულის გამოვლენამდე დარჩენილია</Typography>
      <Typography variant="h1" sx={{color: "#c4aaf4", fontSize: {
                  xs: "h3.fontSize",
                  sm: "h2.fontSize",
                  md: "h1.fontSize",
                },}}>{formatTime(countdown)}</Typography>
    </Box>
  );
};

export default CountdownTimer;
