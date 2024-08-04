import { createUserWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth,db } from '../firebase/firebase';
import {setDoc,doc} from "firebase/firestore";
import { motion } from 'framer-motion';


function NewLogin() {

  const navigate = useNavigate()
    const [first,firsttxt] = useState();
    const[last,lasttxt] = useState();
    const [mail,mailtxt] = useState();
    const [ pass,passtxt] = useState();

    const handleBack = ()=>{
      navigate('/');
    }

    const handleRegister= async(e) =>{
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth,mail,pass);
            const user = auth.currentUser;
            console.log(user);
            if (user){
              await setDoc(doc(db,"Users",user.uid),{
                email: user.email,
                FirstName : first,
                LastName: last
              }); 
            }
            navigate("/")
            console.log("user register successfully")
        } catch (error) {
            console.log(error.message)
            
        }
    }
  return (
    <div className="text-neutral-950 pb-4 lg:*:mb-3.5">

      <motion.div 
       initial={{ opacity: 0, scale: 5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]}}
      className="flex flex-wrap flex-col bg-slate-200 rounded-2xl shadow-2xl content-center mt-9">
    
    <motion.div className="text-7xl font-mono text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center mt-9 flex flex-wrap"
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
    > <span className="font-bold">New </span> Register</motion.div>
    
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
      className="flex flex-wrap flex-col justify-center shadow-xl text-center content-center my-9 bg-slate-100 placeholder-gray-500 p-3 m-2 rounded-lg 
                      border-2 border-neutral-950
                      focus:outline-white">
                       

                      <form onSubmit={handleRegister}>
                        <div className="flex flex-nowrap justify-center flex-col content-center m-2">

                      <div className="text-neutral-950 font-bold">First Name</div>
                      <div className="pplaceholder-gray-500 rounded-lg 
                      border-2 border-neutral-500
                      focus:outline-white"><input type="text"  
                      onChange={(e)=> firsttxt(e.target.value)}
                      placeholder="First Name" required/></div>
                      </div>

                         <div className="flex flex-nowrap justify-center flex-col content-center m-2">

                      <div className="text-neutral-950 font-bold">Last Name</div>
                      <div className="pplaceholder-gray-500 rounded-lg 
                      border-2 border-neutral-500
                      focus:outline-white"><input type="text"  onChange={(e)=>lasttxt(e.target.value)} placeholder="Last Name" required/></div>
                      </div>

                       <div className="flex flex-nowrap justify-center flex-col content-center m-2">

                      <div className="text-neutral-950 font-bold">Email</div>
                      <div className="pplaceholder-gray-500 rounded-lg 
                      border-2 border-neutral-500
                      focus:outline-white"><input type="email"  onChange={(e)=>mailtxt(e.target.value)} placeholder="Email" required/></div>
                      </div>

                       <div className="flex flex-nowrap justify-center flex-col content-center m-2">

                      <div className="text-neutral-950 font-bold">Password</div>
                      <div className="pplaceholder-gray-500 rounded-lg 
                      border-2 border-neutral-500
                      focus:outline-white"><input type="password"  onChange={(e)=> passtxt(e.target.value)} placeholder="Password" required/></div>
                      </div>
                      <motion.div 
                       whileHover={{ scale: [null, 1, 1.04] }}
                      transition={{ duration: 0.2 }}
                      className=" border-2 border-indigo-600 font-bold rounded-lg shadow-2xl hover:bg-slate-200 mt-4 lg:mb-4">
                       <button type="submit">Register</button></motion.div>
                      
                      </form>
      
      </motion.div>
      <motion.div 
       whileHover={{ scale: [null, 1, 1.04] }}
      transition={{ duration: 0.2 }}
      className="flex flex-nowrap justify-center content-center mb-5 rounded-3xl w-auto">
          <button className="shadow-xl hover:bg-slate-300 rounded-lg" onClick={handleBack}>🔙 Back</button>
      </motion.div>

      </motion.div>

    </div>
  )
}

export default NewLogin
