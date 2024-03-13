// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ahen-internship.firebaseapp.com",
  projectId: "ahen-internship",
  storageBucket: "ahen-internship.appspot.com",
  messagingSenderId: "182212005991",
  appId: "1:182212005991:web:f5ba7edcd813df0cc3c4c2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
