import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDoARfNzMqzrFSWXwENAcXDkIOn1bhELX0",
    authDomain: "get-selected-ai.firebaseapp.com",
    projectId: "get-selected-ai",
    storageBucket: "get-selected-ai.appspot.com",
    messagingSenderId: "101312811899",
    appId: "1:101312811899:web:225379d09931028a94e3de",
    measurementId: "G-Q2VLMCD6X7"
    };
    
    
    
   // Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export {auth};
