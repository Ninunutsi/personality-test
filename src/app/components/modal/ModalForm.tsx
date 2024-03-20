"use client";

import { Box, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import { ModalFormBox, Overlay } from "./ModalFormStyle";
import BtnComponent from "../button/btn-component";
import CloseIcon from "@mui/icons-material/Close";

const ModalForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const userNameRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const UserInfo = {
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      userName: userNameRef.current?.value || "",
    };

    console.log(UserInfo);

    nameRef.current!.value = "";
    emailRef.current!.value = "";
    userNameRef.current!.value = "";
  };

  return (
    <Box>
      <ModalFormBox width={500} p={5} component="form" onSubmit={handleSubmit}>
        <Box alignSelf={"start"}>
          <Typography mb={2} variant="h5">
            გამოგვიგზავნე მონაცემები
          </Typography>
          <CloseIcon />
        </Box>
        <TextField
          className="inputField"
          label="სახელი"
          placeholder="სახელი"
          inputRef={nameRef}
        />
        <TextField
          className="inputField"
          label="მეილი"
          placeholder="მეილი"
          inputRef={emailRef}
        />
        <TextField
          className="inputField"
          label="იუზერნეიმი"
          placeholder="იუზერნეიმი"
          inputRef={userNameRef}
        />
        <Box alignSelf={"start"} mt={1}>
          <BtnComponent text="გაგზავნა" />
        </Box>
      </ModalFormBox>
      <Overlay></Overlay>
    </Box>
  );
};

export default ModalForm;
