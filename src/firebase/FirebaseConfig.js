import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCAYwTGCPFHz_GfQfgsIkSmvzGkoMfI-mc",
    authDomain: "ph-assignment-9-253ac.firebaseapp.com",
    projectId: "ph-assignment-9-253ac",
    storageBucket: "ph-assignment-9-253ac.appspot.com",
    messagingSenderId: "431565374895",
    appId: "1:431565374895:web:e54f23523176c0bc5c1b5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;