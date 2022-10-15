import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const StartFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDkDj9Z4eBhxmBLlkgFCgtESXYAJcbedbg",
    authDomain: "networks-react.firebaseapp.com",
    databaseURL: "https://networks-react-default-rtdb.firebaseio.com",
    projectId: "networks-react",
    storageBucket: "networks-react.appspot.com",
    messagingSenderId: "177424658927",
    appId: "1:177424658927:web:a8ca9fa431bf5258dd461a",
  };

  const app = initializeApp(firebaseConfig);

  return getDatabase(app);
};

export default StartFirebase;

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCYEjiTR9yCHEGTOGAPIIhOoQ8_i9usvuQ",
//   authDomain: "networks-3ffac.firebaseapp.com",
//   projectId: "networks-3ffac",
//   storageBucket: "networks-3ffac.appspot.com",
//   messagingSenderId: "137155469520",
//   appId: "1:137155469520:web:234e5945e7e760ea533ed5",
//   measurementId: "G-0L1FX3RZ0R",
// };

// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();

// export { db };
// export default firebase;
