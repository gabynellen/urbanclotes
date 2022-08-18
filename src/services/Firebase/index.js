import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCJ4ThNUViOhdL_s-WvJX5ldWLqa9nfzNE",
  authDomain: "urbanclotes07.firebaseapp.com",
  projectId: "urbanclotes07",
  storageBucket: "urbanclotes07.appspot.com",
  messagingSenderId: "168989388153",
  appId: "1:168989388153:web:11c8907739d898d4f3d3a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)