/* eslint-disable no-unused-vars */
// 
import Register from './Pages/Register/Register'
import LogIn from './Pages/LogIn/LogIn'
import Jumbotron from './Components/Jumbotron/Jumbotron'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import NewPost from './Pages/NewPost'
import Contributors from './Pages/Contributors'
import DisplayItem from './Pages/DisplayItem'
import Electronics from './Pages/Electronics'
import Automotive from './Pages/Automotive'
import Household from './Pages/Household'
import Pets from './Pages/Pets'
import Clothing from './Pages/Clothing'


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
            <Register />
          </Route>

          <Route path="/login">
            <LogIn />
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

          <Route path="/items/:id" 
            render={(props) => < DisplayItem {...props} />} 
          /> 

          <Route path="/electronics">
            <Navbar />
            <Jumbotron />
            <Electronics />
          </Route>

          <Route exact path="/automotive">
            <Navbar />
            <Jumbotron />
            <Automotive />
          </Route>

          <Route exact path="/pets">
            <Navbar />
            <Jumbotron />
            <Pets />
          </Route>

          <Route exact path="/clothing">
            <Navbar />
            <Jumbotron />
            <Clothing />
          </Route>

          <Route exact path="/household">
            <Navbar />
            <Jumbotron />
            <Household />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
