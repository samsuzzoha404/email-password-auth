// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB81luyP7V4TyMkDSQZOWJUsvZYK140iJ8",
  authDomain: "email-password-auth-6fa9c.firebaseapp.com",
  projectId: "email-password-auth-6fa9c",
  storageBucket: "email-password-auth-6fa9c.firebasestorage.app",
  messagingSenderId: "591792574538",
  appId: "1:591792574538:web:19cdf4de4f09d23a2f56b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);