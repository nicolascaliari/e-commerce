import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCFhVdH4KlgqrX8wBQmE3R7pTbOQPU3D8g",
    authDomain: "proyectonico-48266.firebaseapp.com",
    projectId: "proyectonico-48266",
    storageBucket: "proyectonico-48266.appspot.com",
    messagingSenderId: "168938648562",
    appId: "1:168938648562:web:9ae89fdf76ea497040b16b"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();


  export {auth}