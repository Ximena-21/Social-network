import { createLandingPage } from "./pages/landingPage.js"
import { createLoginPage } from "./pages/loginPage.js"
import { createRegisterPage } from "./pages/registerPage.js"
import { createProfilePage } from "./pages/profilePage.js"
import { createWallPage } from "./pages/wallPage.js"

const root = document.getElementById('root')

const routes = {
    '/' : createLandingPage,
    '/login' : createLoginPage,
    '/register': createRegisterPage,
    '/profile': createProfilePage,
    '/wall': createWallPage,
}


function onNavigate (pathName) {
    // console.log(root)
    root.innerHTML = ''
    window.history.pushState(
        {},
        pathName,
        window.location.origin + pathName
    )
    
    const pageRender =  routes[pathName]()
    root.appendChild(pageRender) 
}

function toggleMenu (menuHidden, btn) {
    menuHidden.classList.toggle('sideMenu_hidden')
    btn.classList.toggle('sideMenu_hidden')
}

export {
    onNavigate,
    routes,
    toggleMenu
}