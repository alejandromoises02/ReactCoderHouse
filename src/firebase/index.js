import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyC6Pr5H-Xe0f66Cgcwy0Gu8il_Pec2tUnY",
        authDomain: "coderhousereact.firebaseapp.com",
        databaseURL: "https://coderhousereact-default-rtdb.firebaseio.com",
        projectId: "coderhousereact",
        storageBucket: "coderhousereact.appspot.com",
        messagingSenderId: "783772047049",
        appId: "1:783772047049:web:1905dc32d48db9d7c19f18"
      }
)

export const getFirebase = () =>{
    return app;
}

export const getFirestore = () =>{
    return firebase.firestore();
}
