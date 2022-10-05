const sideMenu = () => {
    const sideMenu = document.createElement('div')
    sideMenu.className = 'sideMenu sideMenu_hidden'

    sideMenu.innerHTML = `
        <img src="../img/exit.png" alt="" class="sideMenu_exitMenu" id="exitMenu">
        <div class="sideMenu_usernameBox">
            <img src="" alt="username img" class="sideMenu_imgUsername">
            <span class="sideMenu_textUsername">Username</span>
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

    // sideMenu.querySelector('#exitMenu').addEventListener('click', ()=>{
    //     closeMenu()
    // })

    return sideMenu
}

function toggleMenu (menuHidden, btn) {
    menuHidden.classList.toggle('sideMenu_hidden')
    btn.classList.toggle('sideMenu_hidden')
}

export {
    sideMenu,
    toggleMenu,
}