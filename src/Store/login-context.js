import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  createdUsers: [],
  isLoggedIn: false,
  onLogOut: () => {},
  onLogin: (newUser) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const allUsers = [];

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

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogOut: logoutHandler,
        onLogin: loginHandler,
        createdUsers: allUsers,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
