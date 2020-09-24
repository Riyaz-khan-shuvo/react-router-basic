import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Friend from './Components/Friend/Friend';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import FriendDetail from './Components/FriendDetail/FriendDetail';
function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
