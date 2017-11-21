import * as firebase from 'firebase';

export const init = () => {
    let config = {
        apiKey: "AIzaSyAsaymKmjg2Y915skY1OjVDyhvVjjutF5w",
        authDomain: "monashstatus.firebaseapp.com",
        databaseURL: "https://monashstatus.firebaseio.com",
        projectId: "monashstatus",
        storageBucket: "monashstatus.appspot.com",
        messagingSenderId: "283934916911"
    };
    firebase.initializeApp(config);
};