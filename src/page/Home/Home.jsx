import React from 'react'

import Ecommerce from '../../data/image/Ecommerce.png'
import Dashboard from '../../data/image/dashboard.png'
import "./Home.css"


const Home = () => {
  return (
    <div className=" border-[#14fe17] border-solid border-2 mx-4 text-xl p-4 mt-5">
      <p className=" inline">
        <p className="leading-relaxed ">Hi there! I'm Tran Minh Khang.</p><br/>
        I enjoy developing programming, specifically javascript, and I enjoy utilizing Tailwind CSS and the ReactJS library. I have been honing my programming language skills for the past three years. I now want to put everything I have learnt into practice and improve your business. I'm the one that can transport your thoughts into reality and advance them. I'm hoping to use that to submit a front-end developer application.
      </p>
        <br />
        <br />
        <span>
          Feel free to explore my website ❤
        </span>
        <div className="my-5" >
          <p className=" uppercase text-center ">highlight project</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border-[#14fe17] md:border-solid md:border-2 mx-4 ">
            <a href="https://nxg-car-store.netlify.app/" >
              <img src={Ecommerce} className="img h-52 m-auto mt-3 "/>
              <p className="text-center hover:underline">Ecommerce store</p>
            </a>
            <p className="text-left pl-3 ">
            Using the <b>React</b> library and <b>Material-Ui</b> to build a complete eCommerce website that can pay online through the Stripe payment gateway.
            </p>
          </div>

          <div className="border-[#14fe17] md:border-solid md:border-2">
            <a href="https://cv-dashboar.netlify.app/" >
              <img src={Dashboard} className="img h-52  m-auto pb-8 mt-3"/>
              <p className="text-center hover:underline">React dashboard</p>
            </a>
            <p className="text-left pl-3">
              A beautiful React Dashboard, using Tailwind in combination with the Syncfusion library.
            </p>
          </div>
          
          
        </div>
        
    </div>
  )
}

export default Home