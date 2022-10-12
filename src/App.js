import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";

import CreateUserPage from "./Pages/CreateAccount/CreateUserPage";
import HomePage from "./Pages/HomePage/HomePage";
import MyNetwork from "./Pages/MyNetwork/MyNetwork";
import Account from "./Pages/Account/Account";
import SignInPage from "./Pages/Login/SignInPage";
import MemberDetail from "./Pages/MemberDetail/MemberDetail";
import AccountEdit from "./Pages/Account/AccountEdit";
import Layout from "./Components/Layout/Layout";

function App() {
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);

  return (
    <main>
      {!isLoggedIn && (
        <Fragment>
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
            <Route path="*">
              <SignInPage />
            </Route>
          </Switch>
        </Fragment>
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
            {/* <Route path="/edit-profile">
              <AccountEdit />
            </Route> */}
            <Route path={`/:memberId`}>
              <MemberDetail />
            </Route>
          </Switch>
        </Layout>
      )}
    </main>
  );
}

export default App;
