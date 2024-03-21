"use client";

import { BoxStyle } from "@/app/mainpage/HomePageStyle";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import BtnComponent from "../button/btn-component";
import { useValuesContext } from "@/app/context/ValuesContext";

const Starter = () => {
  const { setAuth } = useValuesContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setAuth(true);
  };
  return (
    <BoxStyle component="main">
      <Image
        src={"assets/whiteLogo.svg"}
        width={200}
        height={20}
        alt="skillwill logo"
      />
      <Typography variant="h5" component="h5" mt={3} mb={4}>
        გინდა ისწავლო რაც მართლა გამოგადგება, მაგრამ არ იცი საიდან დაიწყო? მაშინ
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <BtnComponent text="გააკეთე ტესტი" href="/test" />
      </Box>
    </BoxStyle>
  );
};

export default Starter;
