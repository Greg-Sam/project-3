/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import { useEffect, useState } from 'react'
import Item from '../../utils/ItemAPI/ItemAPI'
import Navbar from '../../Components/Navbar/Navbar.js'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardText, MDBCardTitle, MDBBtn } from "mdbreact";
// import Axios from 'axios'

const {
  getItems
} = Item

const DisplayItem = (props) => {
  const [itemState, setItemState] = useState({
    isLoaded: false,
    items: []
  })

  useEffect(async () => {
    let { data: item } = await getItems()
    setItemState({ ...itemState, isLoaded: true })
    setItemState({ ...itemState, items: item })
  }, [])

  let fetchItem = itemState.items.filter(item => item._id === props.match.params.id)

  let fetchedItem = fetchItem[0]

  return (
    <>
      <Navbar />
      { console.log(props.match.params.id) }
      { itemState.items.length > 0 ?
        <MDBContainer>
          <MDBRow>
            <MDBRow>
              <MDBCol> <img src={fetchedItem.image} className="img-fluid" alt="" /></MDBCol>
              <MDBCol><MDBCard>
                <MDBCardImage
                  className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
                  tag='div'
                >
                  <h2>{fetchedItem.name}</h2>
                  <p>{fetchedItem.condition}</p>
                </MDBCardImage>
                <MDBCardBody cascade className='text-center'>
                  <MDBCardTitle>${fetchedItem.price}</MDBCardTitle>
                  <MDBCardText>{fetchedItem.description}</MDBCardText>
                  <MDBBtn color="primary" href="#">BUY</MDBBtn>
                </MDBCardBody>
              </MDBCard></MDBCol>
            </MDBRow>
          </MDBRow>
        </MDBContainer>
        : null}
    </>
  )
}

export default DisplayItem