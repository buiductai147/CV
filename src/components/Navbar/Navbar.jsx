import React from 'react'
import {Home, About, Data, Contact, } from "../../page"
 import { Link, NavLink } from 'react-router-dom';

import { navBarLink } from "../../data/myData"

const Navbar = () => {
 
  const  activeLink = "z-40 bg-main-dark-bg w-full h-5  border-solid  border-[#14fe17] border-x-2 border-t-2 relative top-8  "
  
  const normalLink = "z-40  w-full  relative top-8  ";
  return (
    <div className="w-full h-32">    
      <div className="flex justify-around  ">
        <div className="uppercase">
          <div className=" text-center text-2xl bold   m-auto  relative top-6">
            <Link to="/">
              <span>
              TRAN MINH KHANG              
              </span>          
            </Link>
          </div>
          
        </div>

        <div className=" flex  mt-10  " >
          {/* className="flex   sm:mx-1 ml-8 p-12 cursor-pointer" */}
          <div className="flex  justify-between " >                
            { navBarLink.map((item) => (
              <>
                <NavLink 
                  to={`/${item.name}`}
                  key={item.title}
                  className={({isActive}) => (isActive ? activeLink : normalLink)}                
                >
                  <p className="uppercase cursor-pointer px-6 text-xl z-50 font-semibold relative bottom-4">
                    {item.title}
                  </p>
                  
                  <div className=" bg-main-dark-bg m-auto h-5 w-10/12 text-center relative bottom-10 pointer-events-none  "/>
                </NavLink>
              </>
            )) }
            </div>
        </div>
      </div>

      {/* Green line */}
      <div className="px-4 relative top-0.5 z-0  ">       
        <div className="bg-main-green-bg w-full h-0.5  "/>
        <div className="flex justify-between  ">       
          {/* left */}
          <div className="bg-main-green-bg left-0 h-5 w-0.5"/>
        
          {/* right */}
          <div className="bg-main-green-bg  h-5 w-0.5"/>

        </div> 
      </div>

    </div>
  )
}

export default Navbar