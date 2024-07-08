// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7PRxK0KNvsV1MEvUvGz6N6qI1YQ34R1E",
  authDomain: "netflixgpt-4278b.firebaseapp.com",
  projectId: "netflixgpt-4278b",
  storageBucket: "netflixgpt-4278b.appspot.com",
  messagingSenderId: "746639411992",
  appId: "1:746639411992:web:dfb8f89a4215104706ec6d",
  measurementId: "G-5ZHD5LF4GR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
