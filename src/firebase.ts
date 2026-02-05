// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnVwwdB7ybYQWIbpo-RD4fOVavnKqf4nU",
  authDomain: "little-orchids.firebaseapp.com",
  projectId: "little-orchids",
  storageBucket: "little-orchids.firebasestorage.app",
  messagingSenderId: "396567454936",
  appId: "1:396567454936:web:c48f97391bfc8fcd6123ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);