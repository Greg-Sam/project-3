import React from "react";
import Item from '../../utils/ItemAPI'
import Navbar from '../../Components/Navbar/Navbar.js'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Axios from 'axios'


const {
  getDisplayItem
} = getItem

const DisplayItem = id => {
  return (
    <>
    <MDBContainer>
      <Navbar />
      <MDBRow>
        <MDBRow>
          <MDBCol>1 of 2</MDBCol>
          <MDBCol>2 of 2</MDBCol>
        </MDBRow>
      </MDBRow>
    </MDBContainer>
    </>
  )
}

export default DisplayItem