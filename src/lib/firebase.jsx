// src/lib/firebase.js

// ✅ Correct import from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKm-Y2QvsM7FDjpB0KfzrgxIWitBD_XWA",
  authDomain: "blanket-technologies.firebaseapp.com",
  projectId: "blanket-technologies",
  storageBucket: "blanket-technologies.appspot.com", 
  messagingSenderId: "33223865171",
  appId: "1:33223865171:web:233a1373d604f9d53527a6",
  measurementId: "G-ZHH3M5XRM1",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
