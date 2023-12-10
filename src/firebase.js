import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAvOzdtA3e0-U6vFtVxSDa1inNzZwXfdX4",
  authDomain: "hackathon-efb1a.firebaseapp.com",
  projectId: "hackathon-efb1a",
  storageBucket: "hackathon-efb1a.appspot.com",
  messagingSenderId: "126070350066",
  appId: "1:126070350066:web:7c223b9fe907d9c090f06b",
  measurementId: "G-4QN3WDE07C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)