import React, { Fragment, Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import CreateUserPage from "./Pages/CreateAccount/CreateUserPage";
import SignInPage from "./Pages/Login/SignInPage";
import Layout from "./Components/Layout/Layout";
import LoadingSpinner from "./Components/UI/LoadingSpinner/LoadingSpinner";
import styles from "./App.module.css";

// Lazy loading of pages
const HomePage = React.lazy(() => import("./Pages/HomePage/HomePage"));
const Account = React.lazy(() => import("./Pages/Account/Account"));
const MyNetwork = React.lazy(() => import("./Pages/MyNetwork/MyNetwork"));
const MemberDetail = React.lazy(() =>
  import("./Pages/MemberDetail/MemberDetail")
);

function App() {
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);

  // apply want to connect function
  // apply profile picture input
  // apply restyling
  // clean code
  // fin

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
          <Suspense
            fallback={
              <div className={styles.spinner}>
                <LoadingSpinner />
              </div>
            }
          >
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
              <Route path={`/:memberId`}>
                <MemberDetail />
              </Route>
            </Switch>
          </Suspense>
        </Layout>
      )}
    </main>
  );
}

export default App;
