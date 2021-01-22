import React from "react"
import { MDBContainer, MDBLink, MDBBtn, MDBInput, MDBBox } from 'mdbreact'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Jumbotron from '../../Components/Jumbotron/Jumbotron'
import User from '../../utils/UserAPI/UserAPI'
import { useState } from 'react'
import { Redirect } from "react-router-dom"

export default function Register() {
  const [inputState, setInputState] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    isRegistered: false
  })

  inputState.postUser = async (event) => {
    event.preventDefault()
    console.log('ping')
    let userObject = {
      name: inputState.name,
      username: inputState.username,
      email: inputState.email,
      password: inputState.password
      // isRegistered: true
    }
    let users = await User.createUser(userObject)
    setInputState({ ...inputState, isRegistered: true })
    console.log(users)
    if (users.data.name) {
      window.location = '/regfail'
    } else {
      window.location = '/login'
    }
  }

  inputState.handleInputChange = (event) => {
    setInputState({ ...inputState, [event.target.name]: event.target.value })
  }
  return (
    <>
      {
        inputState.isRegistered !== "true"
          ?
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
                      className='text-white'
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
                      className='text-white'
                      value={inputState.email}
                      onChange={inputState.handleInputChange}
                      id="email"
                      name="email"
                      validate error="wrong"
                      success="right" />
                    <MDBInput
                      className='text-white'
                      label="User Name" icon="hand-point-right"
                      group type="text"

                      value={inputState.username}
                      onChange={inputState.handleInputChange}
                      id="username"
                      name="username"
                      validate error="wrong"
                      success="right" />
                    <MDBInput
                      className='text-white'
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
                      rounded className="mb-3" gradient="peach"
                      onClick={(e) => inputState.postUser(e)}
                    >Register</MDBBtn>
                  </div>
                </form>
              </MDBBox>
              <hr></hr>
              <MDBBox display="flex" justifyContent="center">
                {/* <p className="h5 text-center mb-4 grey-text">Don't have an accout?</p> */}
                <MDBLink to='/login' className="h5 text-center mb-4 grey-text" display="flex" justifyContent="center" >Already have an accout? Log In</MDBLink>
              </MDBBox>
            </MDBContainer>
            <Footer />
          </>

          :
          <Redirect to="/login" />
      }
    </>
  );
};

