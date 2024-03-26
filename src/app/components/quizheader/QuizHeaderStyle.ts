import { SxProps } from "@mui/material";

export const QuizHeaderStyle: SxProps = {
  borderBottom: "3px solid black",
  width: "100%",
  padding: "40px 64px",
  backgroundColor: "#7DC0A7",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media (max-width: 1024px)": {
    padding: "20px 30px",
  },
};
