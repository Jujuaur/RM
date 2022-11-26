// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBILasK5E4uJ_mCYJOYF0_kGShYfLKppvo",
  authDomain: "rm22-b7b77.firebaseapp.com",
  projectId: "rm22-b7b77",
  storageBucket: "rm22-b7b77.appspot.com",
  messagingSenderId: "542296636655",
  appId: "1:542296636655:web:951bccd2f21d99b048ef1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
