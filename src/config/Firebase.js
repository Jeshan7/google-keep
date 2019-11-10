import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAucG3fEORCorNf-ICRjJTMtmxh6EA-fTo",
    authDomain: "keep-clone-15ced.firebaseapp.com",
    databaseURL: "https://keep-clone-15ced.firebaseio.com",
    projectId: "keep-clone-15ced",
    storageBucket: "keep-clone-15ced.appspot.com",
    messagingSenderId: "356294513672",
    appId: "1:356294513672:web:86b3af3ab6fa088024edbd",
    measurementId: "G-LNVVHFBT65"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;