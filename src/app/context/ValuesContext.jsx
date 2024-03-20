'use client'
import React, { createContext, useContext, useState } from 'react';

const ValContext = createContext();

export const ValuesProvider = ({ children }) => {
  const [attributes, setAttributes] = useState([]);
  const [auth, setAuth] = useState(false)

  return (
    <ValContext.Provider value={{ attributes, setAttributes, setAuth, auth }}>
      {children}
    </ValContext.Provider>
  );
};

export const useValuesContext = () => useContext(ValContext);
