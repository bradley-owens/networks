import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYEjiTR9yCHEGTOGAPIIhOoQ8_i9usvuQ",
  authDomain: "networks-3ffac.firebaseapp.com",
  projectId: "networks-3ffac",
  storageBucket: "networks-3ffac.appspot.com",
  messagingSenderId: "137155469520",
  appId: "1:137155469520:web:234e5945e7e760ea533ed5",
  measurementId: "G-0L1FX3RZ0R",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
export default firebase;
