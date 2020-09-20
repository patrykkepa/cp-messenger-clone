import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAq2FOhD_XgMISf2DNZXe13gegbDpdRjSI",
    authDomain: "cp-messenger-clone.firebaseapp.com",
    databaseURL: "https://cp-messenger-clone.firebaseio.com",
    projectId: "cp-messenger-clone",
    storageBucket: "cp-messenger-clone.appspot.com",
    messagingSenderId: "832553657525",
    appId: "1:832553657525:web:4a725627cc891b26e2cafc",
    measurementId: "G-7X7R944CKS"
});

const db = firebaseApp.firestore();

export default db;