import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyD5EYSGI846QLYTZIEDtTb7qu0Ar4vLhq0",
  authDomain: "keep-clone-86666.firebaseapp.com",
  databaseURL: "https://keep-clone-86666.firebaseio.com",
  projectId: "keep-clone-86666",
  storageBucket: "keep-clone-86666.appspot.com",
  messagingSenderId: "229472916148",
  appId: "1:229472916148:web:b2c9e5a08e653adcdefde1",
  measurementId: "G-PN7M4KJ7JW"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;