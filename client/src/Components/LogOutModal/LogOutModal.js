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
          <MDBModalHeader toggle={this.toggle}>You have been successfully logged out</MDBModalHeader>
          <MDBModalBody>
            Please select from the options below
        </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" href="/">Home Page</MDBBtn>
            <MDBBtn color="primary" href="/login">Login</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default LogOutModal;