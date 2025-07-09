// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz-v97lzc5rW8lOFXq8DXZRPcvFA1aTGw",
  authDomain: "electrical-smart-solutions.firebaseapp.com",
  projectId: "electrical-smart-solutions",
  storageBucket: "electrical-smart-solutions.firebasestorage.app",
  messagingSenderId: "456297435802",
  appId: "1:456297435802:web:e0af5bff60caff10ec8523",
  measurementId: "G-KWDZ7EFBZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
