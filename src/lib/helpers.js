import { createLandingPage } from "../pages/landingPage.js"
import { createLoginPage } from "../pages/loginPage.js"
import { createRegisterPage } from "../pages/registerPage.js"
import { createProfilePage } from "../pages/profilePage.js"
import { createWallPage } from "../pages/wallPage.js"
import { uploadPost } from "../components/uploadPostContainer.js"
import { editPost } from "../components/editPostContainer.js"
import { commentComponent } from "../components/commentComponent.js"
import { editCommentComponent } from "../components/editComment.js"

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

    const uploadPostWindow = uploadPost()

    main.appendChild(uploadPostWindow)
    const btnCloseWindowPost = document.querySelector('#btnClose')
    btnCloseWindowPost.addEventListener('click', () => {
        uploadPostWindow.remove()
    })
}

function deployEditPost(main, post) {

    const editPostWindow = editPost(post)
 
    main.appendChild(editPostWindow)
    const btnCloseWindowPost = document.querySelector('#btnClose')
    btnCloseWindowPost.addEventListener('click', () => {
        editPostWindow.remove()
    })
}


function rendercomment (comments, container, userCurrent, post) {

    if(comments === undefined || comments.length === 0){
        container.textContent = ''
    } else {
        comments.forEach((comment)=>{
            const commentBox = commentComponent(comment, userCurrent, post)
            container.appendChild(commentBox)
        })
    }    
}


export {
    onNavigate,
    routes,
    toggleMenu,
    deployUploadPost,
    deployEditPost, 
    rendercomment,
}