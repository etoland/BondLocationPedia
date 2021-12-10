import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, createContext, useState } from "react";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(false);
  const { user, isAuthenticated } = useAuth0();

  console.log(currentUser, "slice");
  console.log(user, "food");
  useEffect(() => {
    if (isAuthenticated && user) {
      fetch(`/profile/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "soda");
          setCurrentUser(data.userFound);
          setStatus("idle");
        })
        .catch((err) => {
          setStatus("idle");
          setError(!error);
        });
    } else {
      setCurrentUser(null);
    }
  }, [user]);
  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContext;
