import React, { useState, useEffect } from "react";
import { db } from "./Firebase";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogOut: () => {},
  onLogin: (loggedInUser) => {},
  onCreateUser: () => {},
  onSignIn: [],
  signedIn: "",
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
    console.log(user);
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

  //////////////////////////////////////////////////////

  const [data, setData] = useState([]);
  const [loader, setloader] = useState(true);

  const getData = () => {
    database.onSnapshot((snap) => {
      const items = [];
      snap.forEach((doc) => {
        items.push(doc.data());
      });

      setData(items);
      setloader(false);
    });
  };

  useEffect(() => {
    getData();
    // console.log(data);
  }, [loader]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogOut: logoutHandler,
        onLogin: loginHandler,
        onCreateUser: createUserHandler,
        onSignIn: data,
        signedIn: user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
