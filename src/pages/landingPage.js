import { onNavigate } from "../helpers.js"

function createLandingPage () {
    const landingPageContainer = document.createElement('div')
    landingPageContainer.className = "landingPage"

    landingPageContainer.innerHTML = `
        <button class='singIn'>Iniciar sesión</button>
        <button class='register' >Registrarse</button>

    `
    console.log(landingPageContainer.querySelector('.singIn'))

    landingPageContainer.querySelector('.singIn').addEventListener('click', () => {
        // console.log('sirve el boton iniciar sesion')
        onNavigate('/login')
    })
    landingPageContainer.querySelector('.register').addEventListener('click', () => {
        // console.log('sirve el boton iniciar sesion')
        onNavigate('/register')
    })
    return landingPageContainer
}

export {
    createLandingPage
}