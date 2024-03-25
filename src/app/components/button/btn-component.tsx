"use client";

import React, { useEffect, useState } from "react";
import { ButtonStyle } from "@/app/mainpage/HomePageStyle";
import { IBtn } from "@/app/interfaces/interfaces";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";
import useScrollToTop from "@/app/hooks/useScrollToTop";

const BtnComponent: React.FC<IBtn> = ({ text, href, checked }) => {
  const router = useRouter();
  const { handleClick } = useScrollToTop();

  const startQuiz = () => {
    href && router.push(href);
  };

  const scrollTop = () => {
    handleClick;
  };

  return (
    <Box onClick={startQuiz}>
      <ButtonStyle
        onClick={scrollTop}
        variant="contained"
        type="submit"
        sx={{
          opacity: !checked ? "0.2" : "1",
          "&:hover": {
            opacity: !checked ? "0.2" : "1",
          },
        }}
      >
        {text}
      </ButtonStyle>
    </Box>
  );
};

export default BtnComponent;
