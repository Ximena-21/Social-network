import { onNavigate } from "../lib/index.js"


function createLandingPage () {
    const landingPageContainer = document.createElement('div')
    landingPageContainer.className = "landingPage"

    landingPageContainer.innerHTML = `

    <header class="landingPage_header header">

        <div class="header_top">
            <img class="header_top--openMenu" src="../img/menu.png" alt="openMenu" id="btnOpen">
            <div>
                <button class='header_top--singIn' id="btn_singIn">Acceder</button>
                <button class='header_top--singIn' id="btn_LogIn">Registrarse</button>
            </div>
            <img class="header_top--logo" src="../img/logoKnitters.png" alt="logo" >
        </div>

        <nav class="header_menu menu--hidden">
            <img class="header_top--closeMenu" src="../img/close.png" alt="openMenu" id="btnCloseMenu">
            <ul class="header_listMenu">
                <li><a href="#initSection" class="header_itemMenu" id="init">Inicio</a></li>
                <li><a href="#advantageSection" class="header_itemMenu" id="advantage">Ventajas</a></li>
                <li><a href="#aboutSection" class="header_itemMenu" id="about">Acerca de</a></li>
                <li><a href="#contactSection" class="header_itemMenu" id="contact">Contacto</a></li>
            </ul>
        </nav>

            
    </header>

    <section id="inicio" class="landingPage_main">

        <div class="landingPage_main--welcomeBox welcomeBox" id="initSection">
            <div class="welcomeBox_container">
                <h1 class="welcomeBox_tittle">Tejiendo Comunidad</h1>
                <p class="welcomeBox_text">Haz parte de la gran comunidad de tejedores <br> El arte de tejer te lleva sin limites </p>
                <button class="register welcomeBox_button">Registrarse</button>
            </div>
            <div class="welcomeBox_container" >
                <img src="../img/tejedora.png" alt="" class="welcomeBox_img">  
            </div>
        </div>

        <div class=" landingPage_main--welcomeBOx advantage " id="advantageSection">

            <div class=" advantage_container">
                <div class="advantage_section">
                    <img src="../img/explorar.png" alt="" class="advantage_section--img">
                    <h2 class="advantage_section--h2">Explora</h2>
                </div>

                <div class="advantage_section">
                    <img src="../img/imagen.png" alt="" class="advantage_section--img">
                    <h2 class="advantage_section--h2">comparte</h2>
                </div>                                  
            </div>
            
            <div class="advantage_container">   
                <div class="advantage_section">
                    <img src="../img/clasificacion.png" alt="" class="advantage_section--img">
                    <h2 class="advantage_section--h2">Haz Comunidad</h2>
                </div>

                <div class="advantage_section">
                    <img src="../img/artDesign.png" alt="" class="advantage_section--img">
                    <h2 class="advantage_section--h2">Aumenta tu Creatividad</h2>
                </div>
            </div>

        </div>

        <div class="landingPage_main--welcomeBox about" id="aboutSection">
            <div class="about_container">
                <h2 class="about_tittle">¿Quienes Somos?</h2>
                <p class="about_text">Somos una plataforma digital, que esta diseñada para conectar a los amantes del tejido de todo el mundo. Enlazando a personas que quieran explorar este mundo de los puntos y aguias.</p>
            </div>
            <div class="about_container">
                <img src="../img/removebg.png" alt="" class="about_img"">
            </div>
        </div>

    </section>

    <footer class="landingPage_footer footer" id="contactSection">
            <div class="footer_redes">
                <div class="footer_logoRedes">
                    <img src="../img/FacebookLogo.png" alt="" class="footer_img">
                    <img src="../img/InstagramLogo.png" alt="" class="footer_img">
                    <img src="../img/TwitterLogo.png" alt="" class="footer_img">
                </div>
                <div class="footer_logo">
                    <img src="../img/logoK.png" alt="" class="footer_img--logo">
                </div>
            </div>
            <div class="footer_autor">
                <p>Develop by Paula A. Stefany A. - All Rights Reserved</p>
            </div>
    </footer>
    `
    const menu = landingPageContainer.querySelector('.header_menu')
   
    //abrir menu
    landingPageContainer.querySelector('#btnOpen').addEventListener('click', () => {
        console.log('abrir menu lateral')
        menu.classList.toggle('menu--hidden')
    })

    //cerrar menu
    landingPageContainer.querySelector('#btnCloseMenu').addEventListener('click', () => {
        menu.classList.toggle('menu--hidden')
    })

    landingPageContainer.querySelector('#btn_singIn').addEventListener('click', () => {
        onNavigate('/login')
    })

    landingPageContainer.querySelector('.register').addEventListener('click', () => {
        onNavigate('/register')
    })
    landingPageContainer.querySelector('#btn_LogIn').addEventListener('click', () => {
        onNavigate('/register')
    })

    return landingPageContainer
}


export {
    createLandingPage
}
