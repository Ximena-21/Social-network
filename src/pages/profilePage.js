import { Post } from "../components/postcomponent.js";
import { postProfile } from "../components/postProfile.js";
import { sideMenu } from "../components/sideMenu.js";
import { auth } from "../firebase/config.js";
import { getMyPosts } from "../firebase/posts.js";
import { onNavigate, toggleMenu } from "../lib/helpers.js";

function createProfilePage  () {
    
    const user = auth.currentUser
    
    const profilePageContainer = document.createElement('div')
    profilePageContainer.className = 'profilePage'

    profilePageContainer.innerHTML = `

        <div class="profilePage_headerBox" id='header'>
            <img src="../img/logoK.png" alt="logo Knitters" class="profilePage_logo">
            <img src="../img/menuHidden.png" alt="logo Knitters" class="profilePage_menuHidden">
        </div>

        <div class="profilePage_usernameBox">
            <img src=${user.photoURL || ''} alt="username img" class="profilePage_imgUsername">
            <span class="profilePage_textUsername">${user.displayName || 'userName'}</span>
        </div>

        <div class="profilePage_wallPost">

        </div>

        <div class="profilePage_footerMenu">
            <button class="profilePage_footerMenu--icon icon_search" id="search"></button>
            <button class="profilePage_footerMenu--icon icon_home" id="home"></button>
            <button class="profilePage_footerMenu--icon icon_uploadPost" id="uploadPost"></button>
            <button class="profilePage_footerMenu--icon icon_profile" id="profile"></button>
        </div>

    `
    profilePageContainer.querySelector('.profilePage_logo').addEventListener('click', (e)=>{
        e.preventDefault()
        console.log('ESTA ACTUALIZANDO MURO')
        onNavigate('/wall')
    })

    const btnMenu = profilePageContainer.querySelector('.profilePage_menuHidden')

    profilePageContainer.querySelector('#header').appendChild(sideMenu()) //inyectando el menu desplegable 
    const menuHidden = profilePageContainer.querySelector('.sideMenu')

       //open menu
    btnMenu.addEventListener('click', ()=>{
        console.log('open menu')
        toggleMenu(menuHidden, btnMenu)
    })
    
    //close menu
    profilePageContainer.querySelector('#exitMenu').addEventListener('click', () => {
        console.log('cerrar menu')
        toggleMenu(menuHidden, btnMenu)
    })

    profilePageContainer.querySelector('.icon_profile').addEventListener('click', () => {
        menuHidden.classList.remove('sideMenu_hidden')
    })

    profilePageContainer.querySelector('#home').addEventListener('click', (e)=>{
        e.preventDefault()
        onNavigate('/wall')
    })

    //inyectando la ventana para subir post 
    profilePageContainer.querySelector('#uploadPost').addEventListener('click', ()=>{
        const main = document.querySelector('#root')
        deployUploadPost(main)
    })

   
    const postContainer = profilePageContainer.querySelector('.profilePage_wallPost')

    // postContainer.appendChild(postProfile())

    getMyPosts(user).then((myPosts)=>{
        console.log('estos son mis posts', myPosts)
        myPosts.forEach((post)=>{
            const renderPost = Post(post)

            postContainer.appendChild(renderPost)
            
        })
    })

    return profilePageContainer
}

export {
    createProfilePage
}