// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPVIzom2uYd4E1iE3_ZzNkpAMl7jrwelo",
  authDomain: "miniblog-7c796.firebaseapp.com",
  projectId: "miniblog-7c796",
  storageBucket: "miniblog-7c796.appspot.com",
  messagingSenderId: "687155535336",
  appId: "1:687155535336:web:12e58a7e9a41650da2985d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export{ db };
