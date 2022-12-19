//importar las funciones de SDKs que se necesitan
import { 
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import { onNavigate } from "../lib/index.js";
import { auth } from "./config.js";

//el usuario que esta en ese momento
onAuthStateChanged(auth, (user) =>{

    onNavigate(window.location.pathname)

    //limitar si ya inicio sesion se vaya al muro 
    if (user) {

        const actuallyPath = window.location.pathname

        if(actuallyPath === '/register' || actuallyPath === '/login' ){
          console.log('usted no edberia estar aca por que ya esta logueado')
          onNavigate('/wall')
        }

    } else {

      const actuallyPath = window.location.pathname

      if(actuallyPath === '/wall' || actuallyPath === 'profile'){
        console.log('usted no edberia estar aca porq ue no esta logueado')
        onNavigate('/login')
      }

      console.log('el estado de usuario cambio y no esta logueado')
    }

  })


//Crear usuario y enviar emaila de verificacion
function registerUser(name='',email='',password='') {

  return createUserWithEmailAndPassword(auth, email, password)
    .then((registeredUser) => {

      const user = registeredUser.user
      console.log('la cuenta fue creada con exito', user)
      const nameForAvatar = name.split(' ').slice(0,2).join('+')
      const randomColor = Math.floor(Math.random()*16777215).toString(16)
      const gravatar= `https://ui-avatars.com/api/?name=${nameForAvatar}&background=${randomColor}`

      //actualizar informacion del usuario
      return updateProfile(user,{
        displayName: name, 
        photoURL: gravatar,
      })
    })
    .then(() => {

      console.log('el usuario ha sido actualizado')
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
      onNavigate('/login')
    })
}


export {
  registerUser,
  singIn,
  singInGoogle,
  logout, 
}