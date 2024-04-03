"use client";

import React from "react";
import { Box, Button } from "@mui/material";
import { ButtonStyle, ButtonStyleOutlined } from "@/app/mainpage/HomePageStyle";
import { IBtn } from "@/app/interfaces/interfaces";
import { useRouter } from "next/navigation";

const BtnComponent: React.FC<IBtn> = ({
  text,
  href,
  checked,
  variant,
  inputField,
  backColor,
}) => {
  const router = useRouter();

  const startQuiz = () => {
    href && router.push(href);
  };

  return variant ? (
    <Box onClick={startQuiz}>
      <ButtonStyleOutlined
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
    </Box>
  ) : (
    <Box onClick={startQuiz}>
      <ButtonStyle
        variant={"contained"}
        type="submit"
        sx={{
          bgcolor: inputField ? "#FF6B69" : backColor,
          color: backColor ? "#000" : "#fff",
          opacity: !checked ? "0.8" : "1",
          "&:hover": {
            opacity: !checked ? "0.8" : "1",
            bgcolor: inputField ? "#FF6B69" : backColor,
          },
        }}
      >
        {!inputField ? text : "შეავსეთ სრულად"}
      </ButtonStyle>
    </Box>
  );
};

export default BtnComponent;
