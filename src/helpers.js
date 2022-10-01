import { createLandingPage } from "./pages/landingPage.js"
import { createLoginPage } from "./pages/loginPage.js"
import { createProfilePage } from "./pages/profilePage.js"
import { createRegisterPage } from "./pages/registerPage.js"
import { createWallPage } from "./pages/wallPage.js"

const root = document.getElementById('root')

const routes = {
    '/' : createLandingPage,
    '/login' : createLoginPage,
    '/register': createRegisterPage,
    '/wall': createWallPage,
    '/profile': createProfilePage
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


export {
    onNavigate
}