/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react"
import {
  MDBRow,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import Item from '../utils/ItemAPI/ItemAPI'
import Card from '../Components/Card/Card'
import NoResultsModal from '../Components/NoResultModal/NoResultModal'

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
      {console.log(itemState.items)}
      {itemState.items.length > 0 ?
        <section className="text-center my-5">
          <h2 className="white-text h1-responsive font-weight-bold text-center my-2">
            Search Results
          </h2>
          <p className="grey-text text-center w-responsive mx-auto mb-3">
            Is this what you were looking for?
          </p>

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
        : 
        
        <NoResultsModal />
}
    </>
  );
}

export default Showcase;