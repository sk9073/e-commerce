import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAoFANK-zAJOTaOzFKqaiUREy2JmQcm2kk",
    authDomain: "ecom-bc3a0.firebaseapp.com",
    projectId: "ecom-bc3a0",
    storageBucket: "ecom-bc3a0.appspot.com",
    messagingSenderId: "293737409341",
    appId: "1:293737409341:web:3d06a3f415844933d7b354",
    measurementId: "G-W0DFXQD4DS"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;