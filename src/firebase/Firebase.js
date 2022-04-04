
// import { GoogleAuthProvider, getAuth,
// signInWithPopup,
// signInWithEmailAndPassword,
// createUserWithEmailAndPassword,
// sendPasswordResetEmail,
// signOut } from 'firebase/auth';
// import { 
//     getFirestore,
//     query,
//     getDocs,
//     collection,
//     where,
//     addDoc
// } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4lOW1gY8BZiLNTQv8g4wxvbC1Lg1RXMM",
  authDomain: "michael-webb-capstone.firebaseapp.com",
  projectId: "michael-webb-capstone",
  storageBucket: "michael-webb-capstone.appspot.com",
  messagingSenderId: "657728763735",
  appId: "1:657728763735:web:db1dd5b8cca32200ddb012",
  measurementId: "G-W0KFB63JSL"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
      const res = await auth.signInWithPopup(googleProvider);
      const user = res.user;
      const query = await db
        .collection('users')
        .where('uid', '==', user.uid)
        .get();
      if (query.docs.length === 0) {
        await db.collection('users').add({
          uid: user.uid,
          name: user.displayName,
          authProvider: 'google',
          email: user.email,
        });
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword( email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const user = res.user;
      await db.collection('users').add({
        uid: user.uid,
        name,
        authProvider: 'local',
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
const sendPasswordReset = async (email) => {
  try {
    await auth.sendPasswordResetEmail( email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  auth.signOut();
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};