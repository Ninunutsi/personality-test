"use client";

import { SxProps, keyframes } from "@mui/material";

export const StarRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

export const ContentBox: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 4,
  width: "100%",
  padding: "64px",

  "@media (max-width: 1024px)": {
    flexDirection: "column-reverse",
    gap: "20px",
    padding: "0 20px 20px",
    textAlign: "center",
  },
};

export const TextContent: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  ".Airpods": {
    span: {
      display: "inline-block",
      fontSize: "24px",
      fontWeight: 700,

      "@media (max-width:900px)": {
        fontSize: "18px",
      },
    },
  },

  "@media (max-width: 900px)": {
    flexDirection: "column",
    gap: "10px",
  },
};

export const ContentStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  color: "black",

  "@media (max-width: 900px)": {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    padding: "0 30px 30px",
  },

  "@media (max-width: 768px)": {
    padding: "0 15px 15px",
  },
};

export const ButtonForm: SxProps = {
  "@media (max-width: 1024px)": {
    width: "100%",

    button: {
      width: "100%",
    },
  },
};
