import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDzNcMnmg9hUZeOvgOnwe5LklK4qU6edGk",
  authDomain: "crud-firebase-889a2.firebaseapp.com",
  databaseURL: "https://crud-firebase-889a2-default-rtdb.firebaseio.com",
  projectId: "crud-firebase-889a2",
  storageBucket: "crud-firebase-889a2.appspot.com",
  messagingSenderId: "721336042374",
  appId: "1:721336042374:web:41d02beac8a7602f83a207"
  };
  // Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();