// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";
import {  getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1y0rZ4PHIcg-roGZR9YW5fLIpxos-a2M",
  authDomain: "srilanka-business.firebaseapp.com",
  projectId: "srilanka-business",
  storageBucket: "srilanka-business.appspot.com",
  messagingSenderId: "1083805445702",
  appId: "1:1083805445702:web:3a48a2b07756b2879f6447",
  measurementId: "G-8RWTBJTX9Y",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const fbProvider = new FacebookAuthProvider();


// export const db = getFirestore();
// connectFirestoreEmulator(db, "127.0.0.1", 8080);
// export const storage = getStorage();
// connectStorageEmulator(storage, "127.0.0.1", 9199);
// export const auth = getAuth();
// connectAuthEmulator(auth, "http://127.0.0.1:9099");
// export const provider = new GoogleAuthProvider();

// if (process.env.NODE_ENV === "development") {
//   const functions = getFunctions(app);
//   connectFunctionsEmulator(functions, "127.0.0.1", 5001);
// }


// const functions = getFunctions(getApp());
// connectFunctionsEmulator(functions, "127.0.0.1", 5001);
