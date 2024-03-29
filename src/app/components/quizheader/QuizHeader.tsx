import React from "react";
import BtnComponent from "../button/btn-component";
import { Box, Typography } from "@mui/material";
import { QuizHeaderStyle } from "./QuizHeaderStyle";
import { QuizHeaderProps } from "@/app/interfaces/interfaces";

const QuizHeader: React.FC<QuizHeaderProps> = ({ value, checked, visible }) => {
  return (
    <Box sx={{ ...QuizHeaderStyle }}>
      {value && (
        <Typography
          className="text"
          sx={{
            fontSize: {
              xs: "body1.fontSize",
              sm: "body1.fontSize",
              md: "h6.fontSize",
            },
          }}
          display={"flex"}
          gap={1.5}
          alignItems={"center"}
        >
          Question {value}
          <Typography
            fontWeight={700}
            component="span"
            sx={{
              fontSize: {
                xs: "h6.fontSize",
                sm: "h6.fontSize",
                md: "h5.fontSize",
              },
            }}
          >
            / 10
          </Typography>
        </Typography>
      )}
      {visible && (
        <Box mr={{ md: 1, xs: 0, sm: 2 }} textAlign={"end"}>
          <BtnComponent text="შემდეგი" checked={checked} />
        </Box>
      )}
      {!value && (
        <Typography
          fontWeight={700}
          sx={{
            fontSize: {
              xs: 14,
              sm: "h5.fontSize",
              md: "h4.fontSize",
            },
          }}
        >
          SKILLWILL QUIZ
        </Typography>
      )}
    </Box>
  );
};

export default QuizHeader;
