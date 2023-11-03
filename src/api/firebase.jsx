import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmrnVd-7fWVU3X5ctzUCF8QQCFGD3RbCI",
  authDomain: "kh-mini-project-3c187.firebaseapp.com",
  projectId: "kh-mini-project-3c187",
  storageBucket: "kh-mini-project-3c187.appspot.com",
  messagingSenderId: "232061357309",
  appId: "1:232061357309:web:c9657a8dabb16df5858294",
  measurementId: "G-J49WDH1STK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();