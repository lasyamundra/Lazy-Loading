import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDggMOhBgyQi80BGq_uvhdb6lxohRsMQ3s",
    authDomain: "wily-app-56893.firebaseapp.com",
    projectId: "wily-app-56893",
    storageBucket: "wily-app-56893.appspot.com",
    messagingSenderId: "726785766907",
    appId: "1:726785766907:web:55a976b59f219bb8db475e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();