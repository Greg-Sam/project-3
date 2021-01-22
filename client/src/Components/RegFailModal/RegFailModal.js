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
          <MDBModalHeader className='text-center stylish-color-dark text-white' toggle={this.toggle}>Your registration failed.  Please register again.</MDBModalHeader>
          <MDBModalBody className='text-center stylish-color-dark text-white'>
            Please register again.
        </MDBModalBody>
          <MDBModalFooter className='justify-content-center stylish-color-dark text-white'>
            <MDBBtn rounded className="mb-3" gradient="peach" href="/Register">Register</MDBBtn>

          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default RegFailModal;