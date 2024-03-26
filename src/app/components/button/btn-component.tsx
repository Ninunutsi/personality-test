"use client";

import React from "react";
import useScrollToTop from "@/app/hooks/useScrollToTop";
import { Box } from "@mui/material";
import { ButtonStyle, ButtonStyleOutlined } from "@/app/mainpage/HomePageStyle";
import { IBtn } from "@/app/interfaces/interfaces";
import { useRouter } from "next/navigation";

const BtnComponent: React.FC<IBtn> = ({ text, href, checked, variant }) => {
  const router = useRouter();
  const { handleClick } = useScrollToTop();

  const startQuiz = () => {
    href && router.push(href);
  };

  const scrollTop = () => {
    handleClick;
  };

  return variant? ( <Box onClick={startQuiz}>
    <ButtonStyleOutlined
      onClick={scrollTop}
      variant={"outlined"}
      type="submit"
      sx={{
        opacity: !checked ? "0.2" : "1",
        "&:hover": {
          opacity: !checked ? "0.2" : "1",
        },
      }}
    >
      {text}
    </ButtonStyleOutlined>
  </Box>) : ( <Box onClick={startQuiz}>
    <ButtonStyle
      onClick={scrollTop}
      variant={"contained"}
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
  </Box>)

  ;
};

export default BtnComponent;
