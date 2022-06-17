// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIuFvTwjsJOD_ofeag99ljXKHtNlf3DV0",
  authDomain: "river-daylight-346607.firebaseapp.com",
  projectId: "river-daylight-346607",
  databaseURL: "https://river-daylight-346607-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "river-daylight-346607.appspot.com",
  messagingSenderId: "952527111200",
  appId: "1:952527111200:web:7d88baf2e642e474a96845",
  measurementId: "G-EEZBGT7HKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);
export const auth = getAuth(app);