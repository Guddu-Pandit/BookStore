import React from 'react'
import Navbar from '../components/navbar.jsx'
import Course from '../components/course.jsx'
import Footer from '../components/footer.jsx' 

const courses = () => {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
    <Course/>
    </div>
    <Footer/>
    </>
  )
}

export default courses