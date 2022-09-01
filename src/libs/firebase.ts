import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCzZDzjhVBjGFwQLXJ6wFEn-l5hwv2Un6A",
  authDomain: "blockbuster-4e9b5.firebaseapp.com",
  projectId: "blockbuster-4e9b5",
  storageBucket: "blockbuster-4e9b5.appspot.com",
  messagingSenderId: "745717337346",
  appId: "1:745717337346:web:946923ace187a65533861b",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
