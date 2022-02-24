import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration

const firebaseConfig = {
apiKey: "AIzaSyD6_f9-HUGnqNy1vpGjqmXA-ecnPuT7SOE",
authDomain: "coderhouse-ecommerce-6b542.firebaseapp.com",
projectId: "coderhouse-ecommerce-6b542",
storageBucket: "coderhouse-ecommerce-6b542.appspot.com",
messagingSenderId: "525415113708",
appId: "1:525415113708:web:a99835a90867019b86d6c9"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);