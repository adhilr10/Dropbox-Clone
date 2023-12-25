// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjVMxm7GHCF7ArzS4HdKur6renE6TBZ38",
  authDomain: "dropbox-clone-4817e.firebaseapp.com",
  projectId: "dropbox-clone-4817e",
  storageBucket: "dropbox-clone-4817e.appspot.com",
  messagingSenderId: "861306716906",
  appId: "1:861306716906:web:437497ff7d8ce6f36acd93",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
