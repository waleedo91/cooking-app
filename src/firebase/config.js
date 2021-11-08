import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNmciTwz0XAmyDUue10pGft7uUovuLYm8",
  authDomain: "cooking-ninja-site-5397f.firebaseapp.com",
  projectId: "cooking-ninja-site-5397f",
  storageBucket: "cooking-ninja-site-5397f.appspot.com",
  messagingSenderId: "282631105681",
  appId: "1:282631105681:web:e11530f33dce5b7efd6330",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
