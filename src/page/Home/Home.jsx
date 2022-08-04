import React from 'react'

import Ecommerce from '../../data/image/Ecommerce.png'
import Dashboard from '../../data/image/dashboard.png'
import "./Home.css"


const Home = () => {
  return (
    <div className=" border-[#14fe17] border-solid border-2 mx-4 text-xl p-4 mt-5">
      <p className=" inline">
        <p className="leading-relaxed">Hi there! I'm Tran Minh Khang.</p><br/>
        I love writing code, especially javascript and I love working with ReactJS library and using Tailwind CSS. In the last 3 years, 
        I've been practicing my skills in programming languages. And now, I want to use what I have learned in practice and add value to your company. 
        I'm the guy to take your ideas to the next level, and teleport them into reality.
        With that, I hope to apply to the front end developer.
      </p>
        <br />
        <br />
        <span>
          Feel free to explore my website ❤
        </span>
        <div className="my-5" >
          <p className=" uppercase text-center ">highlight project</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="border-[#14fe17] border-solid border-2 mx-4 ">
            <a href="https://nxg-car-store.netlify.app/" >
              <img src={Ecommerce} className="img h-52 m-auto mt-3 "/>
              <p className="text-center hover:underline">Ecommerce store</p>
            </a>
            <p className="text-left pl-3 ">
            Using the <b>React</b> library and <b>Material-Ui</b> to build a complete eCommerce website that can pay online through the Stripe payment gateway.
            </p>
          </div>

          <div className="border-[#14fe17] border-solid border-2">
            <a href="https://cv-dashboar.netlify.app/" >
              <img src={Dashboard} className="img h-52  m-auto pb-8 mt-3"/>
              <p className="text-center hover:underline">React dashboard</p>
            </a>
            <p className="text-left pl-3">
              A beautiful Dashboard website, using Tailwind in combination with the Syncfusion library.
            </p>
          </div>
          
          
        </div>
        
    </div>
  )
}

export default Home