import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCRTq-lQ_VONE8ngnObhfyp7Q3mitpnHMs",
  authDomain: "insta-clone-852ab.firebaseapp.com",
  databaseURL: "https://insta-clone-852ab.firebaseio.com",
  projectId: "insta-clone-852ab",
  storageBucket: "insta-clone-852ab.appspot.com",
  messagingSenderId: "501875171214",
  appId: "1:501875171214:web:c518cc6bee06bf5c780edf"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};