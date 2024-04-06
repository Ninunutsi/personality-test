"use client";

import React, { ChangeEvent, useRef, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { ModalFormBox, Overlay, FixedPos, ButtonProps } from "./ModalFormStyle";
import { useValuesContext } from "@/app/context/ValuesContext";
import { createClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseUrl } from "@/api/Api";
import BtnComponent from "../button/btn-component";
import Success from "./Success";
import RefreshIcon from "@mui/icons-material/Refresh";
import CloseIcon from "@mui/icons-material/Close";

const supabase = createClient(supabaseUrl, supabaseKey);

const ModalForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const numberRef = useRef<HTMLInputElement | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [inputField, setInputField] = useState<boolean>(false);
  const { lastValue, showClose } = useValuesContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      nameRef.current?.value ||
      lastNameRef.current?.value ||
      emailRef.current?.value
    ) {
      setInputField(false);
    }
  };

  const handleNumChange = (e: ChangeEvent<HTMLInputElement>) => {
    numberRef.current?.value ? setInputField(false) : setInputField(true);

    const inputValue = e.target.value;
    const numbersOnly = /^\d*$/;

    if (!inputValue.match(numbersOnly)) {
      e.target.value = inputValue.replace(/[^0-9]/g, "");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name: string = nameRef.current?.value || "";
    const last_name: string = lastNameRef.current?.value || "";
    const email: string = emailRef.current?.value || "";
    const number: string = numberRef.current?.value || "";
    const result: string = lastValue;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      name === "" ||
      last_name === "" ||
      email === "" ||
      number === "" ||
      number.trim().length < 9 ||
      !emailRegex.test(email)
    ) {
      setSuccess(false);
      setInputField(true);
      return;
    } else {
      setInputField(false);
    }

    setLoading(true);

    const { error } = await supabase
      .from("QuizData")
      .insert([{ name, last_name, number, email, result }]);

    setLoading(false);

    error ? setSuccess(false) : setSuccess(true);

    if (nameRef.current) nameRef.current.value = "";
    if (lastNameRef.current) lastNameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (numberRef.current) numberRef.current.value = "";
  };

  const closeModal = () => {
    success ? onClose() : onClose();
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
          pt={{ xs: 1.5 }}
          component="form"
          onSubmit={handleSubmit}
        >
          {showClose && (
            <Box alignSelf={"end"} onClick={closeModal}>
              <CloseIcon />
            </Box>
          )}
          <Box className="title">
            <Typography mb={1.5} variant="h5">
              შეიყვანე პირადი მონაცემები და დაელოდე გათამაშებას.
            </Typography>
            <Typography mb={1} variant="h6">
              გამარჯვებული გამოვლინდება 19 აპრილს.
            </Typography>
          </Box>
          <Box className="namesInput">
            <TextField
              className="inputField"
              type="text"
              label="სახელი"
              placeholder="სახელი"
              inputRef={nameRef}
              onChange={handleChange}
            />
            <TextField
              className="inputField"
              label="გვარი"
              placeholder="გვარი"
              type="text"
              inputRef={lastNameRef}
              onChange={handleChange}
            />
          </Box>
          <TextField
            className="inputField"
            label="ნომერი"
            placeholder="ნომერი"
            inputRef={numberRef}
            type="text"
            onChange={handleNumChange}
          />
          <TextField
            className="inputField"
            label="მეილი"
            placeholder="მეილი"
            inputRef={emailRef}
            type="text"
            onChange={handleChange}
          />
          <Box width={"100%"} mt={2.5} sx={{ button: { width: "100%" } }}>
            <BtnComponent
              text={
                loading ? (
                  <Box sx={{ ...ButtonProps }}>
                    გაგზავნა
                    <RefreshIcon />
                  </Box>
                ) : (
                  "გაგზავნა"
                )
              }
              checked={true}
              inputField={inputField}
            />
          </Box>
        </ModalFormBox>
      )}
      <Overlay onClick={closeModal}></Overlay>
    </Box>
  );
};

export default ModalForm;
