import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBAD1VkUoG9Ygd4U-5zp7zng2Px9qnP0Eo",
  authDomain: "loign-3a083.firebaseapp.com",
  projectId: "loign-3a083",
  storageBucket: "loign-3a083.appspot.com",
  messagingSenderId: "1098042606697",
  appId: "1:1098042606697:web:79391607b9e15e6c9dcef8"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;