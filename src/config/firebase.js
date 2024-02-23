// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFhesEa-tI0YhZ8tqTIwkEjkg1d2BJoz8",
  authDomain: "vite-contact-b11fb.firebaseapp.com",
  projectId: "vite-contact-b11fb",
  storageBucket: "vite-contact-b11fb.appspot.com",
  messagingSenderId: "489183074773",
  appId: "1:489183074773:web:1850fa0243d6c45209c55c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
