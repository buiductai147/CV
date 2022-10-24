import React from 'react'
// icon
import {ImHome3} from "react-icons/im";
import {FaPhoneAlt} from "react-icons/fa";
import { AiFillGithub } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import me from '../../data/image/me1.png'

import "./Contact.css"

const Contact = () => {
  return (
    <div className=" mx-4 flex justify-center">
      {/* image */}
      <div className="flex flex-col md:flex-row ">
        <div className="m-auto border-[#14fe17] md:border-solid md:border-2 ">
          <img src={me} className=" img" />
        </div>
        {/* imfomation */}
        <div className="ml-3">          
          <div className="flex top-12 md:mt-44 mt-2 ml-2 ">
            <ImHome3 size={30}/>
            <p className=" md:pl-2 text-center  pt-1"> Home: 127A, 17 Street, Tan Thong Hoi Commune, Cu Chi District, Ho Chi Minh City. </p>
          </div>
          
          <div className="flex top-12 mt-8 ml-2">
            <FaPhoneAlt size={30}/>
            <p className=" pl-2 text-center pt-1 "> +84 0961841165 </p>
          </div>
          
          <div className="flex top-12  mt-8 ml-2">
            <SiGmail size={30}/>
            <a className=" pl-2 hover:underline text-center pt-1" href='mailto:minhkhangsolo@gmail.com'> minhkhangsolo@gmail.com</a>
          </div>
          <div className="flex top-12 mt-8 ml-2 ">
            <AiFillGithub size={34}/>
            <a className=" pl-2 hover:underline text-center pt-1 mb-10" href='https://github.com/buiductai147'> Github.com/KhangSolo </a>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Contact