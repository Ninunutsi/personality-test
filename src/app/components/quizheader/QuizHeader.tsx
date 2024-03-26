import React from "react";
import { Box, Typography } from "@mui/material";
import { QuizHeaderStyle } from "./QuizHeaderStyle";

const QuizHeader: React.FC<{ value?: number }> = ({ value }) => {
  return (
    <Box sx={{ ...QuizHeaderStyle }}>
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
      {value && (
        <Typography
          sx={{
            fontSize: {
              xs: 12,
              sm: "h6.fontSize",
              md: "h5.fontSize",
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
                xs: 14,
                sm: "h5.fontSize",
                md: "h4.fontSize",
              },
            }}
          >
            / 10
          </Typography>
        </Typography>
      )}
    </Box>
  );
};

export default QuizHeader;
