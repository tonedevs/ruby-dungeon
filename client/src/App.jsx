import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import "./App.css";

import Layout from "./layouts/Layout";
import Register from "./screens/Register/Register";
import Login from "./screens/Login/Login";
import Entrance from "./screens/Entrance/Entrance";
import GameOver from "./screens/GameOver/GameOver";
import ItemsContainer from "./containers/ItemsContainer";

import {
  // loginUser,
  registerUser,
  // verifyUser,
  // removeToken,
} from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const history = useHistory();

  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/rooms/1/")
  };

  return (
    <>
      <Layout>
        <Route path exact="/">
          <Register registerSubmit={registerSubmit} />
        </Route>
        {currentUser ? <ItemsContainer currentUser={currentUser} /> : history.push("/")}
        <Route path="/gameover">
          <GameOver />
          </Route>
      </Layout>
    </>
  );
}

export default App;
