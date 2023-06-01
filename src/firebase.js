// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoVLDaJbjA01igabqXgdlGk4CWt8mZJ2w",
  authDomain: "real-estate-react-bd380.firebaseapp.com",
  projectId: "real-estate-react-bd380",
  storageBucket: "real-estate-react-bd380.appspot.com",
  messagingSenderId: "12365938802",
  appId: "1:12365938802:web:3187b8eb2b3021137782eb"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore() 