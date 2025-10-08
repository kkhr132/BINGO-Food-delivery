// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "demo-api-key",
  authDomain: "bingo-food-delivery-app.firebaseapp.com",
  projectId: "bingo-food-delivery-app",
  storageBucket: "bingo-food-delivery-app.firebasestorage.app",
  messagingSenderId: "1094883378597",
  appId: "1:1094883378597:web:0fb9da9cc96e7726c2144c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };