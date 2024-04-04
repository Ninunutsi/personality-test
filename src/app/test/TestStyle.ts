"use client";

import { SxProps } from "@mui/material";

export const TestBox: SxProps = {
  padding: "48px 64px 64px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  color: "#000",

  h2: {
    fontSize: 30,
    fontWeight: 700,
    color: "#000",
    marginBottom: "35px",
    maxWidth: 700,
    textAlign: "center",

    "@media (max-width: 900px)": {
      height: "auto",
      fontSize: 24,
    },

    "@media (max-width: 768px)": {
      fontSize: 18,
      marginBottom: "20px",
      textAlign: "start",
      marginLeft: "10px",
    },
  },

  form: {
    width: "100%",
    alignSelf: "center",
  },

  "@media (max-width: 900px)": {
    padding: "40px 32px 32px",
  },

  "@media (max-width: 768px)": {
    padding: "40px 15px 32px",
  },
};

export const RadioContent: SxProps = {
  maxWidth: 537,
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
  padding: "10px 20px",
  borderRadius: 3,

  border: "1px solid #F5F5F5",
  backgroundColor: "#ebe9e9",

  label: {
    width: "100%",
  },

  "@media (max-width: 400px)": {
    label: {
      span: {
        fontSize: 14,
      },
    },
  },
};

export const RadioInsideContent: SxProps = {
  width: "100%",
  position: "relative",
  zIndex: 0,
  img: {
    borderRadius: 2,
    width: "100%",
    height: 330,
  },

  "@media (max-width: 768px)": {
    img: {
      height: "100%",
    },
  },
};
