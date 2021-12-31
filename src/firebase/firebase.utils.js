import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config =  {
    apiKey: "AIzaSyCHGkRdJeuyV7rV_3MJQNyMP8Wk2mU7aB0",
    authDomain: "e-comm-ab733.firebaseapp.com",
    projectId: "e-comm-ab733",
    storageBucket: "e-comm-ab733.appspot.com",
    messagingSenderId: "656489507251",
    appId: "1:656489507251:web:b1240c2a7972e9e929c3c6",
    measurementId: "G-73WZFL9X8F"
  };
  

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;