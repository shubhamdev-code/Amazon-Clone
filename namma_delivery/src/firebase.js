// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKyVxhyx-D99EVO9KJK5AM7n9VfE50aWQ",
  authDomain: "clone-4a9d0.firebaseapp.com",
  projectId: "clone-4a9d0",
  storageBucket: "clone-4a9d0.firebasestorage.app",
  messagingSenderId: "1005593246392",
  appId: "1:1005593246392:web:fa4d9c75937f1defd4924d",
  measurementId: "G-R85DLXF8PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);