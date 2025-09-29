import React from 'react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'
import ScrollToTop from '../ScrollToTop'
import DynamicSEO from '../DynamicSEO'

const RootLayout = () => {
  return (
    <>

    <ScrollToTop/>
    
  <DynamicSEO
  title="Home - Oromo Tech & Innovation Society"
        description="Partner with Oromo Tech & Innovation Society..."
        keywords="Innovation, Leadership, Entrepreneurship"/>
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout