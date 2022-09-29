import React, { useState, useEffect } from "react";
import { db } from "./Firebase";

const AuthContext = React.createContext({
  checkUser: [],
  fetchData: () => {},
});

export const AuthContextProvider = (props) => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState();
  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
    const storedLoggedInUser = localStorage.getItem("loggedInUser");
    if (storedUserLoggedInInfo === "1") {
      setLoginStatus(true);
    }

    if (storedLoggedInUser !== "") {
      setUser(storedLoggedInUser);
    }
  }, []);

  //////////////////////////////

  const database = db.collection("Users");
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
  }, [loader]);

  return (
    <AuthContext.Provider
      value={{
        checkUser: data,
        fetchData: getData,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
