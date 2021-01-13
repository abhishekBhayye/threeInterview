import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCB3Tq8ISy8Zqe_5ykDA3ubEfc8NU_Kzj8",
    authDomain: "three-interview.firebaseapp.com",
    databaseURL: 'https://three-interview-73c12-default-rtdb.firebaseio.com/',
    projectId: "three-interview",
    storageBucket: "three-interview.appspot.com",
    messagingSenderId: "680988804175",
    appId: "1:680988804175:web:5c3459a95079906becd63a",
    measurementId: "G-TF9WVL11J2"
});

const auth = firebase.auth();

export { auth };

export default firebase;