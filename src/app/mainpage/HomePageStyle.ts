"use client";

import { Box, Button, styled } from "@mui/material";

export const BoxStyle = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  color: "white",

  h5: {
    lineHeight: "2rem",
    fontWeight: "bold",
    maxWidth: 500,
  },
});

export const ButtonStyle = styled(Button)({
  backgroundColor: "#ab7df4",
  fontSize: "1rem",

  "&:hover": {
    backgroundColor: "#ab7df4",
  },
});

export const BgBox = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  backgroundImage: `url("assets/mainBG.svg")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
});
