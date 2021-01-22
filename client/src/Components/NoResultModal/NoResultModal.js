import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class NoResultModal extends Component {
  state = {
    modal: true
  }


  render() {
    return (
      <MDBContainer>

        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader className='justify-content-center stylish-color-dark text-white'  toggle={this.toggle}>Your search returned no results</MDBModalHeader>
          <MDBModalBody className='text-center stylish-color-dark text-white'>
            Please return to home page.
        </MDBModalBody>
          <MDBModalFooter className='justify-content-center stylish-color-dark text-white'>
            <MDBBtn rounded className="mb-3" gradient="peach" href="/">Home Page</MDBBtn>
           
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default NoResultModal;