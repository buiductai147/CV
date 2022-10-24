import React from 'react'
// using
import { AiFillGithub } from 'react-icons/ai';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';
import { RiReactjsLine } from 'react-icons/ri';
import { SiRedux } from 'react-icons/si';
import { SiTailwindcss} from 'react-icons/si';
import { SiMaterialui} from 'react-icons/si';
import { SiReactrouter} from 'react-icons/si';

// Learning:
import { SiNodedotjs } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';

import "./Data.css"

const Data = () => {
  //  about khang Skill infomation : programming language and so on...
  return (
    <div className=" border-[#14fe17] border-solid border-2 mx-4 mt-8 md:mt-0">
      <div className="m-4 ">
        <span className="text-4xl block">My Skill</span>
        <p className="text-3xl text-center pb-4"> Using </p>

          <div className="grid rid-cols-2 gap-2 md:grid-cols-5 md:gap-4">
            <div className="border-[#14fe17] border-solid border-2 ">
              <AiFillHtml5 size={110} className=" py-3 m-auto"/>
              <p className="text-center text-xl ">HTML5</p>
            </div>

            <div className="border-[#14fe17] border-solid border-2 ">
              <IoLogoCss3 size={110} className=" py-3 m-auto"/>
              <p className="text-center text-xl ">CSS3</p>
            </div>

            <div className="border-[#14fe17] border-solid border-2 ">
              <IoLogoJavascript size={110} className=" py-3 m-auto"/>
              <p className="text-center text-xl ">JavaScript</p>
            </div>

            <div className="border-[#14fe17] border-solid border-2 ">
              <AiOutlineConsoleSql size={110} className=" py-3 m-auto"/>
              <p className="text-center text-xl ">SQL</p>
            </div>
          
            <div className="border-[#14fe17] border-solid border-2 ">
              <AiFillGithub size={110} className=" py-3 m-auto"/>
              <p className="text-center text-xl ">Github</p>
            </div>
            
            {/* end line one */}
            <div className="border-[#14fe17] border-solid border-2 ">
              <RiReactjsLine   size={110} className=" py-3 m-auto"/>
              <p className="text-center text-xl ">REACTJS</p>
            </div>
            
            <div className="border-[#14fe17] border-solid border-2 ">
              <SiRedux   size={110} className=" py-3 m-auto"/>
              <p className="text-center text-xl ">Redux</p>
            </div>
          
            <div className="border-[#14fe17] border-solid border-2 ">
              <SiTailwindcss size={110} className=" py-3 m-auto"/>
              <p className="text-center text-xl ">tailwindCSS</p>
            </div>
            
            <div className="border-[#14fe17] border-solid border-2 ">
              <SiMaterialui size={110} className=" py-3 m-auto"/>
              <p className="text-center text-xl ">Material-ui</p>
            </div>
            
            <div className="border-[#14fe17] border-solid border-2 ">
              <SiReactrouter size={110} className=" py-3 m-auto"/>
              <p className="text-center text-xl ">React Router</p>
            </div>
          </div>
            {/* learning */}
          <p className="text-center text-3xl my-4"> Learning</p>

          <div className="flex sm:flex-col md:flex-row md:justify-around flex-wrap content-center  ">
            <div className="border-[#14fe17] border-solid border-2 w-80 ">
                <SiNodedotjs size={110} className=" py-3 m-auto img"/>
                <p className="text-center text-xl ">Nodejs</p>
            </div>

            <div className="border-[#14fe17] border-solid border-2 w-80  ">
                <SiMongodb size={110} className=" py-3 m-auto img"/>
                <p className="text-center text-xl ">Mongodb</p>
            </div>

            <div className="border-[#14fe17] border-solid border-2  w-80 ">
                <SiTypescript size={110} className=" py-3 m-auto"/>
                <p className="text-center text-xl ">Typescript</p>
            </div>
          
          </div>
        </div>
      </div>
  )
}

export default Data