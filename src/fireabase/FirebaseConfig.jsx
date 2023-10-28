// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKRMQ45X2426zSsK7s4vIxWvJNEdMuMGk",
  authDomain: "htmproject-b6edb.firebaseapp.com",
  projectId: "htmproject-b6edb",
  storageBucket: "htmproject-b6edb.appspot.com",
  messagingSenderId: "799899600400",
  appId: "1:799899600400:web:6541f96b41d2c706582c95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };