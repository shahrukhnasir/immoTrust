'use client'
import React, { useEffect } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const MainLayout = ({ children }) => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      
      }, []);
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />


        </>
    )
}

export default MainLayout