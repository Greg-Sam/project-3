import React from "react"
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBBox } from 'mdbreact'
import Navbar from '../../Components/Navbar/Navbar'
import Jumbotron from '../../Components/Jumbotron/Jumbotron'
import User from '../../utils/UserAPI/UserAPI'
import { useState } from 'react'

export default function Register() {
  const [inputState, setInputState] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  })

  inputState.postUser = async (event) => {
    event.preventDefault()
    console.log('ping')
    let userObject = {
      name: inputState.name,
      username: inputState.username,
      email: inputState.email,
      password: inputState.password
    }
    let users = await User.createUser(userObject)
    console.log(users)
  }

  inputState.handleInputChange = (event) => {
    setInputState({ ...inputState, [event.target.name]: event.target.value })
  }
  return (
    <>
    <Navbar />
    <Jumbotron />
    
    <MDBContainer>
      <MDBBox display="flex" justifyContent="center">
          <form>
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
              <MDBInput 
              label="Your name" 
              icon="user" 
              group type="text" 
              fullWidth
              value={inputState.name}
              onChange={inputState.handleInputChange}
              id="Name"
              name="name"
              validate error="wrong"
              success="right" />
              <MDBInput 
              label="Your email" 
              icon="envelope" 
              group type="email" 
              fullWidth
              value={inputState.email}
              onChange={inputState.handleInputChange}
              id="email"
              name="email"
              validate error="wrong"
              success="right" />
              <MDBInput 
              label="User Name" icon="hand-point-right" 
              group type="text" 
              required fullWidth
              value={inputState.username}
              onChange={inputState.handleInputChange}
              id="username"
              name="username"
              validate error="wrong" 
              success="right" />
              <MDBInput 
                label="Your password" 
                icon="lock" 
                value={inputState.password}
                onChange={inputState.handleInputChange}
                name="password"
                type="password"
                id="password"
                // group type="password" 
                validate />
            </div>
            <div className="text-center">
              <MDBBtn
               type="submit" 
               color="primary"
              //  className={classes.submit}
               onClick={(e) => inputState.postUser(e)}
               >Register</MDBBtn>
            </div>
          </form>
        </MDBBox>
    </MDBContainer>
    </>
  );
};

