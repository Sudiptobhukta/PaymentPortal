import React, { useEffect, useState } from 'react'
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { PayPalButtons } from "@paypal/react-paypal-js";
import { auth,db } from '../firebase/firebase';
import {setDoc,doc, getDoc} from "firebase/firestore";
import { motion } from 'framer-motion';


export default function Gateway() {

  const [userData,setData] = useState(null);
  const navigate = useNavigate();
  
async function handleLogout(){
  try {
    await auth.signOut();
    googleLogout();
    navigate("/")
    
  } catch (error) {
    console.log(error.message);
  }
    
  }

const fetchData = async() =>{
  auth.onAuthStateChanged(async (user) =>{
    console.log(user)
    const docRef = doc(db,"Users",user.uid);
    const docsnap = await(getDoc(docRef));
    if (docsnap.exists()){
      setData(docsnap.data());
      console.log(docsnap.data());
      console.log(userData.FirstName);
      
    }else{
      console.log("user is not logged in");
    }
  })
}

  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div className="text-neutral-950 pb-4 lg:*:mb-3.5">
    
    <motion.div 
      initial={{ opacity: 0, scale: 5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]}}
    className="flex flex-wrap flex-col content-center mt-9 rounded-2xl bg-slate-200 shadow-2xl">
    
     { userData? 
     ( 
      <>
      <motion.div 
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
      className="text-7xl mb-6 font-mono text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center mt-9 flex flex-wrap"> Welcome&nbsp;<span className="font-bold"> {userData.FirstName}</span> </motion.div>
      <motion.div 
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
      className="flex flex-wrap content-center justify-center">
        <div className="flex">
          <PayPalButtons/></div>
      </motion.div>
      </>) :
      (<div className="flex">
      Loading...
      </div>)}
      

      <motion.div 
      whileHover={{ scale: [null, 1, 1.2] }}
      transition={{ duration: 0.2 }}
      className="my-5 flex flex-wrap-reverse justify-center text-2xl  border-neutral-950 rounded-lg ">
      <button className="font-bold bg-slate-500 px-7 rounded-full text-yellow-50" onClick={handleLogout}>
      Logout
      </button>
      </motion.div>
      </motion.div>
    </div>
  )
}
