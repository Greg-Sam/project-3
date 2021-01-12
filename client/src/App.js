/* eslint-disable no-unused-vars */
import SignUp from './Components/SignUp/SignUp'
import SignIn from './Components/SignIn/SignIn'
import Jumbotron from './Components/Jumbotron/Jumbotron'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import NewPost from './Pages/NewPost'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register">
            <SignUp />
          </Route>

          <Route path="/login">
            <SignIn />
          </Route>

          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/sell">
            <NewPost />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
