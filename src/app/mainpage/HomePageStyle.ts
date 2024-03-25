"use client";

import { Box, Button, styled } from "@mui/material";

export const BoxStyle = styled(Box)({
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  flexDirection: "column",
  color: "white",
  border: "3px solid black",
  borderRadius: 6,

  h5: {
    lineHeight: "2rem",
    fontWeight: "bold",
    maxWidth: 500,
  },
});

export const ButtonStyle = styled(Button)({
  backgroundColor: "#ab7df4",
  fontSize: "1.25rem",
  padding: "20px 79px",

  "&:hover": {
    backgroundColor: "#ab7df4",
  },
});

export const BgBox = styled(Box)({
  margin: "0 auto",
  minHeight: "100vh",
  backgroundColor: "#F8F8F8",
  backgroundImage: `url("assets/skillwillBg.svg")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left",
  backgroundSize: "contain",
});
