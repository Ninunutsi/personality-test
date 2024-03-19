"use client";

import React from "react";
import { ButtonStyle } from "@/app/mainpage/HomePageStyle";
import { IBtn } from "@/app/interfaces/interfaces";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";

const BtnComponent: React.FC<IBtn> = ({ text, href, onClick }) => {
  const router = useRouter();

  const startQuiz = () => {
    href && router.push(href);
  };
  
  return (
    <Box onClick={startQuiz}>
      <ButtonStyle variant="contained">{text}</ButtonStyle>
    </Box>
  );
};

export default BtnComponent;
