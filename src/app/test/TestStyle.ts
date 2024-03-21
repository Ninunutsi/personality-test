"use client";

import { FormLabel } from "@mui/material";
import { Box, styled } from "@mui/system";

export const BoxTestStyle = styled(Box)({
  backgroundImage: `url("/assets/cardBg.png")`,
  backgroundPosition: "left",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",

  alignSelf: "Center",
  padding: 40,
  borderRadius: 40,

  "@media (max-width: 920px)": {
    margin: "0 40px",
    maxWidth: 700,
    width: "100%",
    backgroundImage: "none",
    backgroundColor: "white",
  },

  "@media (max-width: 600px)": {
    width: "100%",
    margin: 0,
    borderRadius: 0,
  },
});

export const TestBoxCard = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  form: {
    display: "flex",
    flexDirection: "column",
  },

  ".radioBoxStyle": {
    display: "flex",
    alignItems: "start",
    justifyContent: "space-between",
    gap: 30,

    img: {
      width: 400,
      height: 280,
      borderRadius: 10,
    },

    ".formControl": {
      width: "100%",
      height: 52,
      border: "2px solid black",
      margin: "0 0 5px",
      borderRadius: 10,
    },

    "@media (max-width: 920px)": {
      flexDirection: "column",
      alignItems: "center",

      img: {
        width: "100%",
      },
    },

    "@media (max-width: 600px)": {
      img: {
        height: 200,
      },
    },
  },
});

export const TestLabel = styled(FormLabel)({
  alignSelf: "center",
  textAlign: "center",
  maxWidth: 500,
  height: 30,
  fontSize: 22,
  fontWeight: 700,
  color: "#000",
  marginBottom: 60,

  "@media (max-width: 600px)": {
    fontSize: 18,
  },
});
