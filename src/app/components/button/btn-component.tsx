"use client";

import React from "react";
import { Box } from "@mui/material";
import { ButtonStyle, ButtonStyleOutlined } from "@/app/mainpage/HomePageStyle";
import { IBtn } from "@/app/interfaces/interfaces";
import { useRouter } from "next/navigation";

const BtnComponent: React.FC<IBtn> = ({
  text,
  href,
  checked,
  variant,
  inputField,
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
          bgcolor: inputField ? "red" : "",
          opacity: !checked ? "0.5" : "1",
          "&:hover": {
            opacity: !checked ? "0.5" : "1",
            bgcolor: inputField ? "red" : "",
          },
        }}
      >
        {!inputField ? text : "შეავსეთ სრულად"}
      </ButtonStyle>
    </Box>
  );
};

export default BtnComponent;
