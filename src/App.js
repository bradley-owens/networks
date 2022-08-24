import React, { Fragment, useContext } from "react";
import { firestore, firebase } from "./Firebase";
import CreateUserPage from "./Components/CreateUser/CreateUserPage";
import HomePage from "./Components/HomePage/HomePage";
import AuthContext from "./Store/login-context";

function App() {
  const ctx = useContext(AuthContext);

  const reference = firestore.collection("Users");

  console.log(reference);
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
