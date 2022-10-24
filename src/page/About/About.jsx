import React from 'react'
import { ImArrowRight } from  'react-icons/im';


const About = () => {
  //  infomation about how to make this web;
  return (
    <div className=" border-[#14fe17] border-solid border-2 mx-4 text-xl p-4 mt-5">
      <div className="block">
        <p className="font-bold text-center my-3 text-2xl"> About this website</p>
        <p> I created this website as a means of self-promotion and to demonstrate my abilities to HR. Soon, I will add more features to further improve this website. My to-do list is below:</p>
        <div className="flex justify-center">
          <div className=" mt-4 ">
            <p>Responsive design <ImArrowRight className="inline mx-1" /> ok</p>
            <p>Page Transitions <ImArrowRight className="inline mx-1" /> not yet</p>
            <p>Interactive Web Animation <ImArrowRight className="inline mx-1" /> not yet</p>          
          </div>
        </div>
      </div>  
    </div>
  )
}

export default About