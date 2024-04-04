"use client";

import { Box, SxProps, keyframes, styled } from "@mui/material";

export const FixedPos: SxProps = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 6,
};

export const ModalFormBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 20,
  backgroundColor: "white",
  borderRadius: 10,

  ".inputField": { margin: 5, width: "100%", maxHeight: 45 },

  ".namesInput": {
    width: "100%",
    display: "flex",
    gap: 12,

    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: 26,
    },

    ".inputField": {
      margin: 0,
      width: "100%",
    },
  },

  ".title": {
    width: "100%",
    textAlign: "center",

    h5: {
      fontWeight: "bold",
    },
  },

  "@media (max-width: 600px)": {
    borderRadius: 0,
  },
});

export const Overlay = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "#000000B3",
  zIndex: 5,
});

export const SuccessStyle = styled(Box)({
  backgroundColor: "#ffffff",
  color: "#000",
  padding: 30,
  borderRadius: 6,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "@media (max-width: 768px)": {
    paddingTop: 120,
    width: "100%",
    height: "100%",
  },
});

export const inputBox: SxProps = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",

  ".inputField": {
    width: "100%",
  },

  "@media (max-width: 1023px)": {
    flexDirection: "column",
    alignItems: "start",
    gap: 2,

    ".inputField": {
      width: "100%",
    },
  },
};

export const StarRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ButtonProps: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  color: "white",

  svg: {
    animation: `${StarRotate} 1s linear infinite`,
  },
};
