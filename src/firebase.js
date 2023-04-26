// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmMBf152rgxnE8jMR0_jlphDfYY2hgwik",
  authDomain: "swm-mini-32.firebaseapp.com",
  projectId: "swm-mini-32",
  storageBucket: "swm-mini-32.appspot.com",
  messagingSenderId: "539643808395",
  appId: "1:539643808395:web:29058f8e0773f9fef6228e",
  measurementId: "G-JKWLJLYD0R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db }
// const analytics = getAnalytics(app);