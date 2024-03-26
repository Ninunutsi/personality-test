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

  "@media (max-width: 768px) ": {
    padding: "15px 40px",
    fontSize: "1rem",
  },
});

export const BgBox = styled(Box)({
  position: "relative",
  zIndex: 1,
  margin: "0 auto",
  minHeight: "100vh",
});

export const BgImage = styled(Box)({
  position: "absolute",
  top: 40,
  left: 0,
  zIndex: 0,
  width: "100%",
  height: "100%",
});
