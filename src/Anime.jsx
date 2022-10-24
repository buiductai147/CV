import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import {Home, About, Data, Contact, } from "./page"


const Anime = () => {

    const location = useLocation();

  return (
    <Routes location={location} key={location.pathname} >
        <Routes>
            <Route path="/" element={<Home/>} />
        
            <Route path="/about" element={<About/>} />
            <Route path="/data" element={<Data/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    </Routes>


  )
}

export default Anime