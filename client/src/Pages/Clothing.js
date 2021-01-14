/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react"
import { MDBRow } from "mdbreact";
import Jumbotron from '../Components/Jumbotron/Jumbotron'
import Navbar from '../Components/Navbar/Navbar'
import Item from '../utils/ItemAPI/ItemAPI'
import Card from '../Components/Card/Card'

const {
  getCategory
} = Item

const Showcase = () => {
  const [itemState, setItemState] = useState({
    isLoaded: false,
    items: []
  })

  useEffect(async () => {
    let { data: item } = await getCategory('Clothing')
    setItemState({ ...itemState, isLoaded: true })
    setItemState({ ...itemState, items: item })
  }, [])

  return (
    <>
      <Navbar />
      <Jumbotron />
      {console.log(itemState.items)}
      {itemState.items.length > 0 ?
        <section className="text-center my-5">
          <h2 className="white-text h1-responsive font-weight-bold text-center my-2">
            Clothing
          </h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">
            View the most recent listings!
          </p>
          <MDBRow className="mr-0 ml-0 pl-5 pr-5">
            {itemState.items.map((item, i) => (
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