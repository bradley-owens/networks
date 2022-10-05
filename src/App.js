import React, { Fragment } from "react";
import CreateUserPage from "./Components/CreateUser/CreateUserPage";
import HomePage from "./Components/HomePage/HomePage";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import MyNetwork from "./Components/MyNetwork/MyNetwork";
import Account from "./Components/Account/Account";

function App() {
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);

  return (
    <main>
      {!isLoggedIn && <CreateUserPage />}
      {/* {isLoggedIn && <HomePage />} */}
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/my-network">
          <MyNetwork />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
