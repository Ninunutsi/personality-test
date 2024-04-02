import React from "react";
import Image from "next/image";
import BtnComponent from "../button/btn-component";
import { Box, Typography } from "@mui/material";
import { FixedPos, SuccessStyle } from "./ModalFormStyle";
import { useValuesContext } from "@/app/context/ValuesContext";

const Success = () => {
  const { setShowModal } = useValuesContext();

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <SuccessStyle sx={{ ...FixedPos }} color="white">
      <Image src="./assets/success.svg" alt="success" width={75} height={75} />
      <Typography variant="h5" fontWeight={700} mt={2} mb={1.5}>
        მოთხოვნა მიღებულია
      </Typography>
      <Typography variant="body1" width={"90%"} textAlign={"center"} mb={5}>
        გამარჯვებული გამოვლინდება 19 აპრილს
      </Typography>
      <Box onClick={handleClose}>
        <BtnComponent text="დახურვა" checked={true} />
      </Box>
    </SuccessStyle>
  );
};

export default Success;
