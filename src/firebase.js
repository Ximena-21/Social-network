   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
   import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries
 
   // Your web app's Firebase configuration
   const firebaseConfig = {
     apiKey: "AIzaSyDDM7iRjvxyiVqnig53XxLZPKiH3bf3248",
     authDomain: "knitterapp.firebaseapp.com",
     projectId: "knitterapp",
     storageBucket: "knitterapp.appspot.com",
     messagingSenderId: "334933385382",
     appId: "1:334933385382:web:5e2b7d2fb723fb6c265467"
   };
 
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);

   // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    const email = 'emaildeprueba1@gmail.com'
    const password  = 'paula12345'

    // createUserWithEmailAndPassword(auth, email, password)
    //     .then((response) => {
    //         console.log(response)
    //     })

    

    onAuthStateChanged(auth, (user) =>{
        if (user) {
            console.log(user)
        }
    })