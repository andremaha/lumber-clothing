import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyBs4xABlgsp7kr7_2frRoFBJgzpLrAlciQ",
    authDomain: "lumber-clothing.firebaseapp.com",
    projectId: "lumber-clothing",
    storageBucket: "lumber-clothing.appspot.com",
    messagingSenderId: "288730446797",
    appId: "1:288730446797:web:0ccd54e430402b1350a284",
    measurementId: "G-19QKX42X5D"
}

firebase.initializeApp(config);

export const auth  = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;