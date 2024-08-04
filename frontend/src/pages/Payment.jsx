import React from 'react'
import Header from '../components/Header'
import Gateway from '../components/Gateway'


function Payment() {
  return (
  <div className="overflow-x-hidden text-neutral-300 antialiased">
    <div className="fixed top-0 -z-10 h-full w-full">
    <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
    </div>
    <div className="container mx-auto px-7">
    <Header/>
    <Gateway/>
    </div>
      
    </div>
  )
}

export default Payment
