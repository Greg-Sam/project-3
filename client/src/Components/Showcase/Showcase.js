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
                  src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/10/samsung-galaxy-s20-fe-1601983375.jpg"
                  top
                  alt="sample photo"
                  overlay="white-slight"
                  height="300px"
                />
                <MDBCardBody className="elegant-color text-center">
                  <a href="#!" className="grey-text">
                    <h5>Electronics</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="#!" className="white-text">
                        Samsung Galaxy S20{" "}
                      </a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold amber-text">
                    <strong>$400</strong>
                  </h4>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <MDBCard className="align-items-center elegant-color">
                <MDBCardImage
                  src="https://www.thetruthaboutcars.com/wp-content/uploads/2014/06/photo-32.jpg"
                  top
                  alt="sample photo"
                  overlay="white-slight"
                  height="300px"
                />
                <MDBCardBody className="elegant-color text-center">
                  <a href="#!" className="grey-text">
                    <h5>Automotive</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="#!" className="white-text">
                        2002 Honda S2000{" "}
                      </a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold amber-text">
                    <strong>$15000</strong>
                  </h4>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <MDBCard className="align-items-center elegant-color">
                <MDBCardImage
                  src="https://media.karousell.com/media/photos/products/2019/09/02/wmns_air_jordan_1_satin_black_toe_us_9_1567438999_03d3757a_progressive.jpg"
                  top
                  alt="sample photo"
                  overlay="white-slight"
                  height="300px"
                />
                <MDBCardBody className="elegant-color text-center">
                  <a href="#!" className="grey-text">
                    <h5>Clothing</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="#!" className="white-text">
                        Nike Air Jordan 1{" "}
                      </a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold amber-text">
                    <strong>$350</strong>
                  </h4>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <MDBCard className="align-items-center elegant-color">
                <MDBCardImage
                  src="https://i.redd.it/fqrr9q5kcaa51.jpg"
                  top
                  alt="sample photo"
                  overlay="white-slight"
                  height="300px"
                />
                <MDBCardBody className="elegant-color text-center">
                  <a href="#!" className="grey-text">
                    <h5>Pets</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="#!" className="white-text">
                        Hedgehog food{" "}
                      </a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold amber-text">
                    <strong>$9</strong>
                  </h4>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <MDBCard className="align-items-center elegant-color">
                <MDBCardImage
                  src="https://i.pinimg.com/474x/83/d6/fc/83d6fc7f2f943bb10d04f322fe0e5844.jpg"
                  top
                  alt="sample photo"
                  overlay="white-slight"
                  height="300px"
                />
                <MDBCardBody className="elegant-color text-center">
                  <a href="#!" className="grey-text">
                    <h5>Electronics</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="#!" className="white-text">
                        Custom gaming PC{" "}
                      </a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold amber-text">
                    <strong>$1200</strong>
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