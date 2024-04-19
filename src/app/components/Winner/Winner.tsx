import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { createClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseUrl } from '@/api/Api';

interface WinnerProps {
    name: string,
    last_name: string
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

const Winner: React.FC = () => {
    const [user, setUser] = useState<WinnerProps>()

    const fetchData = async () => {
        try {
          const { data, error } = await supabase
            .from('QuizData')
            .select('*')
            .eq('winner', true);
          if (error) {
            throw error;
          }
            
            setUser({
              name: data[0]?.name,
              last_name: data[0].last_name
            });

          
        } catch (error: any) {
          console.error('Error:', error.message);
        }
      };

      useEffect(() => {
            fetchData()
      }, [])
      
  return (
    <Box sx={{display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh', textAlign: 'center', backgroundColor: '#f8f8f8'}}>
      {
        <>
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
              }} mb='20px'>გათამაშებაში გამარჯვებულია: </Typography>
      <Typography variant="h1" sx={{color: "#c4aaf4", fontSize: {
                  xs: "h3.fontSize",
                  sm: "h2.fontSize",
                  md: "h1.fontSize",
                },}}>{user?.name}  {user?.last_name}</Typography>
        </>
      }
    </Box>
  )
}

export default Winner
