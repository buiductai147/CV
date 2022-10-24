import React from 'react'

const Footer = () => {
  return (
    <div className=" absolute bottom-8 px-4 w-full">
        <div className="text-main">
            <div className=" bg-transparent-bg">
                <p className=" pl-4 capitalize">&copy; {new Date().getFullYear()} tran minh khang. all rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer