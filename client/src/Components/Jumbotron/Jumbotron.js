import React from "react";
import { MDBJumbotron, MDBContainer, MDBCol, MDBCardTitle } from "mdbreact";

const Jumbotron = () => {
  return (
    <MDBContainer fluid className="pl-0 pr-0">
      <MDBJumbotron fluid style={{ padding: 0 }}>
        <MDBCol className="text-white text-center py-2 px-4 my-0" style={{ backgroundImage: `url(https://i.ibb.co/7byV9VW/srbanner.png)` }}>
          <MDBCardTitle className="h1-responsive pt-3 m-4 my-0 font-bold"></MDBCardTitle>
          <p className="my-5"><br></br>
          <br></br>
          <br></br>
                </p>
        </MDBCol>
      </MDBJumbotron>
    </MDBContainer>
  )
}

export default Jumbotron;