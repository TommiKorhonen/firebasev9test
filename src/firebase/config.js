import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAA3PMW-8NDFxuFJvkSRXzNECrukn-8MzE",
  authDomain: "readinglistapp-15ce5.firebaseapp.com",
  projectId: "readinglistapp-15ce5",
  storageBucket: "readinglistapp-15ce5.appspot.com",
  messagingSenderId: "734940107097",
  appId: "1:734940107097:web:f7956c3e2c65cb483a3c48",
};

//init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

// init firebase auth
const auth = getAuth();

export { db, auth };
