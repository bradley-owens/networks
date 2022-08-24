import React, { Fragment, useContext, useState, useEffect } from "react";
import { db } from "./Store/Firebase";
import CreateUserPage from "./Components/CreateUser/CreateUserPage";
import HomePage from "./Components/HomePage/HomePage";
import AuthContext from "./Store/login-context";

function App() {
  const ctx = useContext(AuthContext);

  const reference = db.collection("Users");
  const [data, setData] = useState([]);
  const [loader, setloader] = useState(true);

  const getData = () => {
    reference.onSnapshot((snap) => {
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
    console.log(data);
  }, [loader]);

  return (
    <Fragment>
      <main>
        {!ctx.isLoggedIn && (
          <CreateUserPage
          // onComplete={reference}
          />
        )}
        {ctx.isLoggedIn && <HomePage />}
      </main>
    </Fragment>
  );
}

export default App;
