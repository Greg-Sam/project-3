/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react"
import { MDBRow } from "mdbreact";
import Item from '../utils/ItemAPI/ItemAPI'
import User from '../utils/UserAPI/UserAPI'
import Card from '../Components/Card/Card'

const {
  getItems
} = Item

const {
  getUser
} = User

const Showcase = (props) => {
  const [itemState, setItemState] = useState({
    isLoaded: false,
    items: []
  })

  const [userState, setUserState] = useState({
    user: []
  })

  useEffect(async () => {
    let { data: item } = await getItems()
    setItemState({ ...itemState, isLoaded: true })
    setItemState({ ...itemState, items: item })
  }, [])

  let fetchedSellerItems = itemState.items.filter(item => item.user === props.match.params.id)

  useEffect(async () => {
    let fetchedUser = await getUser(props.match.params.id)
    setUserState({ ...userState, user: fetchedUser.data })
  }, [])

  return (
    <>
      {console.log(itemState.items)}
      {console.log(userState.user)}
      {itemState.items.length > 0 ?
        <section className="text-center my-5">
          <h2 className="white-text h1-responsive font-weight-bold text-center my-2">
            {userState.user.name}'s listed items
          </h2>
          <p className="grey-text text-center w-responsive mx-auto mb-3">
            View the most recent listings!
          </p>
          <MDBRow className="mr-0 ml-0 pl-5 pr-5">
            {fetchedSellerItems.map((item, i) => (
              <Card
                id={item._id}
                name={item.name}
                image={item.image}
                category={item.category}
                price={item.price}
              />
            ))}
          </MDBRow>
        </section>
        : null}
    </>
  );
}

export default Showcase;