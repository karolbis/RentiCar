// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAajg5zkgvB1cmKiXoJQCQoLjaRAUbn6WI",
  authDomain: "fir-auth-8d999.firebaseapp.com",
  projectId: "fir-auth-8d999",
  storageBucket: "fir-auth-8d999.appspot.com",
  messagingSenderId: "43496787084",
  appId: "1:43496787084:web:c185efdfe7548871debfa9"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth }; 