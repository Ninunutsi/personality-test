"use client";

import { Box, styled } from "@mui/material";

export const ModalFormBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  zIndex: 6,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 20,
  backgroundColor: "white",
  borderRadius: 20,

  transform: "translate(-50%, -50%)",
  ".inputField": { margin: 5, width: "100%", maxHeight: 45 },

  svg: {
    position: "absolute",
    top: 48,
    right: 45,
    cursor: "pointer",

    "&:hover": {
      color: "red",
    },
  },
});

export const Overlay = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 5,
});
