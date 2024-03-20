'use client'
import React, { createContext, useContext, useState } from 'react';

const ValContext = createContext();

export const ValuesProvider = ({ children }) => {
  const [attributes, setAttributes] = useState([]);

  return (
    <ValContext.Provider value={{ attributes, setAttributes }}>
      {children}
    </ValContext.Provider>
  );
};

export const useValuesContext = () => useContext(ValContext);
