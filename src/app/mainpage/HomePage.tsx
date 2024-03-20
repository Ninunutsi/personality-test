"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/whiteLogo.svg";
import BtnComponent from "../components/button/btn-component";
import { Box, Typography } from "@mui/material";
import { BoxStyle } from "./HomePageStyle";
import { useValuesContext } from "../context/ValuesContext";

const HomePage = () => {
  const { setAuth } = useValuesContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setAuth(true);
  };

  return (
    <Box>
      <BoxStyle component="main">
        <Image src={logo} alt="skillwill logo" />
        <Typography variant="h5" component="h5" mt={3} mb={4}>
          გინდა ისწავლო რაც მართლა გამოგადგება, მაგრამ არ იცი საიდან დაიწყო?
          მაშინ
        </Typography>
        <form onSubmit={handleSubmit}>
          <BtnComponent text="გააკეთე ტესტი" href="/test" />
        </form>
      </BoxStyle>
    </Box>
  );
};

export default HomePage;
