import React from 'react'
import {  Routes, Route, } from 'react-router-dom';
import {Home, About, Data, Contact, } from "./page"

import { Navbar, Footer } from  "./components";
import './App.css';

function App() {


  return (
    <div>
      <Navbar />    
        <Routes>
                <Route path="/" element={<Home/>} />

                <Route path="/about" element={<About/>} />
                <Route path="/data" element={<Data/>} />
                <Route path="/contact" element={<Contact/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
