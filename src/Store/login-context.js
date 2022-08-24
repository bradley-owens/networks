import React, { useState, useEffect } from "react";
import { db } from "./Firebase";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogOut: () => {},
  onLogin: (loggedInUser) => {},
  onCreateUser: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (loggedInUser) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
    setUser(loggedInUser);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  /////////////////////////////////////////////////////

  const database = db.collection("Users");

  const createUserHandler = (createdUser) => {
    database.add({
      email: createdUser.userName,
      pin: createdUser.password,
      name: createdUser.name,
      language: createdUser.language,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogOut: logoutHandler,
        onLogin: loginHandler,
        onCreateUser: createUserHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
