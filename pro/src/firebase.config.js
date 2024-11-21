
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBT9eeTzDQPF__vSU7eWHom9OEQowGu3g0",
  authDomain: "reactfibrous.firebaseapp.com",
  projectId: "reactfibrous",
  storageBucket: "reactfibrous.firebasestorage.app",
  messagingSenderId: "1091893930788",
  appId: "1:1091893930788:web:adcf79085f088f1cdd61b1",
  measurementId: "G-4GH0G1YX58",
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);