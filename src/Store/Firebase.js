import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// const StartFirebase = () => {
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
//   return getDatabase(app);
// };

export const storage = getStorage(app);
export const StartFirebase = getDatabase(app);

// export default StartFirebase;
