import React from "react";
import Item from '../../utils/ItemAPI/ItemAPI'
import Navbar from '../../Components/Navbar/Navbar.js'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import Axios from 'axios'

const DisplayItem = () => {
  Axios.get('/api/item')
  .then(({ data }) => {
    console.log(data)
    })
    .catch(err => console.log(err))

  return (
    <MDBContainer>
      <Navbar />
      <MDBRow>
        <MDBRow>
          <MDBCol>1 of 2</MDBCol>
          <MDBCol>2 of 2</MDBCol>
        </MDBRow>
      </MDBRow>
    </MDBContainer>

  )
}

export default DisplayItem