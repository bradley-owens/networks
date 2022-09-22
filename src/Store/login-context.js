import React, { useState, useEffect } from "react";
import { db } from "./Firebase";

const AuthContext = React.createContext({
  checkUser: [],
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
    const storedLoggedInUser = localStorage.getItem("loggedInUser");
    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }

    if (storedLoggedInUser !== "") {
      setUser(storedLoggedInUser);
    }
  }, []);

  const loginHandler = (loggedInUser) => {
    setIsLoggedIn(true);
    setUser(loggedInUser);
    localStorage.setItem("isLoggedIn", "1");
    localStorage.setItem("loggedInUser", user);
    console.log(user);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
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
        checkUser: data,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
