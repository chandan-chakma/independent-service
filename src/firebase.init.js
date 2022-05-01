// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC20WhTfvPHcWA7rNzGTM7TGCXSIy90RjY",
    authDomain: "travel-6e5dd.firebaseapp.com",
    projectId: "travel-6e5dd",
    storageBucket: "travel-6e5dd.appspot.com",
    messagingSenderId: "1070187047111",
    appId: "1:1070187047111:web:7228c1be4ef72411b636e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;