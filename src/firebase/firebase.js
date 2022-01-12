import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC7KeSEaSzxS4kPM-GMnBHX4OwFsmUaMfI",
  authDomain: "patient-crud-805be.firebaseapp.com",
  databaseURL: "https://patient-crud-805be-default-rtdb.firebaseio.com",
  projectId: "patient-crud-805be",
  storageBucket: "patient-crud-805be.appspot.com",
  messagingSenderId: "934089822736",
  appId: "1:934089822736:web:35f045456db04db4283095"
};

let firebase = initializeApp(firebaseConfig);


export default firebase.database().ref()