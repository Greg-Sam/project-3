import Jumbotron from '../Components/Jumbotron/Jumbotron'
import Navbar from '../Components/Navbar/Navbar'
import Showcase from '../Components/Showcase/Showcase'
import Clothing from '../Pages/Clothing'
import Electronics from '../Pages/Electronics'
import Automotive from '../Pages/Automotive'
import Pets from '../Pages/Pets'
import Household from '../Pages/Household'
import React from "react"

export default function Home() {
  return (
    <header>
      <Navbar />
      <Jumbotron />
      <Showcase />
      <Clothing
        limit="6"
      />
      <Electronics
        limit="6"
      />
      <Automotive
        limit="6"
      />
      <Pets
        limit="6"
      />
      <Household
        limit="6"
      />
    </header>
  )
}