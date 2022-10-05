import { onNavigate } from "../helpers.js"


function createLandingPage () {
    const landingPageContainer = document.createElement('div')
    landingPageContainer.className = "landingPage"

    landingPageContainer.innerHTML = `
    <header class='landingPage_header'>
        <nav class=" landingPage_header--nav nav">
            <div class="nav_menuLogo">
                <img src="../img/K__1_-removebg-preview 2.png" alt="" class="nav_menuLogo--img"/>
                <button class="nav_menuLogo--abrirMenu abrirMenu " aria-label="Abrir menu">
                    <img src="../img/Group 6.png" alt="abrir menu">
                </button>
            </div>
            <ul class="nav_menu menu">
                <button class="menu_cerrarMenu cerrarMenu" aria-label="Cerrar menu">
                    <img height="33" width="33" src="../img/cerrar_menu.png" alt="cerrar menu">
                </button>
                <li class=""><a href="#inicio">Inicio</a></li>
                <li><a href="#ventajas">Ventajas</a></li>
                <li><a href="#quienesSomos">Quienes Somos</a></li>
                <li><a href="#Contacto">Contacto</a></li>
            </ul>
            <button class='singIn nav_sing'>Iniciar sesión</button>
        </nav>
    </header>
    <section id="inicio" class="landingPage_main">
        <div class="landingPage_main--welcomeBox welcomeBox">
            <div class="welcomeBox_container">
                <h1 class="welcomeBox_tittle">Tejiendo Comunidad</h1>
                <p class="welcomeBox_text">Haz parte de la gran comunidad de tejedores <br> El arte de tejer te lleva sin limites </p>
                <button class="register welcomeBox_button">Registrarse</button>
            </div>
            <div class="welcomeBox_container" >
                <img src="../img/tejedora.png" alt="" class="welcomeBox_img">  
            </div>
        </div>
        <div class=" landingPage_main--welcomeBOx advantage ">
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
            <div class="adventage_container">   
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
        <div class="landingPage_main--welcomeBox about">
            <div class="about_container">
                <h2 class="about_tittle">¿Quienes Somos?</h2>
                <p class="about_text">Somos una plataforma digital, que esta diseñada para conectar a los amantes del tejido de todo el mundo. Enlazando a personas que quieran explorar este mundo de los puntos y aguias.</p>
            </div>
            <div class="about_container">
                <img src="../img/removebg.png" alt="" class="about_img"">
            </div>
        </div>
    </section>
    <footer class="landingPage_footer footer">
            <div class="footer_redes">
                <div class="footer_logo">
                    <img src="../img/FacebookLogo.png" alt="" class="footer_img">
                    <img src="../img/InstagramLogo.png" alt="" class="footer_img">
                    <img src="../img/TwitterLogo.png" alt="" class="footer_img">
                </div>
                <div class="footer_logo">
                    <img src="../img/K__1_-removebg-preview 2.png" alt="" class="footer_img--logo">
                </div>
            </div>
            <div class="footer_autor">
                <p>Develop by Paula A. Stefany A. Natalia A. - All Rights Reserved</p>
            </div>
    </footer>
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



let menu = document.querySelector('.menu');
let abrir_menu_b = document.querySelector('.abrirMenu');
let cerrar_menu_b = document.querySelector('.cerrarMenu');

//funcion que abra y cierre
function toggleMenu() {
    menu.classList.toggle("menu_abierto");
}

//evento a la funcion o ejecutar
abrir_menu_b.addEventListener("click",toggleMenu);
cerrar_menu_b.addEventListener("click",toggleMenu);

export {
    createLandingPage
}


// let menu = document.querySelector('.menu');
// let abrir_menu_b = document.querySelector('.abrirMenu');
// let cerrar_menu_b = document.querySelector('.cerrarMenu');

// funcion que abra y cierre
// function toggleMenu() {
//     menu.classList.toggle("menu_abierto");
// }

// //evento a la funcion o ejecutar
// abrir_menu_b.("click",toggleMenu);
// cerrar_menu_b.addEventListener("click",toggleMenu);