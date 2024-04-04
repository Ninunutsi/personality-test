"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { ValuesContextType } from "../interfaces/interfaces";

const ValContext = createContext<ValuesContextType | undefined>(undefined);

export const ValuesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [attributes, setAttributes] = useState<string[]>([]);
  const [lastValue, setLastValue] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showClose, setShowClose] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth < 600 ? setShowClose(true) : setShowClose(false);
    });
  }, []);

  useEffect(() => {
    if (showModal) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [showModal]);

  return (
    <ValContext.Provider
      value={{
        attributes,
        setAttributes,
        lastValue,
        setLastValue,
        showModal,
        setShowModal,
        showClose,
        setShowClose,
      }}
    >
      {children}
    </ValContext.Provider>
  );
};

export const useValuesContext = (): ValuesContextType => {
  const context = useContext(ValContext);
  if (!context) {
    throw new Error("useValuesContext must be used within a ValuesProvider");
  }
  return context;
};
