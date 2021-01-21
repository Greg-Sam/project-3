import React from "react";
import { MDBCol, MDBCard, MDBCardImage, MDBCardBody } from "mdbreact";
import './Card.css'
export default function Card(props) {
  return (
    <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
      <MDBCard className="align-items-center elegant-color" id={props.id}>
        <MDBCardImage
          src={props.image}
          top
          alt={props.name}
          overlay="white-slight"
          height={250}
          width={250}
          className="imageSize"
        />
        <MDBCardBody className="elegant-color text-center">
          <a href={props.category} className="grey-text">
            <h5>{props.category}</h5>
          </a>
          <h5>
            <strong>
              <a href={'/items/' + props.id} className="white-text" id={props.id}>
                {props.name}{" "}
              </a>
            </strong>
          </h5>
          <h4 className="font-weight-bold amber-text">
            <strong>${props.price}</strong>
          </h4>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}
