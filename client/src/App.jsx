import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import "./App.css";

import Register from "./screens/Register/Register";
import Login from "./screens/Login/Login";
import Layout from "./containers/Layout";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";
import MainContainer from "./containers/MainContainer";


function App() {
  const [currentUser, setCurrentUser] = useState(null);
 
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const loginSubmit = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/dungeon");
  };

  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/dungeon");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    removeToken();
    setCurrentUser(null);
    history.push("/login");
  };

  return (
    <Switch>
    <Layout currentUser={currentUser} handleLogout={handleLogout}>
      <Route path="/login">
        <Login loginSubmit={loginSubmit} />
      </Route>
      <Route path="/register">
        <Register registerSubmit={registerSubmit} />
      </Route>
      <Route path="/">
        <MainContainer currentUser={currentUser} />
        </Route>
      </Layout>
      </Switch>
  );
}

export default App;
