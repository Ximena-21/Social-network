import { createLandingPage } from "../pages/landingPage.js"
import { createLoginPage } from "../pages/loginPage.js"
import { createRegisterPage } from "../pages/registerPage.js"
import { createProfilePage } from "../pages/profilePage.js"
import { createWallPage } from "../pages/wallPage.js"
import { uploadPost } from "../components/uploadPostContainer.js"

const root = document.getElementById('root')

const routes = {
    '/': createLandingPage,
    '/login': createLoginPage,
    '/register': createRegisterPage,
    '/profile': createProfilePage,
    '/wall': createWallPage,
}


function onNavigate(pathName) {
    // console.log(root)
    root.innerHTML = ''
    window.history.pushState(
        {},
        pathName,
        window.location.origin + pathName
    )

    const pageRender = routes[pathName]()
    root.appendChild(pageRender)
}

function toggleMenu(menuHidden) {
    menuHidden.classList.toggle('sideMenu_hidden')
    // btn.classList.toggle('sideMenu_hidden')
}

function deployUploadPost(main) {

    console.log('voy a sacar ventana para subir post', main)

    const uploadPostWindow = uploadPost()
    // document.querySelector("#btnClose").addEventListener('click', () => {
    //     uploadPostContainer.remove()
    // })

    main.appendChild(uploadPostWindow)
    const btnCloseWindowPost = document.querySelector('#btnClose')
    btnCloseWindowPost.addEventListener('click', () => {
        uploadPostWindow.remove()
    })
    console.log('boton cerrar ventana', btnCloseWindowPost)
}

function editPost (){
    
}

export {
    onNavigate,
    routes,
    toggleMenu,
    deployUploadPost, 
}