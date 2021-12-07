import React, { createContext, useState, useEffect } from "react";

export const SignInContext = createContext(null);

export const SignInContextProvider = ({ children }) => {
  const [signIn, setSignIn] = useState([]);

  return (
    <SignInContext.Provider value={{ signIn, setSignIn }}>
      {children}
    </SignInContext.Provider>
  );
};
