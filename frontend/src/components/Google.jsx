import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { FaGoogle } from 'react-icons/fa6'
import { auth } from '../firebase/firebase';



function Google() {
    function Glogin(){
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider),then(async (result)=>{
            console.log(result);
        })
    }

  return (
    <div className="flex flex-nowrap justify-center">
   <button onClick={Glogin}><FaGoogle/></button>
    </div>
  )
}

export default Google
