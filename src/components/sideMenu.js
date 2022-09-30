const sideMenu = () => {
    const sideMenu = document.createElement('div')
    sideMenu.className = 'sideMenu'

    sideMenu.innerHTML = `
        <div class="sideMenu_usernameBox">
            <img src="" alt="username img" class="sideMenu_imgUsername">
            <span class="sideMenu_textUsername">Username</span>
        </div>
        <div class="sideMenu_menu">
            <div class="sideMenu_optionBox">
                <img src="" alt="" class="sideMenu_optionBox--img" id="profileImg">
                <span class="sideMenu_optionBox--text" id="profileTxt"></span>
            </div>
            <div class="sideMenu_optionBox">
                <img src="" alt="" class="sideMenu_optionBox--img" id="homeImg">
                <span class="sideMenu_optionBox--text" id="homeTxt"></span>
            </div>
            <div class="sideMenu_optionBox">
                <img src="" alt="" class="sideMenu_optionBox--img" id="aboutUsImg">
                <span class="sideMenu_optionBox--text" id="aboutUsTxt"></span>
            </div>
        </div>
        <span class="sideMenu_exit">Cerrar Sesion</span>
    `

    return sideMenu
}

export {
    sideMenu
}