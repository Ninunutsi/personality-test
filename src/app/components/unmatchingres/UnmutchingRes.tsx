import React from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

const UnmutchingRes = () => {
  return (
    <Box
      position={"absolute"}
      top={"40%"}
      left={"50%"}
      sx={{ transform: "translate(-50%, -50%)" }}
    >
      <Typography
        color={"black"}
        fontWeight={"bold"}
        sx={{
          fontSize: {
            xs: 16,
            sm: "h6.fontSize",
            md: "h5.fontSize",
          },
        }}
      >
        შედეგების სანახავად ჯერ დაასრულეთ
        <Link href={"/"} style={{ color: "#ab7df4", marginLeft: 5 }}>
          ტესტი
        </Link>
      </Typography>
    </Box>
  );
};

export default UnmutchingRes;
