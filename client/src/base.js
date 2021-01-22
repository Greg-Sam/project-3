import firebase from 'firebase'
import 'firebase/storage'

export const imageStore = firebase.initializeApp ({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "project3-a24bc.firebaseapp.com",
  databaseURL: "https://project3-a24bc-default-rtdb.firebaseio.com",
  projectId: "project3-a24bc",
  storageBucket: "project3-a24bc.appspot.com",
  messagingSenderId: "466396383584",
  appId: "1:466396383584:web:58f8d60b13b809c0cdf605",
  measurementId: "G-E8RG5TCC3D"
})