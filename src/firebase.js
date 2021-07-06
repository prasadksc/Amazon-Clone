import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAZlzkjWyfqf87GkNdBD-rHCMbZbtaGDSk",
    authDomain: "clone-68150.firebaseapp.com",
    projectId: "clone-68150",
    storageBucket: "clone-68150.appspot.com",
    messagingSenderId: "489848698108",
    appId: "1:489848698108:web:53b00a461c8d3908f89379",
    measurementId: "G-HSLPDHVPWC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };