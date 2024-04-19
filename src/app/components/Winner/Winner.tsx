import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { createClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseUrl } from '@/api/Api';

interface WinnerProps {
    id: number,
    name: string,
    last_name: string,
    number: string
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

const Winner: React.FC = () => {
    const [user, setUser] = useState<WinnerProps[]>([])

    const fetchData = async () => {
        try {
          const { data, error } = await supabase
            .from('QuizData')
            .select('*')
            .eq('winner', true);
          if (error) {
            throw error;
          }
            
            
          setUser(data || [])
            console.log(data)

          
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
              }} mb='20px'>გათამაშებაში გამარჯვებულები არიან: </Typography>
    {user.map(({name, last_name, number, id}) => (
         <div key={id}>
          <Typography variant="h2" sx={{color: "#c4aaf4", fontSize: {
            xs: "h4.fontSize",
            sm: "h3.fontSize",
            md: "h2.fontSize",
          },}}>{name} {last_name}</Typography>
           <Typography variant="h2" sx={{color: "#c4aaf4", fontSize: {
            xs: "h4.fontSize",
            sm: "h3.fontSize",
            md: "h2.fontSize",
          },}}>{number}</Typography>
          </div>
    ))}
        </>
      }
    </Box>
  )
}

export default Winner
