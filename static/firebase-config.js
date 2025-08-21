import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, 
         GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  "apiKey": "AIzaSyCNzlPTJMbqiKEEArqyEOVeD_Se6QMcOuA",
  "authDomain": "quadratic-poll.firebaseapp.com",
  "projectId": "quadratic-poll",
  "storageBucket": "quadratic-poll.firebasestorage.app",
  "messagingSenderId": "864268235842",
  "appId": "1:864268235842:web:146ed75d6bc810dcc769db",
  "measurementId": "G-W3KTQ563WZ"
}


  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { auth, provider, db };