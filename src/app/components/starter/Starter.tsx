"use client";

import React from "react";
import QuizHeader from "../quizheader/QuizHeader";
import BtnComponent from "../button/btn-component";
import Image from "next/image";
import Link from "next/link";
import { BoxStyle } from "@/app/mainpage/HomePageStyle";
import { Box, Typography } from "@mui/material";
import { StarStyle, TextStyle, ContentStyle, ButtonForm } from "./StarterStyle";
import airpods from '../../../../public/assets/airpods.png'
const Starter = () => {
  return (
    <BoxStyle component="main">
      <QuizHeader visible={false} />
      <Box
        position={"relative"}
        sx={{ alignSelf: { xs: "center", sm: "center", md: "start" } }}
      >
        <Box sx={{ ...StarStyle }} position={"relative"}></Box>
        <Typography variant="h6" sx={{ ...TextStyle }}>
          Quiz
        </Typography>
      </Box>
      <Box sx={{display: 'flex', alignItems: 'flex-start'}}>
      <Box sx={{ ...ContentStyle }}>
        <Image
          src={"assets/skillwillLogo.svg"}
          width={160}
          height={20}
          alt="skillwill logo"
        />
        <Typography
          maxWidth={{ xs: "100%", sm: 500, md: 930 }}
          fontWeight={700}
          mt={2}
          mb={3}
          sx={{
            fontSize: {
              xs: "h6.fontSize",
              sm: "h5.fontSize",
              md: "h3.fontSize",
            },
          }}
        >
          გაიგე რომელი პროფესია შეგეფერება
        </Typography>
        <Typography
          maxWidth={{ xs: "100%", sm: 300, md: 500 }}
          fontWeight={700}
          sx={{
            fontSize: {
              xs: "body1.fontSize",
              sm: "body1.fontSize",
              md: "h6.fontSize",
            },
          }}
          mb={8}
        >
          შეავსე კითხვარი, მიიღე გათამაშებაში მონაწილეობა და მოიგე Airpods
        </Typography>
        <Box alignSelf={"start"} component="form" sx={{ ...ButtonForm }}>
          <Link href={"/test"}>
            <BtnComponent text="დაიწყე ტესტი" checked={true} />
          </Link>
        </Box>
      </Box>
      <Image
          src={airpods}
          width={300}
          height={200}
          alt="skillwill logo"
        />
      </Box>
    </BoxStyle>
  );
};

export default Starter;
