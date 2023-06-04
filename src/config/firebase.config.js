// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz7k2k_MfAO_mYvG7y0mnpQuVLN7-I0Sc",
  authDomain: "maria-mini-projects-react.firebaseapp.com",
  projectId: "maria-mini-projects-react",
  storageBucket: "maria-mini-projects-react.appspot.com",
  messagingSenderId: "837554451165",
  appId: "1:837554451165:web:4d191b32e780bd40666134"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)