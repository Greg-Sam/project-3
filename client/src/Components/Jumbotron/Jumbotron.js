import React from "react";
import { MDBJumbotron, MDBContainer, MDBCol, MDBCardTitle } from "mdbreact";

const Jumbotron = () => {
  return (
    <MDBContainer fluid className="pl-0 pr-0">
      <MDBJumbotron fluid style={{ padding: 0 }}>
        <MDBCol className="text-white text-center py-2 px-4 my-0" style={{ backgroundImage: `url(https://i.imgur.com/7m2y0zB.png)` }}>
          <MDBCardTitle className="h1-responsive pt-3 m-4 my-0 font-bold">Basically an OfferUp clone. OfferDown.</MDBCardTitle>
          <p className="mx-5 mb-5">Welcome to the landing page of [ WEBSITE NAME PENDING ], the easiest and quickest way to sell unneeded things of any kind and of any condition. Brought to you by the makers of Codebook.com. Create a free account and begin selling and buying today!
                </p>
        </MDBCol>
      </MDBJumbotron>
    </MDBContainer>
  )
}

export default Jumbotron;