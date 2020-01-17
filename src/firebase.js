import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_VAR1 + 'g',
  authDomain: 'relevocab.firebaseapp.com',
  databaseURL: 'https://relevocab.firebaseio.com',
  projectId: 'relevocab',
  storageBucket: 'relevocab.appspot.com',
  messagingSenderId: '760086624336',
  appId: '1:760086624336:web:028bfe962312615c173955',
  measurementId: 'G-B1WCGYTMHH'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
