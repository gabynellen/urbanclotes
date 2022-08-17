import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBtFS81I5IFmDjW0_-hCW_Hyt5pMzN7OCw",
  authDomain: "comision41080.firebaseapp.com",
  projectId: "comision41080",
  storageBucket: "comision41080.appspot.com",
  messagingSenderId: "1043172939766",
  appId: "1:1043172939766:web:61d83ecf837b22802499d7"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDXut2i5ymxvitnPz4Z9Ah_FZi6x4TMIss",
//   authDomain: "urbanclotes724.firebaseapp.com",
//   projectId: "urbanclotes724",
//   storageBucket: "urbanclotes724.appspot.com",
//   messagingSenderId: "458744279155",
//   appId: "1:458744279155:web:0ff414c1e380f61b657a06"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)