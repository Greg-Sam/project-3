/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react"
import {MDBRow, 
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem } from "mdbreact";
import Item from '../utils/ItemAPI/ItemAPI'
import Card from '../Components/Card/Card'

// import Navbar from '../Components/Navbar/Navbar'


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

  let itemArray = itemState.items

  const SortPriceHiLow = () => {
    itemArray.sort((a, b) => (a.price < b.price) ? 1 : -1)
    setItemState({ ...itemState, items: itemArray })
    // window.location.reload()
  }


  const SortPriceLowHi = () => {
    itemArray.sort((a, b) => (a.price > b.price) ? 1 : -1)
    setItemState({ ...itemState, items: itemArray })
    // window.location.reload()
  }


  const SortNewest = () => {
    itemArray.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1)
    setItemState({ ...itemState, items: itemArray })
    // window.location.reload()
  }

  const SortOldest = () => {
    itemArray.sort((a, b) => (a.createdAt > b.createdAt) ? 1 : -1)
    setItemState({ ...itemState, items: itemArray })
    // window.location.reload()
  }
  

  return (
    <>
      {/* <Navbar /> */}
      {/* {console.log(itemState.items)} */}
      {itemState.items.length > 0 ?
        <section className="text-center my-5">
          <h2 className="white-text h1-responsive font-weight-bold text-center my-2">
            Clothing
          </h2>
          <p className="grey-text text-center w-responsive mx-auto mb-3">
            View the most recent listings!
          </p>
        
      {
            window.location.pathname === '/Clothing'
        ?

        <MDBDropdown name="condition">
            <MDBDropdownToggle caret color="default">
              Sort By
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem onClick={(event) => SortPriceHiLow(event)}>Price High to Low</MDBDropdownItem>
              <MDBDropdownItem onClick={(event) => SortPriceLowHi(event)}>Price Low to High</MDBDropdownItem>
              <MDBDropdownItem onClick={(event) => SortNewest(event)}>Newest</MDBDropdownItem>
              <MDBDropdownItem onClick={(event) => SortOldest(event)}>Oldest</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          :
          null

}
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