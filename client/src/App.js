/* eslint-disable no-unused-vars */
import SignUp from './Components/SignUp/SignUp'
import SignIn from './Components/SignIn/SignIn'
import Jumbotron from './Components/Jumbotron/Jumbotron'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import NewPost from './Pages/NewPost'
import Contributors from './Pages/Contributors'
import DisplayItem from './Pages/DisplayItem'

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

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/sell">
            <NewPost />
          </Route>

          <Route path="/contributors">
            <Contributors />
          </Route>

          <Route path="/displayItem">
            <DisplayItem />
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App
