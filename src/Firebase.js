// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAH0yQyBCjMEk1KLwdYWahh7QIM44CTd0",
  authDomain: "sharpe-ai-assignment-cf849.firebaseapp.com",
  projectId: "sharpe-ai-assignment-cf849",
  storageBucket: "sharpe-ai-assignment-cf849.appspot.com",
  messagingSenderId: "851744510927",
  appId: "1:851744510927:web:cc5be820597b90d2c8b8ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
