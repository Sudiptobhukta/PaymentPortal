import { Routes,Route,useNavigate } from "react-router-dom";
import Home from './pages/Home.jsx'
import Payment from './pages/Payment.jsx'
import Register from "./pages/Register.jsx";
import React, { useEffect, useState } from "react";
import { auth } from "./firebase/firebase.js";


export default function App() {
  const navigate = useNavigate()
  const [user,setUser] = useState();
  useEffect(()=>{
    auth.onAuthStateChanged((user) =>{
      setUser(user)
    })
  })
  return (
    
    <Routes> 
    <Route path="/" element={ user ? navigate("/pay") : <Home/>} />
    <Route path="/pay" element={<Payment/>}/>
    <Route path="/register" element={<Register/>}/>
    </Routes>
  
  )
}