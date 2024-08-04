import React from 'react'
import NewLogin from '../components/NewLogin'
import Header from '../components/Header'


function Register() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased">
    <div className="fixed top-0 -z-10 h-full w-full">
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
    </div>
    <div className="container mx-auto px-7">
    <Header/>
    <NewLogin/>
    </div>
      
    </div>
  )
}

export default Register
