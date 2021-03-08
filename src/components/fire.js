import firebase from "firebase"


var firebaseConfig = {
    apiKey: "AIzaSyBY3OH5zT0KLw9_hPOpVWoJURDERJzHsIs",
    authDomain: "sallo-su.firebaseapp.com",
    projectId: "sallo-su",
    storageBucket: "sallo-su.appspot.com",
    messagingSenderId: "615985664702",
    appId: "1:615985664702:web:418ffa00f71c927fc704ef"
  };

const fire = firebase.initializeApp(firebaseConfig);


export default fire
  