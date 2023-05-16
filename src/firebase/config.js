import firebase from "firebase";
import "firebase/firebase-firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkpJBagiSeQ9lCj8Jx6Y2XVWhz6iEAdlI",
  authDomain: "cooking-90453.firebaseapp.com",
  projectId: "cooking-90453",
  storageBucket: "cooking-90453.appspot.com",
  messagingSenderId: "266451465967",
  appId: "1:266451465967:web:9aad3e9b094ad2577a8d1a",
  measurementId: "G-FPBHJEDP08"
};

firebase.initializeApp(firebaseConfig);

const projectFireStore = firebase.firestore()

export { projectFireStore }