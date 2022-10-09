import React, { Fragment } from "react";
import CreateUserPage from "./Components/CreateUser/CreateUserPage";
import HomePage from "./Pages/HomePage/HomePage";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import MyNetwork from "./Pages/MyNetwork/MyNetwork";
import Account from "./Pages/Account/Account";
import Layout from "./Components/Layout/Layout";
import AccountEdit from "./Pages/Account/AccountEdit";
import { Redirect } from "react-router-dom";
import SignInPage from "./Components/SignIn/SignInPage";

function App() {
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);

  return (
    <main>
      {!isLoggedIn && (
        <Switch>
          <Route exact path="/">
            <Redirect to="/sign-in" />
          </Route>
          <Route path="/sign-in">
            <SignInPage />
          </Route>
          <Route path="/create-user">
            <CreateUserPage />
          </Route>
        </Switch>
      )}

      {isLoggedIn && (
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/my-network">
              <MyNetwork />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/edit-profile">
              <AccountEdit />
            </Route>
          </Switch>
        </Layout>
      )}
    </main>
  );
}

export default App;
