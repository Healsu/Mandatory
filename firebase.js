// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA7RKmQzdgP7VRVUKgZZotUOWQeQ9wA38U",
    authDomain: "mandatory1-55b54.firebaseapp.com",
    projectId: "mandatory1-55b54",
    storageBucket: "mandatory1-55b54.appspot.com",
    messagingSenderId: "482116650116",
    appId: "1:482116650116:web:e10585864093824e58aed1",
    measurementId: "G-SPW1DL1NRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore();

export const storage = getStorage(app)