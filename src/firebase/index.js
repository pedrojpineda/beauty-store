import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCGp7icBCjvdg74HQyanNV5Q84curmidLs",
    authDomain: "beauty-store-353cc.firebaseapp.com",
    projectId: "beauty-store-353cc",
    storageBucket: "beauty-store-353cc.appspot.com",
    messagingSenderId: "1036462801626",
    appId: "1:1036462801626:web:2de7e14da041ef14039be3",
    measurementId: "G-Q5GL3XQH7T"
});

export const getFirebase = () => app;
export const getFirestore = () => app.firestore();