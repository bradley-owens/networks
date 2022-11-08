import React, { useState, useEffect, useCallback } from "react";
import { ref, get, update, child, getDatabase } from "firebase/database";

const AuthContext = React.createContext({
  checkUser: [],
  fetchData: () => {},
  // getConnections: [],
});

export const AuthContextProvider = (props) => {
  //////////////////////////////
  const database = getDatabase();

  const [data, setData] = useState([]);
  const [loader, setloader] = useState(true);

  const getData = useCallback(() => {
    const dbRef = ref(database);
    const items = [];
    get(child(dbRef, "Users/")).then((snapshot) => {
      const userDatabase = snapshot.val();

      Object.entries(userDatabase).map((userAcc) => {
        items.push(userAcc[1]);
      });
      setData(items);
      setloader(false);

      return items;
    });
  }, [loader]);

  // const getConnections = useCallback(
  //   (id) => {
  //     const dbRef = ref(database);
  //     get(child(dbRef, "Users/" + id + "/connections/following/")).then(
  //       (snapshot) => {
  //         const userDatabase = snapshot.val();

  //         // Object.entries(userDatabase).forEach((userAcc) => {
  //         //   items.push(userAcc[1]);
  //         // });
  //         // setData(items);
  //         // setloader(false);
  //         console.log(userDatabase);
  //       }
  //     );
  //   },
  //   [database]
  // );
  useEffect(() => {
    getData();
  }, [getData, database]);

  return (
    <AuthContext.Provider
      value={{
        checkUser: data,
        fetchData: getData,
        // getConnections: getConnections,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
