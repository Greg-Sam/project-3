/* eslint-disable no-unused-vars */
// 
import Register from './Pages/Register/Register'
import LogIn from './Pages/LogIn/LogIn'
import LogOut from './Pages/LogOut'
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
import DisplaySeller from './Pages/DisplaySeller'
import SearchResults from './Pages/SearchResults'
import LogOutModal from './Components/LogOutModal/LogOutModal'
import RegFail from './Pages/RegFail'



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

          <Route path="/regfail">
            <RegFail />
          </Route>
         
          <Route path="/modal">
            <LogOutModal />
          </Route>

          <Route path="/login">
            <LogIn />
          </Route>

          <Route path="/logout">
            <LogOut />
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
            <Electronics 
              limit="100"
            />
          </Route>

        <Route exact path="/results">
          <Navbar />
          <Jumbotron 
          />
          <SearchResults />
        </Route>


          <Route exact path="/automotive">
            <Navbar />
            <Jumbotron />
            <Automotive 
              limit="100"
            />
          </Route>

          <Route exact path="/pets">
            <Navbar />
            <Jumbotron />
            <Pets 
              limit="100"
            />
          </Route>

          <Route exact path="/clothing">
            <Navbar />
            <Jumbotron />
            <Clothing 
              limit="100"
            />
          </Route>

          <Route exact path="/household">
            <Navbar />
            <Jumbotron />
            <Household 
              limit="100"
            />
          </Route>

          <Route path="/users/:id"
            render={(props) => < DisplaySeller {...props} />}
          /> 
        </Switch>
      </div>
    </Router>
  )
}

export default App
