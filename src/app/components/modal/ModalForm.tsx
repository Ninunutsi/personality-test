"use client";

import React, { useRef, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { ModalFormBox, Overlay, FixedPos } from "./ModalFormStyle";
import { useValuesContext } from "@/app/context/ValuesContext";
import { createClient } from "@supabase/supabase-js";
import BtnComponent from "../button/btn-component";
import Success from "./Success";

const supabaseUrl = "https://qjpwnkassxsukpcwaakr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqcHdua2Fzc3hzdWtwY3dhYWtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2NDcxNTMsImV4cCI6MjAyNzIyMzE1M30.WmE-4L4Z-zrFIuszbt9SWOe60W6DG6Y-eJ4l0ySopXw";

const supabase = createClient(supabaseUrl, supabaseKey);

const ModalForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const lastName = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const numberRef = useRef<HTMLInputElement | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { lastValue } = useValuesContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name: string = nameRef.current?.value || "";
    const last_name: string = lastName.current?.value || "";
    const email: string = emailRef.current?.value || "";
    const number: string = numberRef.current?.value || "";
    const result: string = lastValue;

    const { error } = await supabase
      .from("DATA")
      .insert([{ name, last_name, email, number, result }]);

    if (error) {
      console.log("Bad Request");

      setSuccess(false);
    } else {
      setSuccess(true);
    }

    nameRef.current!.value = "";
    lastName.current!.value = "";
    emailRef.current!.value = "";
    numberRef.current!.value = "";
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
          pt={{ xs: 15 }}
          component="form"
          onSubmit={handleSubmit}
        >
          <Box className="title">
            <Typography mb={1} variant="h5">
              პერსონალური მონაცემები
            </Typography>
            <Typography mb={1} variant="h6">
              შეიყვანეთ თქვენი მონაცემები
            </Typography>
          </Box>
          <Box className="namesInput">
            <TextField
              className="inputField"
              sx={{ borderColor: "red" }}
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
            label="ნომერი"
            placeholder="ნომერი"
            inputRef={numberRef}
            type="text"
          />
          <TextField
            className="inputField"
            label="მეილი"
            placeholder="მეილი"
            inputRef={emailRef}
            type="email"
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
