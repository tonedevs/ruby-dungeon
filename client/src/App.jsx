import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

import "./App.css";

import Layout from "./layouts/Layout";
import Enter from "./screens/Enter/Enter";
import GameOver from "./screens/GameOver/GameOver";
import MainContainer from "./containers/MainContainer";
import Map from "./components/Map/Map";

import { registerUser } from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const history = useHistory();

  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/rooms/1/");
  };

  useEffect(() => {
    document.title = "Ruby Dungeon"
 }, []);

  return (
    <>
      <Layout>
        <Route path exact="/">
          <Enter registerSubmit={registerSubmit} />
        </Route>
        {currentUser ? (
          <MainContainer currentUser={currentUser} />
        ) : (
          history.push("/")
          )}
        
        <Route path="/gameover">
          <GameOver />
        </Route>
        <Route path="/rooms/1/">
          <div id="first-room-map">
            <Map />
          </div>
        </Route>
      </Layout>
    </>
  );
}

export default App;
