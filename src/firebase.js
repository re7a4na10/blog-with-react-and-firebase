import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyB0Zyit1FFvJMiG8EFw1ahbiAlh0ZtRGNs",
  authDomain: "blog-88284.firebaseapp.com",
  projectId: "blog-88284",
  storageBucket: "blog-88284.appspot.com",
  messagingSenderId: "709981090335",
  appId: "1:709981090335:web:fb784211ab53545d955b2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };