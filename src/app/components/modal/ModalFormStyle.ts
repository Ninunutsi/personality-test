"use client";

import { Box, styled } from "@mui/material";

export const ModalFormBox = styled(Box)({
  position: "fixed",
  top: "50%",
  left: "50%",
  zIndex: 6,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 20,
  backgroundColor: "white",
  borderRadius: 10,

  transform: "translate(-50%, -50%)",

  ".namesInput": {
    display: "flex",
    gap: 12,

    ".inputField": {
      margin: 0,
      width: "50%",
    },
  },

  ".inputField": { margin: 5, width: "100%", maxHeight: 45 },

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
