import { SxProps } from "@mui/material";

export const QuizHeaderStyle: SxProps = {
  borderBottom: "3px solid black",
  width: "100%",
  padding: "30px 64px",
  backgroundColor: "#7DC0A7",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media (max-width: 1024px)": {
    padding: "20px 30px",
  },

  "@media (max-width: 400px)": {
    ".text": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 0,

      span: {
        fontSize: "16px",
      },
    },
  },
};
