import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdbreact";
import './App.css' //Import here your file style

const Contributors = () => {
  return (
    <MDBContainer> 
      <MDBRow>
        <MDBCol md="2">
       
          <img src="https://media.discordapp.net/attachments/781244219762540562/787023194758184990/Amee.JPG?width=350&height=350" className="img-fluid rounded-circle" alt="Amee Parmar" />
          <h4>Amee Parmar</h4>
          <h6></h6>
        </MDBCol>
        
        <MDBCol md="2">
        
          <img src="https://media.discordapp.net/attachments/781244219762540562/787023668475330580/me.jpg?width=350&height=350" className="img-fluid rounded-circle" alt="Greg Samuelson" />
          <h4>Greg Samuelson</h4>
        </MDBCol>
        <MDBCol md="2">
        
          <img src="https://images-ext-1.discordapp.net/external/lfPVZShkcE1hQaoIXg-0Qg_Mfa_SKwj6jPsie1s81TY/%3Fraw%3Dtrue/https/github.com/ky-lore/Travel-19/blob/main/images/kyle.jpeg?width=350&height=350" 
          className="img-fluid rounded-circle hoverable" alt="Kyle Lorenzo" />
          <h4>Kyle Lorenzo</h4>
        </MDBCol>
        <MDBCol md="2">
       
          <img src="https://media.discordapp.net/attachments/783458170731102218/787037186377383956/IMG_0737.jpeg?width=350&height=350"
            className="img-fluid rounded-circle" alt="Joseph Wong Ludwicak" />
          <h4>Joseph Wong Ludwicak</h4>
        </MDBCol>
        <MDBCol md="2">
        
        <img src="https://media.discordapp.net/attachments/783457733164400710/787078521570852884/project22222.jpg?width=350&height=350"
          className="img-fluid rounded-circle" alt="Wettim Linton" />
          <h4>Wettim Linton</h4>
        </MDBCol>
        </MDBRow>
    </MDBContainer>
  );
}

export default Contributors;