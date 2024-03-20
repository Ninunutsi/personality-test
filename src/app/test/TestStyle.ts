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
});

export const TestBoxCard = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

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
      width: 340,
      height: 52,
      border: "2px solid black",
      marginBottom: 5,
      borderRadius: 10,
    },
  },
});

export const TestLabel = styled(FormLabel)({
  alignSelf: "center",
  textAlign: "center",
  width: 500,
  height: 30,
  fontSize: 22,
  fontWeight: 700,
  color: "#000",
  marginBottom: 60,
});
