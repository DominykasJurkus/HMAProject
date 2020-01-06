import firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDloQIU8CEi5BGD_Y8C7RrPsqldvVfdKUM",
  authDomain: "final-project-99687.firebaseapp.com",
  databaseURL: "https://final-project-99687.firebaseio.com",
  projectId: "final-project-99687",
  storageBucket: "final-project-99687.appspot.com",
  messagingSenderId: "303876070273",
  appId: "1:303876070273:web:2d312d794d2cf587aba680"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
