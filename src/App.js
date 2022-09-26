import React, { Fragment, useContext, useEffect } from "react";

import CreateUserPage from "./Components/CreateUser/CreateUserPage";
import HomePage from "./Components/HomePage/HomePage";
import AuthContext from "./Store/login-context";
import { useSelector } from "react-redux";

function App() {
  const ctx = useContext(AuthContext);
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);

  const users = ctx.checkUser;

  useEffect(() => {
    ctx.fetchData();
  }, [users]);

  return (
    <Fragment>
      <main>
        {!isLoggedIn && <CreateUserPage />}
        {isLoggedIn && <HomePage />}
      </main>
    </Fragment>
  );
}

export default App;
