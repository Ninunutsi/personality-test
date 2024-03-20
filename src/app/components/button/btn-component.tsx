"use client";

import React, { useState } from "react";
import { ButtonStyle } from "@/app/mainpage/HomePageStyle";
import { IBtn } from "@/app/interfaces/interfaces";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";

const BtnComponent: React.FC<IBtn> = ({ text, href, onClick, checked }) => {
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();

  const startQuiz = () => {
    href && router.push(href);
  };

  const onBtnClick = () => {
    !checked && setError(true);
    onClick && onClick();
  };

  return (
    <Box onClick={startQuiz}>
      <ButtonStyle
        onClick={onBtnClick}
        variant="contained"
        sx={{
          bgcolor: error ? "red" : "",
          "&:hover": {
            bgcolor: error ? "red" : "",
          },
        }}
      >
        {error ? "მონიშნეთ პასუხი" : text}
      </ButtonStyle>
    </Box>
  );
};

export default BtnComponent;
