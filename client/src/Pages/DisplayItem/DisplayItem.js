/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import { useEffect, useState } from 'react'
import Item from '../../utils/ItemAPI/ItemAPI'
// import User from '../../utils/UserAPI/UserAPI'
import Navbar from '../../Components/Navbar/Navbar.js'
import Jumbotron from '../../Components/Jumbotron/Jumbotron'
import Footer from '../../Components/Footer/Footer'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardText, MDBCardTitle, MDBBtn } from "mdbreact";
// import Axios from 'axios'

const {
  getItems
} = Item

// const {
//   getUser
// } = User

const DisplayItem = (props) => {
  const [itemState, setItemState] = useState({
    isLoaded: false,
    items: []
  })

  // const [userState, setUserState] = useState({
  //   user: []
  // })

  useEffect(async () => {
    let { data: item } = await getItems()
    setItemState({ ...itemState, isLoaded: true })
    setItemState({ ...itemState, items: item })
  }, [])

  let fetchItem = itemState.items.filter(item => item._id === props.match.params.id)

  let fetchedItem = fetchItem[0]

  // useEffect(async () => {
  //   let fetchedUser = await getUser(fetchedItem.user)
  //   setUserState({ ...userState, user: fetchedUser.data })
  // }, [])

  return (
    <>
      <Navbar />
      <Jumbotron />
      
      { console.log(fetchedItem) }
      {/* { console.log(userState.user) } */}
      { itemState.items.length > 0 ?
        <MDBContainer>
          
            <MDBRow>
              <MDBCol md="6"> <img src={fetchedItem.image} className="img-fluid" alt="" /></MDBCol>
              <MDBCol md="6"><MDBCard>
                <MDBCardImage
                className='stylish-color-dark  white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
                  tag='div'
                >
                  <h2>{fetchedItem.name}</h2>
                  <p>{fetchedItem.condition}</p>
                  <p><a className="white-text" href={'/users/' + fetchedItem.user}>View seller info</a></p>
                </MDBCardImage>
                <MDBCardBody cascade className='text-center'>
                  <MDBCardTitle>${fetchedItem.price}</MDBCardTitle>
                  <MDBCardText>{fetchedItem.description}</MDBCardText>
                <MDBBtn color="mdb-color" className='whiet text' rounded href="#">BUY</MDBBtn>
                </MDBCardBody>
              </MDBCard></MDBCol>
            </MDBRow>
          
        </MDBContainer>
        : null}
        <Footer />
        </>
    
  )
}

export default DisplayItem