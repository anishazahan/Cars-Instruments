// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYMtTtuGvWTWMgVP-wmqzr7mJx1FeMYpo",
  authDomain: "car-manufacturer-76b00.firebaseapp.com",
  projectId: "car-manufacturer-76b00",
  storageBucket: "car-manufacturer-76b00.appspot.com",
  messagingSenderId: "861592424602",
  appId: "1:861592424602:web:60f9511bd5e83dbee48f23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;