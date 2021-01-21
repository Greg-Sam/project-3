import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"


const Footer = () => {
  return (
    <MDBFooter color="unique-color-dark" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Technology Used</h5>
            <img src="https://img.icons8.com/color/60/000000/javascript.png" alt="JavaCript" />
            <img src="https://img.icons8.com/color/96/000000/nodejs.png" alt="Node JS"/>
            <img src="https://img.icons8.com/nolan/60/react-native.png" alt="React" />
            
            <img src="https://img.icons8.com/color/60/000000/mongodb.png" alt="Mongo DB" />
            
            <img src="https://img.icons8.com/color/60/000000/npm.png" alt="NPM"/>
            <img src="https://img.icons8.com/nolan/64/heroku.png" alt="Heroku"/>
            <img src="https://img.icons8.com/plasticine/80/000000/github.png" alt="GitHub" />
            <img src="https://img.icons8.com/color/48/000000/firebase.png" alt="FireBase"/>

            
          </MDBCol> 
          <MDBCol md="3">
            <h5 className="title">Our Other Project</h5>
            <a href="https://radiant-headland-26253.herokuapp.com/index.html"><img className="img-fluid" alt="CodeBook" src="../../../images/codebook-logo.png" height="40px" width="100px" /></a>
            <hr></hr>
            
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Meet The Team</h5>
            <a href="/contributors">
            <img src="https://img.icons8.com/officel/48/000000/groups.png" />
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#!"> Seller's Remorse </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;