import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyALasgd2N_ONJHnRuQIGHsObYDIJYISx_8",
    authDomain: "amzn-indu.firebaseapp.com",
    projectId: "amzn-indu",
    storageBucket: "amzn-indu.appspot.com",
    messagingSenderId: "919056632382",
    appId: "1:919056632382:web:1c072f9c7b489f5b8a9f6f"
  };

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();

  export default db;