import React, { Fragment, useState, useEffect } from "react";
import CreateUserPage from "./Components/CreateUser/CreateUserPage";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (users) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
    setUser(users);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <Fragment>
      <main>
        {!isLoggedIn && <CreateUserPage onLogin={loginHandler} />}
        {isLoggedIn && <HomePage savedUser={user} onLogOut={logoutHandler} />}
      </main>
    </Fragment>
  );
}

export default App;
