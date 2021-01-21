/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react"
import { MDBRow } from "mdbreact";
import Item from '../utils/ItemAPI/ItemAPI'
import Card from '../Components/Card/Card'

const {
  getSearched
} = Item

const Showcase = () => {
  const [itemState, setItemState] = useState({
    isLoaded: false,
    items: [],
    term: localStorage.term
  })



  useEffect(async () => {
    let { data: item } = await  
    getSearched(itemState.term)
    setItemState({ ...itemState, isLoaded: true })
    setItemState({ ...itemState, items: item })
    localStorage.setItem('term', '')
  }, [])



  return (
    <>
      {console.log(itemState.items)}
      {itemState.items.length > 0 ?
        <section className="text-center my-5">
          <h2 className="white-text h1-responsive font-weight-bold text-center my-2">
            Search Results
          </h2>
          <p className="grey-text text-center w-responsive mx-auto mb-3">
            Is this what you were looking for?
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
        : <h1>Sorry, your search had no results</h1>}
    </>
  );
}

export default Showcase;