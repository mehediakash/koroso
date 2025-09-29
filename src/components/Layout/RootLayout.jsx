import React from 'react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'
import ScrollToTop from '../ScrollToTop'

const RootLayout = () => {
  return (
    <>
    <ScrollToTop/>
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout