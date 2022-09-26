import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAKyiRdNTVi-9KsdiBwQYk218yetmIOvkQ",
  authDomain: "keep-notes-bb325.firebaseapp.com",
  projectId: "keep-notes-bb325",
  storageBucket: "keep-notes-bb325.appspot.com",
  messagingSenderId: "870960162117",
  appId: "1:870960162117:web:302ae07b3f1efe5fd10a2c",
  measurementId: "G-QHF4CJJXEN"
};

let App = initializeApp(firebaseConfig);
export default App;