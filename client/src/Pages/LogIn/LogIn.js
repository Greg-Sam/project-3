import React from "react"
import { useState } from 'react'
import User from '../../utils/UserAPI/UserAPI'
import Navbar from '../../Components/Navbar/Navbar'
import Jumbotron from '../../Components/Jumbotron/Jumbotron'
import Footer from '../../Components/Footer/Footer'
import { Redirect } from "react-router-dom"
import { MDBContainer, MDBInput, MDBBtn, MDBBox } from 'mdbreact';

export default function LogIn() {
  const [inputState, setInputState] = useState({
    username: '',
    password: '',
    isLoggedIn: false
  })

  inputState.loginUser = async (event) => {
    event.preventDefault()
    let userObject = {
      username: inputState.username,
      password: inputState.password
    }
    let {data: users} = await User.loginUser(userObject)
    await localStorage.setItem('token', users.token)
    await localStorage.setItem('userId', users.user)
    await localStorage.setItem('isLoggedIn', users.isLoggedIn)
    if (users.isLoggedIn) {setInputState({ ...inputState, isLoggedIn: true })}
  }

  inputState.handleInputChange = (event) => {
    setInputState({ ...inputState, [event.target.name]: event.target.value })
  }
  return (
    
    <>
      {
      inputState.isLoggedIn !== true
        ?
        <>
    <Navbar />
    <Jumbotron />
    <MDBContainer>
     
      <MDBBox display="flex" justifyContent="center"> 
       {/* <MDBRow className="">
         <MDBCol md="6"> */}
           <form>
             <p className="h5 text-center mb-4">Sign In</p>
             <div className="grey-text">
               <MDBInput 
              label="Type your username" 
              icon="user" 
              // group type="email" 
                value={inputState.username}
                onChange={inputState.handleInputChange}
                id="username"
                
                name="username"
                autoComplete="username"
              validate error="wrong"
              success="right" />
              <MDBInput 
              label="Type your password" 
              icon="lock" 
                value={inputState.password}
                onChange={inputState.handleInputChange}
                name="password"
                
                id="password"
                autoComplete="current-password"
              group type="password" 
              validate />
            </div>
            <div className="text-center">
              <MDBBtn type="submit" onClick={(e) => inputState.loginUser(e)} >Login</MDBBtn>
            </div>
          </form>
        {/* </MDBCol>
      </MDBRow> */}
      </MDBBox>
    </MDBContainer>
     <Footer />
    </>
    
    :
   <Redirect to="/" />
    }
    
  </>
  );
};

