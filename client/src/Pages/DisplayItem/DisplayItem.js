import React from "react";
// import Item from '../../utils/ItemAPI'
import Navbar from '../../Components/Navbar/Navbar.js'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardText, MDBCardTitle, MDBBtn } from "mdbreact";
// import Axios from 'axios'


let item = {
  name: 'Canon EOS 90D DSLR Camera',
  description: 'Canon EOS 90D DSLR Camera + 18-55mm STM + 70-300mm + 30 Piece Accessory Bundle Canon EOS 90D DSLR Camera',
  price: '$800',
  condition: 'Used-Good'
}
const DisplayItem = id => {
  return (
    <>
    <MDBContainer>
      <Navbar />
      <MDBRow>
        <MDBRow>
            <MDBCol> <img src="https://live.staticflickr.com/8014/7132453187_98abce3c17_b.jpg" className="img-fluid" alt="" /></MDBCol>
            <MDBCol><MDBCard>
              <MDBCardImage
                className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
                tag='div'
              >
                <h2>{item.name}</h2>
                <p>{item.condition}</p>
              </MDBCardImage>
              <MDBCardBody cascade className='text-center'>
                <MDBCardTitle>{item.price}</MDBCardTitle>
                <MDBCardText>{item.description}</MDBCardText>
                <MDBBtn color="primary" href="#">BUY</MDBBtn>
              </MDBCardBody>
            </MDBCard></MDBCol>
        </MDBRow>
      </MDBRow>
    </MDBContainer>
    </>
  )
}

export default DisplayItem