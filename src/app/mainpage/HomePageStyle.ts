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
  backgroundColor: "#f8f8f8",

  h5: {
    lineHeight: "2rem",
    fontWeight: "bold",
    maxWidth: 500,
  },
});

export const ButtonStyleOutlined = styled(Button)({
  fontSize: "1.25rem",
  padding: "20px 79px",
  color: "#ab7df4",
  border: "1px solid #ab7df4",

  "&:hover": {
    backgroundColor: "#fcfaff",
    border: "1px solid #ab7df4",
  },
});

export const ButtonStyle = styled(Button)({
  backgroundColor: "#ab7df4",
  fontSize: "1.25rem",
  padding: "10px 65px",
  width: "100%",

  "&:hover": {
    backgroundColor: "#ab7df4",
  },

  "@media (max-width: 768px) ": {
    padding: "10px 30px",
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
