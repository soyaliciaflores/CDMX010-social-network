// Your web app's Firebase configuration

import { onNavigate } from "./routes.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABP0g3UCSzN9JeeJ0Rx70z0E5hBoaCB2w",
  authDomain: "coffee-house-lab.firebaseapp.com",
  projectId: "coffee-house-lab",
  storageBucket: "coffee-house-lab.appspot.com",
  messagingSenderId: "26449516707",
  appId: "1:26449516707:web:90c7aef95e43a4352ac716",
  measurementId: "G-2KBQQ78HH4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const dataBase = firebase.firestore();

export function validarEmail(valor) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)) {
    alert("La dirección de email " + valor + " es correcta.");
  } else {
    alert("La dirección de email es incorrecta.");
  }
}

export function createUser() {
  let email = document.getElementById("email-register").value;
  let password = document.getElementById("password-register").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      //onNavigate('/home');
      alert("Se registro correctamente");
    })
    .catch((err) => {
      onNavigate("/register");
      alert("Ocurrio un error");
    });
}

export function logIn() {
  let emailLogin = document.getElementById("email-login").value;
  let passwordLogin = document.getElementById("password-login").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(emailLogin, passwordLogin)
    .then((res) => {
      onNavigate("/home");
    })
    .catch((err) => {
      //console.log('error', err);
      alert("Ocurrio un error");
      onNavigate("/");
    });
}

export function authGoogle() {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(providerGoogle)
    .then((res) => {
      console.log(res);
      onNavigate("/home");
    })
    .catch((err) => {
      alert(err);
    });
}

export function authFacebook() {
  const providerFacebook = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(providerFacebook)
    .then((res) => {
      console.log(res);
      onNavigate("/home");
    })
    .catch((err) => {
      alert(err);
    });
}

export function salir() {
  firebase
    .auth()
    .signOut()
    .then((res) => {
      //document.location.href='/';
      onNavigate("/");
    })
    .catch((err) => {
      alert(err);
    });
}

export function verAutenticacion() {
  firebase.auth().onAuthStateChanged((res) => {
    if (res == null) {
      console.log('si es null');
      document.getElementById("me-mobile").style.display = "none";
      //document.getElementById("me-desktop").style.display = "none";
      document.getElementById("home-mobile").style.display = "none";
      // document.getElementById("home-desktop").style.display = "none";
      document.getElementById("div-register").style.display = "inline-block";
      document.getElementById("div-login").style.display = "inline-block";
    } else {
      console.log('no es null');
      document.getElementById("me-mobile").style.display = "inline-block";
      // document.getElementById("me-desktop").style.display = "inline-block";
      document.getElementById("home-mobile").style.display = "inline-block";
      // document.getElementById("home-desktop").style.display = "inline-block";
      document.getElementById("div-register").style.display = "none";
      document.getElementById("div-login").style.display = "none";
    }
  });
}
