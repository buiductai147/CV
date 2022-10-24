import React from 'react'
import {Home, About, Data, Contact, } from "../../page"
 import { Link, NavLink } from 'react-router-dom';

import { navBarLink } from "../../data/myData"
import { useNavigate } from "react-router-dom";
const NavBarMobie = () =>{
  const navigate = useNavigate();
  return(
    <div className="md:hidden mt-10 flex justify-center ">
      <select
        onChange={(e)=>navigate(e.target.value)}
        className="bg-main-dark-bg text-center m-auto bold relative top-4 cursor-pointer  text-xl z-50 font-semibold px-2.5 uppercase">
        {navBarLink.map((item)=>(
          <option value={item.name} key={item.name} className="bg-main-dark-bg text-xs ">{item.title}</option>
        ))}       
      </select>
    </div>
  )
}
// another navbarmobie doesn't use select tag
// const NavBarMobie = () =>(
//   <div class="relative inline-block text-left">
//   <div>
//     <button type="button" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
//       <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//         <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
//       </svg>
//     </button>
//   </div>

//   <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
//     <div class="py-1" role="none">
//       <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
//       <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
//       <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
//       <form method="POST" action="#" role="none">
//         <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
//       </form>
//     </div>
//   </div>
// </div>
// )
const Navbar = () => {
 
  const  activeLink = "z-40 bg-main-dark-bg w-full h-5 border-solid  border-[#14fe17] border-x-2 border-t-2 relative top-8  "
  
  const normalLink = "z-40 w-full relative top-8";
  return (
    <div className="w-full md:h-32">
        <NavBarMobie/>          
      <div className="flex justify-around  ">
        <div className="uppercase">
          <div className=" text-center text-2xl bold m-auto relative top-10 font-bold">
            <Link to="/" className="hidden md:block">
              <span>
                TRAN MINH KHANG
              </span>          
            </Link>
          </div>          
        </div>

        <div className="hidden md:flex mt-10" >
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