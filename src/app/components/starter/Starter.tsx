"use client";

import { BoxStyle } from "@/app/mainpage/HomePageStyle";
import { Box, Typography } from "@mui/material";
import { StarStyle, TextStyle, ContentStyle } from "./StarterStyle";
import QuizHeader from "../quizheader/QuizHeader";
import BtnComponent from "../button/btn-component";
import Image from "next/image";
import Link from "next/link";

const Starter = () => {
  return (
    <BoxStyle component="main">
      <QuizHeader />
      <Box position={"relative"}>
        <Box sx={{ ...StarStyle }} position={"relative"}></Box>
        <Typography variant="h6" sx={{ ...TextStyle }}>
          Quiz
        </Typography>
      </Box>
      <Box sx={{ ...ContentStyle }}>
        <Image
          src={"assets/skillwillLogo.svg"}
          width={160}
          height={20}
          alt="skillwill logo"
        />
        <Typography variant="h2" mt={2} mb={3}>
          რომელი პროფესიაა შენთვის განკუთვნილი?
        </Typography>
        <Typography variant="h5" mb={8}>
          გინდა ისწავლო რაც მართლა გამოგადგება, მაგრამ არ იცი საიდან დაიწყო?
          მაშინ
        </Typography>
        <Box alignSelf={"end"} component="form">
          <Link href={"/test"}>
            <BtnComponent text="გააკეთე ტესტი" checked={true} />
          </Link>
        </Box>
      </Box>
    </BoxStyle>
  );
};

export default Starter;
