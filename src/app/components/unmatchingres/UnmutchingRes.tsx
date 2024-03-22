import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const UnmutchingRes = () => {
  return (
    <Box
      position={"absolute"}
      top={"50%"}
      left={"50%"}
      sx={{ transform: "translate(-50%, -50%)" }}
    >
      <Typography variant="h5" style={{ color: "white" }}>
        შედეგების სანახავად ჯერ დაასრულეთ
        <Link href={"/"} style={{ color: "#ab7df4", marginLeft: 5 }}>
          ტესტი
        </Link>
      </Typography>
    </Box>
  );
};

export default UnmutchingRes;
