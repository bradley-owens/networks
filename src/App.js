import React, { Fragment, useState } from "react";
import CreateUserPage from "./Components/CreateUser/CreateUserPage";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (users) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
    console.log(users);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <Fragment>
      <main>
        {!isLoggedIn && <CreateUserPage onLogin={loginHandler} />}
        {isLoggedIn && <HomePage />}
      </main>
    </Fragment>
  );
}

export default App;
