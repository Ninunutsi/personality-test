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
            mb={2}
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
          <Box
            mb={2}
            sx={{ ...TextContent }}
            maxWidth={{ xs: "100%", sm: "100%", md: 550 }}
          >
            <Typography
              className="Airpods"
              fontWeight={700}
              sx={{
                fontSize: {
                  xs: "body1.fontSize",
                  sm: "body1.fontSize",
                  md: "h6.fontSize",
                },
              }}
            >
              შეავსე კითხვარი, მიიღე გათამაშებაში მონაწილეობა და მოიგე
              <span>&nbsp;Airpods</span>
            </Typography>
            <Box display={{ lg: "block", md: "none", sm: "none", xs: "none" }}>
              <Image
                src={airpods}
                width={180}
                height={120}
                alt="skillwill logo"
              />
            </Box>
          </Box>
          <Box alignSelf={"start"} component="form" sx={{ ...ButtonForm }}>
            <Link href={"/test"}>
              <BtnComponent text="დაიწყე ქვიზი" checked={true} />
            </Link>
          </Box>
        </Box>
        <Box
          maxWidth={{ lg: "40%", md: "100%", sm: "100%", xs: "100%" }}
          height={{ lg: 250, md: 240, sm: 200, xs: 150 }}
          mt={2}
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
