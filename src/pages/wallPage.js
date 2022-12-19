import { Post } from "../components/postcomponent.js";
import { sideMenu,} from "../components/sideMenu.js";
import { subscribeToRealTimePosts} from '../firebase/posts.js'
import { deployUploadPost, toggleMenu } from "../lib/helpers.js";
import { onNavigate } from "../lib/index.js";


function createWallPage () {

    const wallPageContainer = document.createElement('div')
    wallPageContainer.className = 'wallPage'

    wallPageContainer.innerHTML = `
    <div class="wallPage_headerBox" id='header'>
        <img src="../img/logoK.png" alt="logo Knitters" class="wallPage_logo">
        <img src="../img/menuHidden.png" alt="logo Knitters" class="wallPage_menuHidden">
    </div>

    <div class="wallPage_wallPost"></div>

    <div class="wallPage_footerMenu">
        <button class="wallPage_footerMenu--icon icon_search" id="search"></button>
        <button class="wallPage_footerMenu--icon icon_home" id="home"></button>
        <button class="wallPage_footerMenu--icon icon_uploadPost" id="uploadPost"></button>
        <button class="wallPage_footerMenu--icon icon_profile" id="profile"></button>
    </div>
    `
    const btnMenu = wallPageContainer.querySelector('.wallPage_menuHidden')

    wallPageContainer.querySelector('.wallPage_logo').addEventListener('click', (e)=>{
        e.preventDefault()
        onNavigate('/wall')
    })
    
    wallPageContainer.querySelector('#header').appendChild(sideMenu()) //inyectando el menu desplegable 
    const menuHidden = wallPageContainer.querySelector('.sideMenu')
    
    
    //open menu
    btnMenu.addEventListener('click', ()=>{
        console.log('open menu')
        toggleMenu(menuHidden, btnMenu)
    })
    
    //close menu
    wallPageContainer.querySelector('#exitMenu').addEventListener('click', () => {
        console.log('cerrar menu')
        toggleMenu(menuHidden, btnMenu)
    })

    wallPageContainer.querySelector('.icon_profile').addEventListener('click', () => {
        menuHidden.classList.remove('sideMenu_hidden')
    })

    wallPageContainer.querySelector('#home').addEventListener('click', (e)=>{
        e.preventDefault()
        onNavigate('/wall')
    })

    //inyectando la ventana para subir post 
    wallPageContainer.querySelector('#uploadPost').addEventListener('click', ()=>{
        const main = document.querySelector('#root')
        deployUploadPost(main)
    })

   
    const postContainer = wallPageContainer.querySelector('.wallPage_wallPost')


    //ejecuto la funcion que se subscribe y me ejecutara este callback cada que algo cambie.
    subscribeToRealTimePosts((posts)=>{

        postContainer.innerHTML = ''

        posts.forEach(post => {
            const postUser = Post(post) //retirnar cada post pintado

            postContainer.appendChild(postUser) // todos los post se pintan
        });

    })

    return wallPageContainer
}


export {
    createWallPage
}