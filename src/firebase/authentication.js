//importar las funciones de SDKs que se necesitan
import { 
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import { onNavigate } from "../helpers.js";
import { auth } from "./config.js";


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
onAuthStateChanged(auth, (user) =>{

    onNavigate(window.location.pathname)

    if (user) {

        console.log('auth currentuser',user)

        const actuallyPath = window.location.pathname

        if(actuallyPath === '/register' || actuallyPath === '/login' ){
          console.log('usted no edberia estar aca por que ya esta logueado')
          onNavigate('/wall')
        }

    } else {

      //no esta logueado

      //no puede estar en x routes

      // const actuallyPath = window.location.pathname

      // if(actuallyPath === '/wall' || actuallyPath === 'profile'){
      //   console.log('usted no edberia estar aca por que ya esta logueado')
      //   onNavigate('/register')
      // }

      console.log('el estado de usuario cambio y no esta logueado')
    }

  })


//Crear usuario y enviar emaila de verificacion
function registerUser(name='',email='',password='') {

  return createUserWithEmailAndPassword(auth, email, password)
    .then((registeredUser) => {

      const user = registeredUser.user
      console.log('la cuenta fue creada con exito', user)
      return logout()
    })
    .then(() => {
      // sendEmailVerification(auth.currentUser)
      //   .then(() => {

      //   });
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message

      console.log({errorCode,errorMessage})
    })


}


//Iniciar sesion con ususario existente

function singIn (email,password) {

  return signInWithEmailAndPassword(auth, email, password)
  .then((loggedUser) => {
    // Signed in
    const user = loggedUser.user;
    console.log(user)
    return {data: user}
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('no esta registrado', errorCode, errorMessage)
    return {error: errorCode}
  })
}

//iniciar sesion con google
function singInGoogle() {
// const auth = getAuth();
const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('credenciales: ', credential, token);
      return result;
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // eslint-disable-next-line no-console
      console.log(error);
      console.log('primero ', errorCode, 'segundo ', errorMessage);
    });
};


function logout () {
    return signOut(auth).then(() => {
      console.log('Sign-out successful.')
    })
}


export {
  registerUser,
  singIn,
  singInGoogle
}