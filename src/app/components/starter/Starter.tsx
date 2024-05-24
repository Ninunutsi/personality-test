"use client";

import React, { useEffect } from "react";
import QuizHeader from "../quizheader/QuizHeader";
import BtnComponent from "../button/btn-component";
import Image from "next/image";
import Link from "next/link";
import airpods from "../../../../public/assets/airpods.png";
import { BoxStyle } from "@/app/mainpage/HomePageStyle";
import { Box, Typography } from "@mui/material";
import {
  TextContent,
  ContentBox,
  ContentStyle,
  ButtonForm,
} from "./StarterStyle";
import { useValuesContext } from "@/app/context/ValuesContext";

const Starter = () => {
  const { setAttributes } = useValuesContext();

  useEffect(() => {
    setAttributes([]);
  }, []);

  return (
    <BoxStyle component="main">
      <QuizHeader visible={false} />
      <Box
        sx={{
          alignItems: {
            xs: "center",
            lg: "flex-start",
          },
          ...ContentBox,
        }}
      >
        <Box sx={{ ...ContentStyle }}>
          <Typography
            maxWidth={{ xs: "100%", sm: 500, md: 560 }}
            fontWeight={700}
            mb={6}
            sx={{
              fontSize: {
                xs: "h6.fontSize",
                sm: "h5.fontSize",
                md: "h4.fontSize",
                lg: "h3.fontSize",
              },
            }}
          >
            გაიგე რომელი პროფესია შეგეფერება
          </Typography>
          <Box alignSelf={"start"} component="form" sx={{ ...ButtonForm }}>
            <Link href={"/test"}>
              <BtnComponent text="დაიწყე ქვიზი" checked={true} />
            </Link>
          </Box>
        </Box>
        <Box
          maxWidth={{ lg: "40%", md: "100%", sm: "100%", xs: "100%" }}
          height={{ lg: 250, md: 240, sm: 200, xs: 150 }}
          // mt={2}
        >
          <img
            src="/assets/GIFs/mainGif.webp"
            alt="mainGif"
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
    </BoxStyle>
  );
};

export default Starter;
