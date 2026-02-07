// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-80d99.firebaseapp.com",
  projectId: "mern-estate-80d99",
  storageBucket: "mern-estate-80d99.firebasestorage.app",
  messagingSenderId: "405748736220",
  appId: "1:405748736220:web:3c5c2f9c01d149bc231419",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
