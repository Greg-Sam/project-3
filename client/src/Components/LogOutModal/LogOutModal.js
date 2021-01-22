import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class LogOutModal extends Component {
  state = {
    modal: true
  }


  render() {
    return (
      <MDBContainer>
        
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader className='justify-content-center stylish-color-dark text-white' toggle={this.toggle}>You have been successfully logged out</MDBModalHeader>
          <MDBModalBody className='text-center stylish-color-dark text-white'>
            Please select from the options below
        </MDBModalBody>
          <MDBModalFooter className='justify-content-center stylish-color-dark'>
            <MDBBtn rounded className="mb-3" gradient="peach" href="/">Home Page</MDBBtn>
            <MDBBtn rounded className="mb-3" gradient="peach" href="/login">Login</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default LogOutModal;