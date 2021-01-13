import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCT8hEg7F921l4C4vrvxAgIvHOgziRL5uE",
    authDomain: "three-interview-73c12.firebaseapp.com",
    databaseURL: "https://three-interview-73c12-default-rtdb.firebaseio.com",
    projectId: "three-interview-73c12",
    storageBucket: "three-interview-73c12.appspot.com",
    messagingSenderId: "1081509318733",
    appId: "1:1081509318733:web:a20bbe8f4f1dd1e65ecc04",
    measurementId: "G-PTSFF2LGCH"
});

const auth = firebase.auth();

export { auth };

export default firebase;