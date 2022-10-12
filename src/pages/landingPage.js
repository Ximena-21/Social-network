import { onNavigate } from "../lib/helpers.js"


function createLandingPage () {
    const landingPageContainer = document.createElement('div')
    landingPageContainer.className = "landingPage"

    landingPageContainer.innerHTML = `

    <header class="landingPage_header header">

        <div class="header_top">
            <img class="header_top--openMenu" src="../img/menu.png" alt="openMenu">
            <button class='header_top--singIn' id="btn_singIn">Iniciar sesión</button>
            <img class="header_top--logo" src="../img/logoKnitters.png" alt="logo" >
        </div>

            
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
                <p>Develop by Paula A. Stefany A. Natalia A. - All Rights Reserved</p>
            </div>
    </footer>
    `
    // console.log(landingPageContainer.querySelector('.singIn'))

    landingPageContainer.querySelector('#btn_singIn').addEventListener('click', () => {
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


let menu = document.querySelector('.menu');
let abrir_menu_b = document.querySelector('.abrirMenu');
let cerrar_menu_b = document.querySelector('.cerrarMenu');

//funcion que abra y cierre
function toggleMenu() {
    menu.classList.toggle("menu_abierto");
}

// //evento a la funcion o ejecutar
// abrir_menu_b.("click",toggleMenu);
// cerrar_menu_b.addEventListener("click",toggleMenu);


//header

/* <nav class="landingPage_header--menuNav menuNav landingPage_menuHidden">
<ul class="menuNav_list">
    <img class="menuNav_btnCloseMenu" src="" alt="closeMenu">
   
    <li><a class="menuNav_item" href="" id="home">Inicio</a></li>
    <li><a class="menuNav_item" href="" id="advantage">Ventajas</a></li>
    <li><a class="menuNav_item" href="" id="aboutUs">Quienes Somos</a></li>
    <li><a class="menuNav_item" href="" id="contact">Contacto</a></li>
</ul>
</nav> */