import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBDmmJwmkYJcKy6SY3s_zKiGHJj_o9Dq8A",
    authDomain: "todo-list-8f8cd.firebaseapp.com",
    databaseURL: "https://todo-list-8f8cd.firebaseio.com",
    projectId: "todo-list-8f8cd",
    storageBucket: "todo-list-8f8cd.appspot.com",
    messagingSenderId: "187888231583",
    appId: "1:187888231583:web:9361ce2c1c14f60a392eaa",
    measurementId: "G-93ZYMC55MP"
};

firebase.initializeApp(firebaseConfig);


export default firebase