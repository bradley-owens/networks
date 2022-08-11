import React, { Fragment, useContext } from "react";
import CreateUserPage from "./Components/CreateUser/CreateUserPage";
import HomePage from "./Components/HomePage/HomePage";
import AuthContext from "./Store/login-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <Fragment>
      <main>
        {!ctx.isLoggedIn && <CreateUserPage />}
        {ctx.isLoggedIn && <HomePage />}
      </main>
    </Fragment>
  );
}

export default App;
