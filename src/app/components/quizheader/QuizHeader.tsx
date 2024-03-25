import { Box, Typography } from "@mui/material";
import { QuizHeaderStyle } from "./QuizHeaderStyle";
import React from "react";

const QuizHeader: React.FC<{ value?: number }> = ({ value }) => {
  return (
    <Box sx={{ ...QuizHeaderStyle }}>
      <Typography variant="h4" fontWeight={700}>
        SKILLWILL QUIZ
      </Typography>
      {value && (
        <Typography
          variant="h5"
          display={"flex"}
          gap={1.5}
          alignItems={"center"}
        >
          Question {value}
          <Typography variant="h4" fontWeight={700} component="span">
            / 10
          </Typography>
        </Typography>
      )}
    </Box>
  );
};

export default QuizHeader;
