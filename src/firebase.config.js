// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/Auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_API_KEY_FIREBASE_APP,
  authDomain: process.env.REACT_AUTH_DOMAIN_FIREBASE_APP,
  projectId: "testgrow-8572c",
  storageBucket: "testgrow-8572c.appspot.com",
  messagingSenderId: "962409774500",
  appId: process.env.REACT_APP_ID_FIREBASE_APP,
  measurementId: "G-Q7HN8GJWKD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
