import React from 'react'

const About = () => {
  //  infomation about how to make this page;
  return (
    <div className=" border-[#14fe17] border-solid border-2 mx-4 text-xl p-4 mt-5">
      <div className="block">
        <p className="font-bold text-center my-3 text-2xl"> About this website</p>
        <p> I make this website to self-introduction and prove my skills to HR.
           The best way to view this website is on a laptop or pc, because i didn't implemented responsive web design and some other stuff. But soon, I
            will do something more to make this website better. Here it to do list: 
        </p>
        <div className="block mt-11">
          <p>Responsive design =={'>'} not yet</p>
          <p>Responsive design =={'>'} not yet</p>
          <p>Responsive design =={'>'} not yet</p>
          <p>Responsive design =={'>'} not yet</p>
          <p>Responsive design =={'>'} not yet</p>
        </div>
      </div>  
    </div>
  )
}

export default About