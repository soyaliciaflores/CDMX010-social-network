// Your web app's Firebase configuration

import { onNavigate } from "./routes.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyABP0g3UCSzN9JeeJ0Rx70z0E5hBoaCB2w',
  authDomain: 'coffee-house-lab.firebaseapp.com',
  projectId: 'coffee-house-lab',
  storageBucket: 'coffee-house-lab.appspot.com',
  messagingSenderId: '26449516707',
  appId: '1:26449516707:web:90c7aef95e43a4352ac716',
  measurementId: 'G-2KBQQ78HH4',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const dataBase = firebase.firestore();

export function activeUser() {
  return firebase.auth().currentUser;
}

export function validarEmail(valor) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)) {
    // eslint-disable-next-line no-alert
    alert(`La dirección de email ${valor} es correcta.`);
  } else {
    // eslint-disable-next-line no-alert
    alert('La dirección de email es incorrecta.');
  }
}

export function createUser() {
  const email = document.getElementById('email-register').value;
  const password = document.getElementById('password-register').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res) => {
      //onNavigate('/home');
      alert('Se registro correctamente', res);
    })
    .catch((err) => {
      onNavigate('/register');
      alert('Ocurrio un error', err);
    });
}

export function logIn() {
  const emailLogin = document.getElementById('email-login').value;
  const passwordLogin = document.getElementById('password-login').value;
  return firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
}

export function authGoogle() {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(providerGoogle)
}

export function authFacebook() {
  const providerFacebook = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(providerFacebook)
}

export function salir() {
  return firebase.auth().signOut();
}


export const getPost = (id) => dataBase.collection('posts').doc(id).get();
export const onGetPosts = (callback) => dataBase.collection('posts').onSnapshot(callback);
export const deletePost = (id) => dataBase.collection('posts').doc(id).delete();
export const updatePost = (id, updatedPost) => dataBase.collection('posts').doc(id).update(updatedPost);

export const savePost = (inputPostMob, likes) => {
  return dataBase.collection('posts').doc().set({ inputPostMob, likes });
};
