// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF2chgb4JF5ssB5KqtewQNeAAd2PA7h54",
  authDomain: "rikkei-job.firebaseapp.com",
  projectId: "rikkei-job",
  storageBucket: "rikkei-job.firebasestorage.app",
  messagingSenderId: "898168036858",
  appId: "1:898168036858:web:6f1bebfdb286d889ae1843",
  measurementId: "G-J8TE0D83SC"
};

// Initialize Firebase
con
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);