import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDymHA-o-kG5IzYuo52l9QNcyBuiT3BDtk",
    authDomain: "matchup-smash.firebaseapp.com",
    databaseURL: "https://matchup-smash.firebaseio.com",
    projectId: "matchup-smash",
    storageBucket: "",
    messagingSenderId: "79137689941",
    appId: "1:79137689941:web:fd5f94bce424f11f095fdc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;