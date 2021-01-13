import Navbar from '../Components/Navbar/Navbar'
import ItemForm from '../Components/ItemForm/ItemForm'
import { useState } from 'react'
import Item from '../utils/ItemAPI/ItemAPI'
import React from 'react'

export default function NewPost() {
  const [ inputState, setInputState ] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    condition: '',
    image: ''
  })

  inputState.postItem = (event) => {
    event.preventDefault()
    let itemObject = {
      name: inputState.name,
      description: inputState.description,
      price: inputState.price,
      category: inputState.category,
      condition: inputState.condition,
      image: inputState.image
    }
    let items = Item.createItem(itemObject)
    console.log(items)
    // console.log(inputState)
  }
  
  inputState.handleInputChange = (event) => {
    setInputState({...inputState, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <Navbar />
      <ItemForm
        handleInputChange={inputState.handleInputChange}
        postItem={inputState.postItem}
        name={inputState.name}
        price={inputState.price}
        category={inputState.category}
        description={inputState.description}
        condition={inputState.condition}
        image={inputState.image}
      />
    </div>
  )
}