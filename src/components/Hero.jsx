import React,{useState} from 'react'
import { GoogleLogin} from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import Google from './Google';
import { motion } from "framer-motion";



function Hero() {

    const navigate = useNavigate();
    const [mail,mailtxt] = useState();
    const [ pass,passtxt] = useState();
    const handleSubmit = async (e)=>{
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth,mail,pass)
        console.log("successful")
        navigate("/pay")
      } catch (error) {
        console.log("Unsuccessful")
      }
    }

  return (
    <div className="text-neutral-950 pb-4 lg:*:mb-3.5 content-center">
    <motion.div className="flex flex-wrap flex-col content-center mt-9 bg-slate-200 rounded-2xl shadow-xl w-auto"
    initial={{ opacity: 0, scale: 5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]}}
    >
    <motion.div className="text-7xl font-mono text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center mt-9 flex flex-wrap  selection:bg-slate-600 selection:text-white"
     initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001}}}
    >SIGN <span className="font-bold">-IN</span></motion.div>

    <motion.div className="flex flex-wrap flex-col justify-center shadow-xl bg-slate-50 text-center content-center mt-9 placeholder-gray-500 p-3 m-2 rounded-lg 
                      border-2 border-neutral-950
                      focus:outline-white
                      "
                       initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001}}}>

                      <motion.form onSubmit={handleSubmit}>
                     
                       <div className="flex flex-nowrap justify-center flex-col content-center m-2">

                      <div className="text-neutral-950 font-bold">Email</div>
                      <div className="pplaceholder-gray-500 rounded-lg 
                      border-2 border-neutral-500
                      focus:outline-white"><input type="email"  onChange={(e)=>mailtxt(e.target.value)} placeholder="Email" /></div>
                      </div>

                       <div className="flex flex-nowrap justify-center flex-col content-center m-2">

                      <div className="text-neutral-950 font-bold">Password</div>
                      <div className="pplaceholder-gray-500 rounded-lg 
                      border-2 border-neutral-500
                      focus:outline-white"><input type="password" onChange={(e)=> passtxt(e.target.value)} placeholder="Password" /></div>
                      </div>
                      <motion.div className=" border-2 border-indigo-600 font-bold rounded-lg shadow-sm hover:bg-slate-300 lg:mb-4"
                      whileHover={{ scale: [null, 1, 1.04] }}
                      transition={{ duration: 0.2 }}>
                       <button type="submit">Login</button></motion.div>
                    
                      </motion.form>
             
                      </motion.div>
                      <div 
                           initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001}}}
                      >
                      <span className="flex flex-auto justify-center text-sm ">or continue with</span>
                      <motion.div 
                      whileHover={{ scale: [null, 1, 1.2] }}
                      transition={{ duration: 0.2 }}
                      className=" flex flex-row justify-center text-center text-3xl gap-3 mt-3 mb-3">
                      <Google/>
                      </motion.div>
                      <motion.span className="flex flex-auto justify-center text-sm mb-4 underline font-bold text-blue-500"
                      whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
                      ><a href="/register">New Register</a></motion.span>
                      </div>

    </motion.div>
    

    </div>
  )
}

export default Hero
