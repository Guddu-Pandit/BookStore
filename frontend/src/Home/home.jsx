import React from 'react'
import Navbar from '../components/navbar.jsx'
import Banner from '../components/banner.jsx'
import FreeBook from '../components/freebook.jsx'
import Footer from '../components/footer.jsx'

const home = () => {
  return (
    <>
      <Navbar  />
      <Banner />
      <FreeBook />
      <Footer />
    </>
  )
}

export default home