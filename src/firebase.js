import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFSLArA99nXy1Jyij33WRq5Cgbg3HuryQ",
  authDomain: "sk-project2022.firebaseapp.com",
  databaseURL:
    "https://sk-project2022-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sk-project2022",
  storageBucket: "sk-project2022.appspot.com",
  messagingSenderId: "1072728142943",
  appId: "1:1072728142943:web:3ab367cd2527e9b0d997ea",
  measurementId: "G-5FF4MRPG5J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
