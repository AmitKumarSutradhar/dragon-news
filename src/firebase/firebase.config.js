// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGWytr8fxWQJBTwrGxpQpLkzWTaUl5VSs",
  authDomain: "dragon-news-cbbc6.firebaseapp.com",
  projectId: "dragon-news-cbbc6",
  storageBucket: "dragon-news-cbbc6.firebasestorage.app",
  messagingSenderId: "992931932516",
  appId: "1:992931932516:web:0dc0f0c61c9709d16a3271"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;