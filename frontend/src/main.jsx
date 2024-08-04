import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { PayPalScriptProvider} from "@paypal/react-paypal-js";
import App from './App.jsx'
import './index.css'
import {GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId="192914531201-vf39vfo5c502klqnntc5oqtntpcgs74a.apps.googleusercontent.com">
  <PayPalScriptProvider clientId="AYxuzfv8CH-M4U3siB9Lg1WnLfV7zKHarVTVlMeya_9nhZZ1NuZXgQQDPs_gDIgZqAdU4YNyDkL2rIx_">
  <BrowserRouter>
<App/>
  </BrowserRouter>
  </PayPalScriptProvider>
  </GoogleOAuthProvider>
  </React.StrictMode>,
)
