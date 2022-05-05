// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACTapiKey,
    authDomain: process.env.REACTauthDomain,
    projectId: process.env.REACTprojectId,
    storageBucket: process.env.REACTstorageBucket,
    messagingSenderId: process.env.REACTmessagingSenderId,
    appId: process.env.REACTappId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;