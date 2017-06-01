
import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDMIlhFg61bjvSQKPZS9ZWSZKmNwqMqvx8",
    authDomain: "vehiclesys-fe347.firebaseapp.com",
    databaseURL: "https://vehiclesys-fe347.firebaseio.com",
    projectId: "vehiclesys-fe347",
    storageBucket: "vehiclesys-fe347.appspot.com",
    messagingSenderId: "72931563032"
};

var firebaseApp = Firebase.initializeApp(config);
var db = firebaseApp.database();

export {config, firebaseApp, db};