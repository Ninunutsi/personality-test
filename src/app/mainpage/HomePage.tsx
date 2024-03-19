import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/whiteLogo.svg";
import BtnComponent from "../components/button/btn-component";
import { Box, Typography } from "@mui/material";
import { BoxStyle } from "./HomePageStyle";

const HomePage = () => {
  return (
    <Box>
      <BoxStyle component="main">
        <Image src={logo} alt="skillwill logo" />
        <Typography variant="h5" component="h5" mt={3} mb={4}>
          გინდა ისწავლო რაც მართლა გამოგადგება, მაგრამ არ იცი საიდან დაიწყო?
          მაშინ
        </Typography>
        <BtnComponent text="გააკეთე ტესტი" href="/test" />
      </BoxStyle>
    </Box>
  );
};

export default HomePage;
