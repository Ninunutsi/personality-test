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
    fontSize: 40,
    fontWeight: 700,
    color: "#000",
    marginBottom: 10,
    maxWidth: 750,
    textAlign: "center",

    "@media (max-width: 900px)": {
      height: "auto",
      fontSize: 32,
    },

    "@media (max-width: 768px)": {
      fontSize: 22,
      marginBottom: 5,
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
        fontSize: 12,
      },
    },
  },
};

export const RadioInsideContent: SxProps = {
  width: "100%",

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
