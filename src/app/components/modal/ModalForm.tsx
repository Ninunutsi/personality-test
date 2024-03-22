"use client";

import { Box, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import { ModalFormBox, Overlay } from "./ModalFormStyle";
import BtnComponent from "../button/btn-component";
import CloseIcon from "@mui/icons-material/Close";

const ModalForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
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
      <ModalFormBox
        width={{ md: 500, sm: 400, xs: "100%" }}
        height={{ md: "auto", sm: "auto", xs: "100%" }}
        p={{ md: 5, sm: 4, xs: 2 }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Box alignSelf={"start"} className="title">
          <Typography mb={2} variant="h6">
            გამოგვიგზავნე მონაცემები
          </Typography>
          <Box onClick={onClose}>
            <CloseIcon />
          </Box>
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
          type="email"
        />
        <TextField
          className="inputField"
          label="იუზერნეიმი"
          placeholder="იუზერნეიმი"
          inputRef={userNameRef}
        />
        <Box alignSelf={"start"} mt={4}>
          <BtnComponent text="გაგზავნა" />
        </Box>
      </ModalFormBox>
      <Overlay onClick={onClose}></Overlay>
    </Box>
  );
};

export default ModalForm;
