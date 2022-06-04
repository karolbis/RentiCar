// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_q6jnOv4h7ItWHMn1uPI799ycaKucybs",
    authDomain: "projekt-p2.firebaseapp.com",
    projectId: "projekt-p2",
    storageBucket: "projekt-p2.appspot.com",
    messagingSenderId: "813059906489",
    appId: "1:813059906489:web:eb6ffbdfd673bf93ac7468",
  };


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

export const auth = firebase.auth();


