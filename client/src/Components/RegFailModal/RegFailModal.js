import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class RegFailModal extends Component {
  state = {
    modal: true
  }


  render() {
    return (
      <MDBContainer>

        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>Your registration failed.  Please register again.</MDBModalHeader>
          <MDBModalBody>
            Please register again.
        </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn rounded className="mb-3" gradient="peach" href="/Register">Register</MDBBtn>

          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default RegFailModal;