import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const Countdown: React.FC = () => {
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 2) {
          clearInterval(interval);
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <Typography variant="h1" color={"#ab7df4"} fontSize={"8rem"}>
          {timer}
        </Typography>
        <Typography variant="subtitle1" color={"white"} fontSize={"2rem"}>Get ready...</Typography>
      </Box>
    </Box>
  );
};

export default Countdown;
