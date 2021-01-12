import Jumbotron from '../Components/Jumbotron/Jumbotron'
import Navbar from '../Components/Navbar/Navbar'
import Showcase from '../Components/Showcase/Showcase'
import React from "react"

export default function Home() {
  return (
    <header>
      <Navbar />
      <Jumbotron />
      <Showcase />
    </header>
  )
}