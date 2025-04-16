// frontend/src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// Your Firebase configuration object (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyAOjDWct0TFbP4lty6QW8ON3t1dCoDwssw",
  authDomain: "snowmail-70c9e.firebaseapp.com",
  projectId: "snowmail-70c9e",
  storageBucket: "snowmail-70c9e.firebasestorage.app",
  messagingSenderId: "1055419854670",
  appId: "1:1055419854670:web:bc5688b0569ca07644781f",
  measurementId: "G-23FQKY5L62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);
const storage = getStorage(app);
// Initialize Google Provider
const googleProvider = new GoogleAuthProvider();

// Initialize Apple Provider
const appleProvider = new OAuthProvider('apple.com'); // For Apple Sign-In

export { auth, googleProvider, appleProvider, storage };