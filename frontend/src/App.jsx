import React from 'react'
import Home from './Home/home.jsx'
import {Route,Routes } from 'react-router-dom'
import Course from './components/course.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Course />} />
      </Routes>
    </>
  )
}

export default App
