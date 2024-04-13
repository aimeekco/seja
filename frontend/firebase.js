import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database

const firebaseConfig = {
    apiKey: "AIzaSyDQ-5YSY8l1HX4YAIVIgWWv_JZWD3Ay04s",
    authDomain: "seja-hackathon.firebaseapp.com",
    projectId: "seja-hackathon",
    storageBucket: "seja-hackathon.appspot.com",
    messagingSenderId: "138424933756",
    appId: "1:138424933756:web:d766ca80e6e12964f298f9",
    measurementId: "G-T69WLNXCMC"
  };

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();