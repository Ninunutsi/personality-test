"use client";

import { FormLabel, SxProps } from "@mui/material";
import { styled } from "@mui/system";

// export const TestLabel = styled(FormLabel)({
//   alignSelf: "center",
//   textAlign: "center",
//   maxWidth: 700,
//   height: 30,
//   fontSize: 40,
//   fontWeight: 700,
//   color: "#000",
//   marginBottom: 140,
// });

export const TestBox: SxProps = {
  padding: "48px 64px 64px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  color: "#000",

  h2: {
    fontSize: 40,
    fontWeight: 700,
    color: "#000",
    marginBottom: 10,
    maxWidth: 750,
    textAlign: "center",
  },

  form: {
    width: "100%",
    alignSelf: "center",
  },
};

export const RadioContent: SxProps = {
  maxWidth: 537,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  alignSelf: "center",
  padding: "10px 20px ",

  border: "1px solid #F5F5F5",
  backgroundColor: "#ebe9e9",

  label: {
    width: "100%",
  },
};

export const RadioInsideContent: SxProps = {
  width: "100%",

  img: {
    width: "100%",
    height: 330,
  },
};
