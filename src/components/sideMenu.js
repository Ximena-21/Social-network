import { logout } from "../firebase/authentication.js"
import { auth } from "../firebase/config.js"
import { onNavigate } from "../lib/index.js"

const sideMenu = () => {
    const sideMenu = document.createElement('div')

    const user = auth.currentUser
    
    sideMenu.className = 'sideMenu sideMenu_hidden'

    sideMenu.innerHTML = `
        <img src="../img/exit.png" alt="" class="sideMenu_exitMenu" id="exitMenu">
        <div class="sideMenu_usernameBox">
            <img src=${user.photoURL || '../img/avatar.png'} alt="username img" class="sideMenu_imgUsername">
            <span class="sideMenu_textUsername">${user.displayName || 'userName'}</span>
        </div>
        <div class="sideMenu_menu">
            <div class="sideMenu_optionBox">
                <img src="" alt="" class="sideMenu_optionBox--img" id="profileImg">
                <span class="sideMenu_optionBox--text" id="profileTxt">Mi Perfil</span>
            </div>
            <div class="sideMenu_optionBox">
                <img src="" alt="" class="sideMenu_optionBox--img" id="homeImg">
                <span class="sideMenu_optionBox--text" id="homeTxt">Inicio</span>
            </div>
            <div class="sideMenu_optionBox">
                <img src="" alt="" class="sideMenu_optionBox--img" id="aboutUsImg">
                <span class="sideMenu_optionBox--text" id="aboutUsTxt">Acerca de</span>
            </div>
        </div>
        <span class="sideMenu_exit">Cerrar Sesion</span>
    `

    sideMenu.querySelector('.sideMenu_exit').addEventListener('click', ()=>{
        logout()
    })
    
    sideMenu.querySelector('#profileTxt').addEventListener('click', ()=>{
       onNavigate('/profile')
    })

    return sideMenu
}



export {
    sideMenu,
}