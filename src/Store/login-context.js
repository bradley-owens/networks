import React, { useState, useEffect } from "react";
import {
  ref,
  set,
  get,
  update,
  remove,
  child,
  getDatabase,
} from "firebase/database";

const AuthContext = React.createContext({
  checkUser: [],
  fetchData: () => {},
  loggedInStatus: false,
});

export const AuthContextProvider = (props) => {
  //////////////////////////////

  const database = getDatabase();

  const [data, setData] = useState([]);
  const [loader, setloader] = useState(true);

  const getData = () => {
    const dbRef = ref(database);
    const items = [];
    get(child(dbRef, "Users/")).then((snapshot) => {
      const userDatabase = snapshot.val();

      Object.entries(userDatabase).forEach((userAcc) => {
        items.push({ info: userAcc[1], id: userAcc[0] });
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
