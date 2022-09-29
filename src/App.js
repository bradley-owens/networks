import React, { Fragment, useState } from "react";
import CreateUserPage from "./Components/CreateUser/CreateUserPage";
import HomePage from "./Components/HomePage/HomePage";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);

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
