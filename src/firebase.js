// import firebase from "firebase/app"
// import "firebase/auth"

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyB2B0n-oxx6gvXSeHabCYORphI3kplwQcg",
//   authDomain: "fir-auth-e45e4.firebaseapp.com",
//   projectId: "fir-auth-e45e4",
//   storageBucket: "fir-auth-e45e4.appspot.com",
//   messagingSenderId: "47670316660",
//   appId: "1:47670316660:web:1f5eca7987598a3c8e4b21"
// })

// export const auth = app.auth()
// export default app


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
var app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth()
export default app.database().ref();