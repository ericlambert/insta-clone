import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC4ozNhbgZ37L8BuEBbgYZnYJwzkmTxL9M",
    authDomain: "insta-clone-e6169.firebaseapp.com",
    projectId: "insta-clone-e6169",
    storageBucket: "insta-clone-e6169.appspot.com",
    messagingSenderId: "810351695903",
    appId: "1:810351695903:web:c206fbb4af8e80b8169d2a",
    measurementId: "G-CYQD8XHBFK"
  };

let app;

if (firebase.apps?.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.auth();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth }
