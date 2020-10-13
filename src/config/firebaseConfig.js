import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB2FQbliwewONCrvntcCAPuwBuDkuxciRA",
  authDomain: "to-do-app-react-redux-firebase.firebaseapp.com",
  databaseURL: "https://to-do-app-react-redux-firebase.firebaseio.com",
  projectId: "to-do-app-react-redux-firebase",
  storageBucket: "to-do-app-react-redux-firebase.appspot.com",
  messagingSenderId: "241262128785",
  appId: "1:241262128785:web:c0b76ba4fa700681a61930"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
