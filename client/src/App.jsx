import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import "./App.css";

import Layout from "./layouts/Layout";
import Register from "./screens/Register/Register";
import Login from "./screens/Login/Login";
import Entrance from './screens/Entrance/Entrance'
import GameOver from './screens/GameOver/GameOver'
import ItemsContainer from './containers/ItemsContainer'


import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";

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
    history.push("/");
  };

  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    removeToken();
    setCurrentUser(null);
    history.push("/");
  };

  return (
    <>

    <Layout>
      

      {/* for testing */}
      {/* <button onClick={handleLogout}>Exit</button> */}
      {/*  */}

      <Route path="/login">
        <Login loginSubmit={loginSubmit} />
      </Route>
      <Route path="/register">
        <Register registerSubmit={registerSubmit} />
      </Route>
      <Route path exact="/">
        <Entrance />
      </Route>
      <ItemsContainer currentUser={currentUser} />
       
    
      
    <Route path="/gameover">
       <GameOver />
        </Route>
        
        </Layout >

    </>

  );
}

export default App;
