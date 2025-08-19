// Import Firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase Config (replace with your values from console)
const firebaseConfig = {
  apiKey: "AIzaSy...xyz",
  authDomain: "redecor.firebaseapp.com",
  projectId: "redecor",
  storageBucket: "redecor.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
