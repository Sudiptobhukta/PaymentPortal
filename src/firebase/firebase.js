// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDANNVIZGjtsA8OuvCA2bh6bxFNHddSqu0",
  authDomain: "auth-login-4af03.firebaseapp.com",
  projectId: "auth-login-4af03",
  storageBucket: "auth-login-4af03.appspot.com",
  messagingSenderId: "400144581991",
  appId: "1:400144581991:web:00df24cd30de1844455bc2",
  measurementId: "G-SYT66VN23H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();

export{app,analytics,auth,db};