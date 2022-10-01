//importar las funciones de SDKs que se necesitan
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

//OBTENER BASE DE DATOS
import { } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

// Configuracion de firebase en la app web
const firebaseConfig = {
  apiKey: "AIzaSyDDM7iRjvxyiVqnig53XxLZPKiH3bf3248",
  authDomain: "knitterapp.firebaseapp.com",
  projectId: "knitterapp",
  storageBucket: "knitterapp.appspot.com",
  messagingSenderId: "334933385382",
  appId: "1:334933385382:web:5e2b7d2fb723fb6c265467"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

// const email = document.querySelector('#email').value
// const password = document.querySelector('#password').value
/*  //.................CREAR USUARIOS.......................
    //Crear usuario y contrtaseña --> registrarse   createUserWithEmailAndPassword(auth, email, password)
        // .then((registeredUser) => {
        //     console.log(registeredUser)
        //     const user = registeredUser.user
        //     console.log(user)
        // })
        // .catch((error) => {
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
        // });

//........ENVIAR MENSAJE DE VERIFICACION AL USUARIO..............
  //const auth = getAuth();
  // sendEmailVerification(auth.currentUser)
  //   .then(() => {
  //     // Email verification sent!
  //     // ...
  //   }); */


//.................INICIAR SESION USUARIOS EXISTENTES.............
//Acceso de usuarios existntes --> inicio de sesion

/*     signInWithEmailAndPassword(auth, email, password)
    .then((loggedUser) => {
      // Signed in
      console.log(loggedUser)
      const user = loggedUser.user;
      console.log(user)
      return user
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    }); */

//.............OBTENER USUSRIOS CON SESION ACTIVA.............
//configurar observador de autenticacion y obtecion de datos del usuario --> para obtener el ususario actual
/*     onAuthStateChanged(auth, (user) =>{
        if (user) {
            console.log(user)
            const uid = user.uid
            console.log(uid)
        } else {
          console.log('no esta registrado')
        }

    }) */


//............OBTENER EL PERFIL DEL USUARIO ACTIVO.............
//paar accder a la informacion del usuario se usa accediendo a las propiedades 
// de la instancia <user>

/*       //const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
      
        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;
      } */




// OBTENER BASE DE DATOS 

// // Initialize Cloud Firestore and get a reference to the service
//const db = firebase.firestore();


//----------------------------------------------------------

//Crear usuario y enviar emaila de verificacion
function registerUser() {

  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value

  createUserWithEmailAndPassword(auth, email, password)
    .then((registeredUser) => {
      const user = registeredUser.user
      console.log({
        'user': user,
        'registered': registeredUser,
      })
    })
    .then(() => {
      sendEmailVerification(auth.currentUser)
        .then(() => {

        });
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
    })

  return

}


//Iniciar sesion con ususario existente

function singIn () {

  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value

  signInWithEmailAndPassword(auth, email, password)
  .then((loggedUser) => {
    // Signed in
    console.log({
      'login': loggedUser,
      'auth': auth,
      'email':  email,
      'password': password
    })
    const user = loggedUser.user;
    console.log(user)
    //return user
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('no esta registrado', errorCode, errorMessage)
  })
}





export {
  registerUser,
  singIn
}