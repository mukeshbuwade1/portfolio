// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA86Njg1RkDcoB2KUb0w64qBYBWVf49OHk",
    authDomain: "portfolio-490fb.firebaseapp.com",
    projectId: "portfolio-490fb",
    storageBucket: "portfolio-490fb.appspot.com",
    messagingSenderId: "696699260016",
    appId: "1:696699260016:web:51169d51b8082d0152b8b5",
    measurementId: "G-XSW96LBJCF"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db  = getFirestore(app)