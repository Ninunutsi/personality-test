"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ValuesContextType } from "../interfaces/interfaces";

const ValContext = createContext<ValuesContextType | undefined>(undefined);

export const ValuesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [attributes, setAttributes] = useState<string[]>([]);

  return (
    <ValContext.Provider value={{ attributes, setAttributes }}>
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
