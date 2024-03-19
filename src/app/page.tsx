import Image from 'next/image';
import logo from '../../public/assets/logo.png'
import BtnComponent from './components/btn-component/btn-component';
import { Box, Typography } from '@mui/material';
export default function Home() {
  return (
    <Box>
      <Box component='main'
      sx={{
        height: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}>
        <Image
        src={logo}
        alt="skillwill logo"
      />

        <Typography variant="h5" component="h5" sx={{lineHeight: '3rem', fontWeight: 'bold', maxWidth: '50rem'}} mt={'8vh'} mb={'5vh'}>
          გინდა ისწავლო რაც მართლა გამოგადგება, მაგრამ არ იცი საიდან დაიწყო? მაშინ
        </Typography>
        <BtnComponent text='გააკეთე ტესტი' href='/test'/>
      </Box>
    </Box>
  );
}
