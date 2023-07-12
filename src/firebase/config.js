import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgm_ZSlGQdfR2cjTGO8ZCjW_4SALlmdfc",
  authDomain: "readinglistapp-99db1.firebaseapp.com",
  projectId: "readinglistapp-99db1",
  storageBucket: "readinglistapp-99db1.appspot.com",
  messagingSenderId: "482513549386",
  appId: "1:482513549386:web:105d781e01a82c15044eb3",
};

//init firebase
initializeApp(firebaseConfig);

//init firestore
const db = getFirestore();

export { db };
