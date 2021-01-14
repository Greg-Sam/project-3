/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react"
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody } from "mdbreact";
import Item from '../../utils/ItemAPI/ItemAPI'

const {
  getItems
} = Item

const Showcase = () => {
  const [itemState, setItemState] = useState({
    isLoaded: false,
    items: []
  })

  useEffect(async () => {
    let { data: item } = await getItems()
    setItemState({ ...itemState, isLoaded: true })
    setItemState({ ...itemState, items: item })
  }, [])

  return (
    <>
      { console.log(itemState.items) }
      { itemState.items.length > 0 ?
        <section className="text-center my-5">
          <h2 className="white-text h1-responsive font-weight-bold text-center my-2">
            Recent listings
      </h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">
            View the most recent listings!
      </p>
          <MDBRow className="mr-0 ml-0 pl-5 pr-5">
            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <MDBCard className="align-items-center elegant-color">
                <MDBCardImage
                  src={itemState.items[itemState.items.length - 1].image}
                  top
                  alt="sample photo"
                  overlay="white-slight"
                  height="300px"
                />
                <MDBCardBody className="elegant-color text-center">
                  <a href="#!" className="grey-text">
                    <h5>{itemState.items[itemState.items.length - 1].category}</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="#!" className="white-text">
                        {itemState.items[itemState.items.length - 1].name}{" "}
                      </a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold amber-text">
                    <strong>${itemState.items[itemState.items.length - 1].price}</strong>
                  </h4>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <MDBCard className="align-items-center elegant-color">
                <MDBCardImage
                  src={itemState.items[itemState.items.length - 2].image}
                  top
                  alt="sample photo"
                  overlay="white-slight"
                  height="300px"
                />
                <MDBCardBody className="elegant-color text-center">
                  <a href="#!" className="grey-text">
                    <h5>{itemState.items[itemState.items.length - 2].category}</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="#!" className="white-text">
                        {itemState.items[itemState.items.length - 2].name}{" "}
                      </a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold amber-text">
                    <strong>${itemState.items[itemState.items.length - 2].price}</strong>
                  </h4>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <MDBCard className="align-items-center elegant-color">
                <MDBCardImage
                  src={itemState.items[itemState.items.length - 3].image}
                  top
                  alt="sample photo"
                  overlay="white-slight"
                  height="300px"
                />
                <MDBCardBody className="elegant-color text-center">
                  <a href="#!" className="grey-text">
                    <h5>{itemState.items[itemState.items.length - 3].category}</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="#!" className="white-text">
                        {itemState.items[itemState.items.length - 3].name}{" "}
                      </a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold amber-text">
                    <strong>${itemState.items[itemState.items.length - 3].price}</strong>
                  </h4>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <MDBCard className="align-items-center elegant-color">
                <MDBCardImage
                  src={itemState.items[itemState.items.length - 4].image}
                  top
                  alt="sample photo"
                  overlay="white-slight"
                  height="300px"
                />
                <MDBCardBody className="elegant-color text-center">
                  <a href="#!" className="grey-text">
                    <h5>{itemState.items[itemState.items.length - 4].category}</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="#!" className="white-text">
                        {itemState.items[itemState.items.length - 4].name}{" "}
                      </a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold amber-text">
                    <strong>${itemState.items[itemState.items.length - 4].price}</strong>
                  </h4>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <MDBCard className="align-items-center elegant-color">
                <MDBCardImage
                  src={itemState.items[itemState.items.length - 5].image}
                  top
                  alt="sample photo"
                  overlay="white-slight"
                  height="300px"
                />
                <MDBCardBody className="elegant-color text-center">
                  <a href="#!" className="grey-text">
                    <h5>{itemState.items[itemState.items.length - 5].category}</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="#!" className="white-text">
                        {itemState.items[itemState.items.length - 5].name}{" "}
                      </a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold amber-text">
                    <strong>${itemState.items[itemState.items.length - 5].price}</strong>
                  </h4>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <MDBCard className="align-items-center elegant-color">
                <MDBCardImage
                  src={itemState.items[itemState.items.length - 6].image}
                  top
                  alt="sample photo"
                  overlay="white-slight"
                  height="300px"
                />
                <MDBCardBody className="elegant-color text-center">
                  <a href="#!" className="grey-text">
                    <h5>{itemState.items[itemState.items.length - 6].category}</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="#!" className="white-text">
                        {itemState.items[itemState.items.length - 6].name}{" "}
                      </a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold amber-text">
                    <strong>${itemState.items[itemState.items.length - 6].price}</strong>
                  </h4>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </section>
        : null }
    </>

  );
}

export default Showcase;