// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCH_LVu2tcxWK6-Ie18VeNjXx2XzLj6PtA",
    authDomain: "zonix-waitlist-daf64.firebaseapp.com",
    projectId: "zonix-waitlist-daf64",
    storageBucket: "zonix-waitlist-daf64.firebasestorage.app",
    messagingSenderId: "208954060253",
    appId: "1:208954060253:web:2e9549cdd5972393ce9a34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
