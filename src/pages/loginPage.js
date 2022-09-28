import { onNavigate } from "../helpers.js"


function createLoginPage () {

    const loginPageContainer = document.createElement('div')
    loginPageContainer.className = "loginPage"

    loginPageContainer.innerHTML = `
        <img src="../img/home.png" alt="home icon" class="loginPage_home">
        <h1 class="loginPage_welcome">Bienvenidos</h1>
        <h5 class="loginPage_msg">Haz parte de esta comunidad</h5>
        <img src="../img/logoKnitters.png" alt="logo Knitters" class="loginPage_logo">
        
        <form id="form" class="loginPage_formSingIn">
            <input required type="email" name="email" placeholder="Tu Email" id="email">
            <input required type="text" name="password" placeholder="Tu Contraseña" id="password">
            <button type="submit" class="loginPage_btnSinIn" id="btnSingIn">Iniciar sesión</button>
        </form>

        <div class="loginPage_singInGoogle">
            <img src="../img/google.png" alt="logo google" class="loginPage_singInGoogle--logo">
            <a href="" class="loginPage_singInGoogle--text" id='singInGoogle'>Iniciar sesión con Google</a>
        </div>

        <div class="loginPage_singUp">
            <span class="loginPage_singUp--text">No tienes cuenta?</span>
            <a href="" class="loginPage_singUp--register" id='register'>Registrate</a>
        </div>
    `

    const btnSingIn = loginPageContainer.querySelector('#btnSingIn')
    console.log(btnSingIn)
    btnSingIn.addEventListener('click', () => {
        console.log('el boton sirve')
    })

    loginPageContainer.querySelector('#singInGoogle').addEventListener('click', () => {
        console.log('iniciar sesion con google')
    })

    loginPageContainer.querySelector('#register').addEventListener('click', (event) => {
        console.log('llevar a formulario de registro')
        event.preventDefault()
        onNavigate('/register')

    })

    return loginPageContainer
}

export {
    createLoginPage
}