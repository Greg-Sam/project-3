import Navbar from '../Components/Navbar/Navbar'
import ItemForm from '../Components/ItemForm/ItemForm'
import { useState } from 'react'
import Item from '../utils/ItemAPI/ItemAPI'
import React from 'react'
import 'firebase/storage'
import { imageStore } from "../base.js";


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
      image: fileState
    }
    let items = Item.createItem(itemObject)
    console.log(items)
  }
  
  const [fileState, setFileState] = useState('')

  const onFileChange = async (event) => {
    const file = event.target.files[0];
    const storageRef = imageStore.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file)
    setFileState(await fileRef.getDownloadURL())
  };


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
        onFileChange={onFileChange}
      />
    </div>
  )
}