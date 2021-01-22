import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBAnimation, MDBMask, MDBView  } from "mdbreact"


const Footer = () => {
  return (
    <MDBFooter color="unique-color-dark" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4" className="text-center">
            <h5 className="title">Technology Used - With Lots Of Cofee</h5>
            <MDBRow className="text-center justify-content-center">
              
            <MDBView hover zoom>
            <img src="https://img.icons8.com/color/55/000000/javascript.png" alt="Javascript" />
                <MDBMask className="flex-center" overlay="orange-strong">
                <p className="white-text">Javascript</p>
              </MDBMask>
            </MDBView>
            <MDBView hover>
            <img src="https://img.icons8.com/color/80/000000/nodejs.png" alt="Node JS"/>
            <MDBMask className="flex-center" overlay="orange-strong">
                <p className="white-text">Node</p>
              </MDBMask>
            </MDBView>
            <MDBView hover>
            <img src="https://img.icons8.com/nolan/60/react-native.png" alt="React" />
            <MDBMask className="flex-center" overlay="orange-strong">
                <p className="white-text">React</p>
              </MDBMask>
            </MDBView>
            <MDBView hover>
            <img src="https://img.icons8.com/color/50/000000/mongodb.png" alt="Mongo DB" />
            <MDBMask className="flex-center" overlay="orange-strong">
                <p className="white-text">Mongo</p>
              </MDBMask>
            </MDBView>
            <MDBView hover>
            <img src="https://img.icons8.com/color/50/000000/npm.png" alt="NPM"/>
            <MDBMask className="flex-center" overlay="orange-strong">
                <p className="white-text">NPM</p>
              </MDBMask>
            </MDBView>
            <MDBView hover>
            <img src="https://img.icons8.com/nolan/55/heroku.png" alt="Heroku"/>
            <MDBMask className="flex-center" overlay="orange-strong">
                <p className="white-text">Heroku</p>
              </MDBMask>
            </MDBView>
            <MDBView hover>
            <img src="https://img.icons8.com/plasticine/65/000000/github.png" alt="GitHub" />
            <MDBMask className="flex-center" overlay="orange-strong">
                <p className="white-text">GitHub</p>
              </MDBMask>
            </MDBView>
            <MDBView hover>
            <img src="https://img.icons8.com/color/48/000000/firebase.png" alt="FireBase"/>
            <MDBMask className="flex-center" overlay="orange-strong">
                <p className="white-text">FireBase</p>
              </MDBMask>
            </MDBView>

            </MDBRow>

          </MDBCol> 
          <MDBCol md="4" className="text-center">
            <h5 className="title">Our Other Project</h5>
           
            <a href="https://radiant-headland-26253.herokuapp.com/index.html"><img className="img-fluid" alt="CodeBook" src="../../../images/codebook-logo.png" height="40px" width="100px" /></a>
           
            {/* <hr></hr> */}
            
          </MDBCol>
          <MDBCol md="4" className="text-center">
            <h5 className="title">Meet The Team</h5>
            <hr></hr>
            
          <MDBAnimation type="bounce" infinite>
            <a href="/contributors">
            
            <img src="https://img.icons8.com/officel/48/000000/groups.png" alt="Team" />
            </a>
            </MDBAnimation>
            
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