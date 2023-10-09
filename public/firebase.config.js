// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUxjJFT1zPXP7I1QYBRmObRkZ9wwK3KAY",
  authDomain: "health-event-71be9.firebaseapp.com",
  projectId: "health-event-71be9",
  storageBucket: "health-event-71be9.appspot.com",
  messagingSenderId: "651867838992",
  appId: "1:651867838992:web:a25d1e31b0eca3f21dc895"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

export default auth;