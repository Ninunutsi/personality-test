"use client";

import { Box, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { ModalFormBox, Overlay, FixedPos } from "./ModalFormStyle";
import BtnComponent from "../button/btn-component";
import Success from "./Success";

const ModalForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const lastName = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const userNameRef = useRef<HTMLInputElement | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const UserInfo = {
      name: nameRef.current?.value || "",
      lastName: lastName.current?.value || "",
      email: emailRef.current?.value || "",
      userName: userNameRef.current?.value || "",
    };

    console.log(UserInfo);
    setSuccess(true);

    nameRef.current!.value = "";
    lastName.current!.value = "";
    emailRef.current!.value = "";
    userNameRef.current!.value = "";
  };

  return (
    <Box>
      {success ? (
        <Success />
      ) : (
        <ModalFormBox
          sx={{ ...FixedPos }}
          width={{ md: 500, sm: 400, xs: "100%" }}
          height={{ md: "auto", sm: "auto", xs: "100%" }}
          p={{ md: 5, sm: 4, xs: 2 }}
          component="form"
          onSubmit={handleSubmit}
        >
          <Box className="title">
            <Typography mb={3} variant="h5">
              პერსონალური მონაცემები
            </Typography>
            <Typography mb={2} variant="h6">
              შეიყვანეთ თქვენი მონაცემები
            </Typography>
          </Box>
          <Box className="namesInput">
            <TextField
              className="inputField"
              label="სახელი"
              placeholder="სახელი"
              inputRef={nameRef}
            />
            <TextField
              className="inputField"
              label="გვარი"
              placeholder="გვარი"
              inputRef={lastName}
            />
          </Box>
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
          <Box width={"100%"} mt={4} sx={{ button: { width: "100%" } }}>
            <BtnComponent text="გაგზავნა" checked={true} />
          </Box>
        </ModalFormBox>
      )}
      <Overlay onClick={onClose}></Overlay>
    </Box>
  );
};

export default ModalForm;
