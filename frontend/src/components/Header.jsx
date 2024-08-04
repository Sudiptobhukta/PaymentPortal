import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import {  motion } from 'framer-motion'

function Header() {
  return (
    <motion.nav className="flex items-center justify-between mb-5 py-2">
      <motion.div 
      initial={{x:-100 , opacity:0}}
      animate={{x:0, opacity:1}}
      transition={{duration:1,delay:1.5}}
      className="flex flex-shrink-0 items-center text-5xl font-mono text-neutral-950">Payment <span className="font-bold">Portal</span>
      
      </motion.div>
      
      
      <motion.div className="m-8 flex items-center text-neutral-950 justify-center gap-3 text-2xl"
      initial={{x:100,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{duration:1,delay:1.5}}
      >
      <a href="https://www.instagram.com/iamsudiptobhukta/"><FaInstagram/></a>
      <a href="https://x.com/sudiptob11"><FaSquareXTwitter/></a>

      </motion.div>
    </motion.nav>
  )
}

export default Header
