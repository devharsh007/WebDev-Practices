import React from 'react'
import Header from './Comonents/Header'
import Footer from './Comonents/Footer'
import { Outlet } from 'react-router-dom'
// outlet uses the layout as a base and render the other components in the same page same as SPA (Single Page Application)

function Layout() {
  return (
    <>
          <Header />
          <Outlet/>
          <Footer />     
    </>
  )
}

export default Layout
