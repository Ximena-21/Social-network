import { registerUser, singInGoogle } from "../firebase/authentication.js"
import { onNavigate } from "../lib/index.js"


function createRegisterPage () {

    const registerPageContainer = document.createElement('div')
    registerPageContainer.className = "registerPage"

    registerPageContainer.innerHTML = `
        <img src="../img/home.png" alt="home icon" class="registerPage_home">
        <div class="registerPage_welcome--box">
            <img src="../img/logoK.png" alt="logo Knitters" class="registerPage_logo">
            <h2 class="registerPage_welcome">Bienvenido</h2>
        </div>
        
        <form id="form" class="registerPage_formRegister">
            <input required type="text" name="name" placeholder="Nombre" id="name">
            <input required type="email" name="email" placeholder="Email" id="email">
            <div class="inputPassword"> 
                <input required type="password" name="password" placeholder="Contraseña" id="password" pattern="(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,13}">
                <img src="../img/eye.png" alt="eye" class="inputPassword_eye">
            </div>
            <button class="registerPage_btn" id="btn">Registrarse</button>
        </form>

        <div class="registerPage_singInGoogle">
            <img src="../img/google.png" alt="logo google" class="registerPage_singInGoogle--logo">
            <a href="" class="registerPage_singInGoogle--text" id='singInGoogle'>Iniciar sesión con Google</a>
        </div>

        <div class="registerPage_singIn">
            <span class="registerPage_singIn--text">Ya estas registrado?</span>
            <a href="" class="registerPage_singIn--click" id='clickSingIn'>click aquí</a>
        </div>
    `
    const name = registerPageContainer.querySelector('#name')
    const email = registerPageContainer.querySelector('#email')
    const password = registerPageContainer.querySelector('#password')
 
    // const btnRegister = registerPageContainer.querySelector('#btn')

    const formRegister = registerPageContainer.querySelector('#form')


    formRegister.addEventListener('submit',(e)=>{

        e.preventDefault()

        console.log('emitiendo la data')

        registerUser(name.value, email.value,password.value).then(()=>{
            console.log('MOVERME ACA')
            // onNavigate('/login')
        })

    })
    
    // btnRegister.addEventListener('click', (e) => {
    //     e.preventDefault()

        
    // })

    registerPageContainer.querySelector('#singInGoogle').addEventListener('click', (event) => {
        event.preventDefault()
        console.log('iniciar sesion con google')
        singInGoogle()

    })

    registerPageContainer.querySelector('#clickSingIn').addEventListener('click', (event) => {
        event.preventDefault()
        onNavigate('/login')

    })

    return registerPageContainer
}


export {
    createRegisterPage
}