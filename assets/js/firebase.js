// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9udbQWodeOhlK-2d5aF39L7y3w1bcVag",
  authDomain: "web-app-a1ad1.firebaseapp.com",
  projectId: "web-app-a1ad1",
  storageBucket: "web-app-a1ad1.appspot.com",
  messagingSenderId: "780770274124",
  appId: "1:780770274124:web:c58fb11e52db09b862bde9",
  measurementId: "G-HTVZ9WR4QJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);