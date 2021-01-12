import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './App.css'; //Import here your file style

const contributorsPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="2">.col-md-2</MDBCol>
        <header>Amee Parmar</header>
        <img src="https://media.discordapp.net/attachments/781244219762540562/787023194758184990/Amee.JPG?width=350&height=350" className="img-fluid rounded-circle hoverable" alt="Amee Parmar" />
        <MDBCol md="2">.col-md-2</MDBCol>
        <header>Greg Samuelson</header>
        <img src="https://media.discordapp.net/attachments/781244219762540562/787023668475330580/me.jpg?width=350&height=350" className="img-fluid rounded-circle hoverable" alt="Greg Samuelson" />
        <MDBCol md="2">.col-md-2</MDBCol>
        <header>Kyle Lorenzo</header>
        <img src="https://images-ext-1.discordapp.net/external/lfPVZShkcE1hQaoIXg-0Qg_Mfa_SKwj6jPsie1s81TY/%3Fraw%3Dtrue/https/github.com/ky-lore/Travel-19/blob/main/images/kyle.jpeg?width=350&height=350"  className="img-fluid rounded-circle" alt="Kyle Lorenzo" />
        <MDBCol md="2">.col-md-2</MDBCol>
        <header>Joseph Wong Ludwicak</header>
        <img src="https://media.discordapp.net/attachments/783458170731102218/787037186377383956/IMG_0737.jpeg?width=350&height=350" 
          className="img-fluid rounded-circle" alt="Joseph Wong Ludwicak" />
        <MDBCol md="2">.col-md-2</MDBCol>
        <header>Wettim Linton"</header>
        <img src="https://media.discordapp.net/attachments/783457733164400710/787078521570852884/project22222.jpg?width=350&height=350"
           className="img-fluid rouded-circle" alt="Wettim Linton" />
      </MDBRow>
    </MDBContainer>
  );
}

export default contributorsPage;