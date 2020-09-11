import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTRQd43m2NLLWgCSQTFJCtL8tkmaVEWjs",
  authDomain: "image-load-861a5.firebaseapp.com",
  databaseURL: "https://image-load-861a5.firebaseio.com",
  projectId: "image-load-861a5",
  storageBucket: "image-load-861a5.appspot.com",
  messagingSenderId: "711471833676",
  appId: "1:711471833676:web:a5dea52bfba994cf860ae9",
  measurementId: "G-ZZHM1CQ1XK",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };
