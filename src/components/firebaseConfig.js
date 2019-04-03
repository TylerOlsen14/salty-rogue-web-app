import firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
        apiKey: "AIzaSyD5kJDsNUavyacmRVwP9HvaZD7d4o4qX2Q",
        authDomain: "salty-rogue.firebaseapp.com",
        databaseURL: "https://salty-rogue.firebaseio.com",
        projectId: "salty-rogue",
        storageBucket: "salty-rogue.appspot.com",
        messagingSenderId: "293014247485"
    };
    firebase.initializeApp(config);
    export default firebaseConfig