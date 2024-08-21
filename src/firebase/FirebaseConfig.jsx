// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBB12WSHCpo9i3Ms6myt48og0JCQsxDYiw",
    authDomain: "repliqommerce.firebaseapp.com",
    projectId: "repliqommerce",
    storageBucket: "repliqommerce.appspot.com",
    messagingSenderId: "1018421853291",
    appId: "1:1018421853291:web:ed51e733081961b82b852e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { auth, fireDB };
