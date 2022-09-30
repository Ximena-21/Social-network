import { onNavigate } from "../helpers.js"

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
                <input required type="password" name="password" placeholder="Contraseña" id="password">
                <img src="../img/eye.png" alt="eye" class="inputPassword_eye">
            </div>
            <button type="submit" class="registerPage_btn" id="btn">Registrarse</button>
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

    const btnRegister = registerPageContainer.querySelector('#btn')
    console.log(btnRegister)
    btnRegister.addEventListener('click', () => {
        console.log('el boton sirve se va a registrar')
    })

    registerPageContainer.querySelector('#singInGoogle').addEventListener('click', () => {
        console.log('iniciar sesion con google')
    })

    registerPageContainer.querySelector('#clickSingIn').addEventListener('click', (event) => {
        console.log('llevar a formulario de registro')
        event.preventDefault()
        onNavigate('/login')

    })

    return registerPageContainer
}

export {
    createRegisterPage
}