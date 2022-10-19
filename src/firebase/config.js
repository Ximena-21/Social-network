//importar las funciones de SDKs que se necesitan
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { 
  getAuth,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


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
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

export const db = getFirestore()

