import React from "react";
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer.js'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import '../../utils/App.css' //Import here your file style

const Contributors = () => {
  return (
    <>
    <Navbar />
    <MDBContainer> 
      
      <MDBRow>
        <MDBCol md="2">
       
          <img src="https://media.discordapp.net/attachments/781244219762540562/787023194758184990/Amee.JPG?width=350&height=350" className="img-fluid rounded-circle" alt="Amee Parmar" />
         <hr></hr>
          <h4>Amee Parmar</h4>
          <hr></hr>
          <a href="https://github.com/amee05"><MDBIcon fab icon="github" size="2x" /></a>
          <a href="https://www.linkedin.com/in/amee-parmar-5b30a526/?trk=profile-badge-cta"> <MDBIcon fab icon="linkedin" size="2x" /></a>
          <a href="mailto:amee05@yahoo.com"><MDBIcon icon="at" size="2x" /></a>
          <hr></hr>
          <h6>JavaScript, Node.js, SQL developer. Can speak three languages and has been to ten countries..Loking forward to visit many more. If I am not coding then I am reading.</h6>
        </MDBCol>
        
        <MDBCol md="2">
        
          <img src="https://media.discordapp.net/attachments/781244219762540562/787023668475330580/me.jpg?width=350&height=350" className="img-fluid rounded-circle" alt="Greg Samuelson" />
          <hr></hr>
          <h4>Greg Samuelson</h4>
          <hr></hr>
          <a href="mailto:grssam@gmail.com"><MDBIcon far icon="envelope" size="2x" /></a>
          <a href="https://github.com/Greg-Sam"><MDBIcon fab icon="github" size="2x" /></a>
          <a href="https://www.linkedin.com/in/greg-samuelson/"> <MDBIcon fab icon="linkedin" size="2x" /></a>
          <hr></hr>
          <h6>Greg is an aspiring full-stack developer with experience in education, project management and international development
                work. He loves coming up with new ideas and then figuring out how to make them a reality.</h6>
          <hr></hr>
        </MDBCol>
        <MDBCol md="2">
        
          <img src="https://images-ext-1.discordapp.net/external/lfPVZShkcE1hQaoIXg-0Qg_Mfa_SKwj6jPsie1s81TY/%3Fraw%3Dtrue/https/github.com/ky-lore/Travel-19/blob/main/images/kyle.jpeg?width=350&height=350" 
          className="img-fluid rounded-circle hoverable" alt="Kyle Lorenzo" />
          <hr></hr>
          <h4>Kyle Lorenzo</h4>
          <hr></hr>
          <a href="mailto:kclore3131@gmail.com"><MDBIcon far icon="envelope" size="2x" /></a>
          <a href="https://github.com/ky-lore"><MDBIcon fab icon="github" size="2x" /></a>
          <a href="https://www.linkedin.com/in/kyle-lorenzo-46a246161/"> <MDBIcon fab icon="linkedin" size="2x" /></a>
          <hr></hr>
          <h6>Vanilla JS, Node.JS, MySQL, Java developer. Fantasy football failure. Shameless shoujo-manga reader. Go Rams. UCI Coding
                Bootcamp certification in progress.</h6>
          <hr></hr>
        </MDBCol>
        <MDBCol md="2">
       
          <img src="https://media.discordapp.net/attachments/783458170731102218/787037186377383956/IMG_0737.jpeg?width=350&height=350"
            className="img-fluid rounded-circle" alt="Joseph Wong Ludwicak" />
            <hr></hr>
          <h4>Joseph Wong Ludwicak</h4>
          <hr></hr>
          <a href="mailto:josclud@gmail.com"><MDBIcon far icon="envelope" size="2x" /></a>
          <a href="https://github.com/Josclud"><MDBIcon fab icon="github" size="2x" /></a>
          <a href="https://www.linkedin.com/in/joseph-wong-ludwicak/"> <MDBIcon fab icon="linkedin" size="2x" /></a>
          <hr></hr>
          <h6>Hi, Im Joseph and I am currently working towards a career as a full-stack web developer. Checkout my Linkedin and Github
                to learn more about me and projects</h6>
          <hr></hr>
        </MDBCol>
        <MDBCol md="2">
        
        <img src="https://media.discordapp.net/attachments/783457733164400710/787078521570852884/project22222.jpg?width=350&height=350"
          className="img-fluid rounded-circle" alt="Wettim Linton" />
          <hr></hr>
          <h4>Wettim Linton</h4>
          <hr></hr>
          <a href="mailto:wettimlinton123@gmail.com"><MDBIcon far icon="envelope" size="2x" /></a>
          <a href="https://github.com/wlinton1"><MDBIcon fab icon="github" size="2x" /></a>
          <a href="https://www.linkedin.com/in/wettim-linton-54b4421a6/"> <MDBIcon fab icon="linkedin" size="2x" /></a>
          <hr></hr>
          <h6>I'm currently enrolled in the UCI Full Stack Coding Bootcamp. I'm looking forward to
          learning all there is to know about web development in order to create fantastic websites. We are 7 weeks in and
          I am currently versed in HTML, CSS, JS, node and mysql</h6>
          <hr></hr>
        </MDBCol>
        </MDBRow>
      
    </MDBContainer>
    <Footer />
    </>
  )
}

export default Contributors;