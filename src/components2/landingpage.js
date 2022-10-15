import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Destinations from './Destinations'
import Search from './Search'
import Selections from './Selections'
import Carousel from './Carousel'
import Footer from './Footer'
function Landingpage() {
  return (
    <>
        <Navbar/>
        <Hero />
      <Destinations />
      <Search />
      <Selections />
      <Carousel />
      <Footer />

    </>
  )
}

export default Landingpage