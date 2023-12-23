// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnE4h_QYcKQf2AoWh0qwkRCOmTvu81BLY",
  authDomain: "task-project-175e5.firebaseapp.com",
  databaseURL: "https://task-project-175e5-default-rtdb.firebaseio.com",
  projectId: "task-project-175e5",
  storageBucket: "task-project-175e5.appspot.com",
  messagingSenderId: "73674328633",
  appId: "1:73674328633:web:8d869ddc23f0e5a5c29be8",
  measurementId: "G-3F5HKWRGRB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
