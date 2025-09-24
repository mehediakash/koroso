import React from 'react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'

const RootLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout