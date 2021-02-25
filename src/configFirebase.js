// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyABP0g3UCSzN9JeeJ0Rx70z0E5hBoaCB2w",
  authDomain: "coffee-house-lab.firebaseapp.com",
  projectId: "coffee-house-lab",
  storageBucket: "coffee-house-lab.appspot.com",
  messagingSenderId: "26449516707",
  appId: "1:26449516707:web:90c7aef95e43a4352ac716",
  measurementId: "G-2KBQQ78HH4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export function createUser(){
    let email = document.getElementById("email-register").value;
    let password = document.getElementById("password-register").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( (res) => {
        //console.log('sign in', res);
        alert("Se registro correctamente"); 
      }).catch( (err) => {
        //console.log('error', err);
        
        alert("Ocurrio un error"); 
      })
}

export function logIn(){
    let emailLogin = document.getElementById("email-login").value;
    let passwordLogin = document.getElementById("password-login").value;
    firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
    .then(res => {
      onNavigate("/home");
    }).catch( (err) => {
      //console.log('error', err);
      alert("Ocurrio un error"); 
      onNavigate("/");
      
    })
}

export function authGoogle(){
  const providerGoogle = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(providerGoogle)
    .then(res => {
      console.log(res);
      //onNavigate("/home");
    }).catch(err => {
      alert(err);
    })
}

export function authFacebook(){
  const providerFacebook = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(providerFacebook)
    .then(res => {
      console.log(res);
      onNavigate("/home");
    }).catch(err => {
      alert(err);
    })
}
