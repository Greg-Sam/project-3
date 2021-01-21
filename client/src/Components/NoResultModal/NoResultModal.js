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
          <MDBModalHeader toggle={this.toggle}>Your search returned no results</MDBModalHeader>
          <MDBModalBody>
            Please return to home page.
        </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" href="/">Home Page</MDBBtn>
           
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default NoResultModal;