
import { createLandingPage } from "../pages/landingPage.js"
import { createLoginPage } from "../pages/loginPage.js"
import { createRegisterPage } from "../pages/registerPage.js"
import { createProfilePage } from "../pages/profilePage.js"
import { createWallPage } from "../pages/wallPage.js"

const routes = {
  '/': createLandingPage,
  '/login': createLoginPage,
  '/register': createRegisterPage,
  '/profile': createProfilePage,
  '/wall': createWallPage,
}


function onNavigate(pathName) {
  const root = document.getElementById('root')
  root.innerHTML = ''
  window.history.pushState(
      {},
      pathName,
      window.location.origin + pathName
  )

  const pageRender = routes[pathName]()
  root.appendChild(pageRender)
}

export {
  onNavigate,
  routes
}