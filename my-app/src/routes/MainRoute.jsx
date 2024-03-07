import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Contact from '../pages/Contact/Contact'
import Cv from '../pages/Cv/Cv'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'

export default function MainRoute() {
  return (

    <>
      <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cv' element={<Cv />} />

      </Routes>
      <Footer/>
    </>
  )
}

