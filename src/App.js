import React, { Fragment, useContext } from "react";
import CreateUserPage from "./Components/CreateUser/CreateUserPage";
import HomePage from "./Components/HomePage/HomePage";
import AuthContext from "./Store/login-context";
import { useSelector } from "react-redux";

function App() {
  const ctx = useContext(AuthContext);
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);

  return (
    <Fragment>
      <main>
        {/* {!ctx.isLoggedIn && <CreateUserPage />}
        {ctx.isLoggedIn && <HomePage />} */}
        {!isLoggedIn && <CreateUserPage />}
        {isLoggedIn && <HomePage />}
      </main>
    </Fragment>
  );
}

export default App;
