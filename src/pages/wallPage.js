import { Post } from "../components/postcomponent.js";
import { sideMenu,} from "../components/sideMenu.js";
import {getMyPosts, subscribeToRealTimePosts} from '../firebase/posts.js'
import { deployUploadPost, onNavigate, toggleMenu } from "../helpers.js";


const createWallPage = () =>{

    const wallPageContainer = document.createElement('div')
    wallPageContainer.className = 'wallPage'

    wallPageContainer.innerHTML = `
    <div class="wallPage_headerBox" id='header'>
        <img src="../img/logoK.png" alt="logo Knitters" class="wallPage_logo">
        <img src="../img/menuHidden.png" alt="logo Knitters" class="wallPage_menuHidden">
    </div>

    <div class="wallPage_wallPost">

    </div>

    <div class="wallPage_footerMenu">
        <button class="wallPage_footerMenu--icon icon_search" id="search"></button>
        <button class="wallPage_footerMenu--icon icon_home" id="home"></button>
        <button class="wallPage_footerMenu--icon icon_uploadPost" id="uploadPost"></button>
        <button class="wallPage_footerMenu--icon icon_profile" id="profile"></button>
    </div>
    `
    const btnMenu = wallPageContainer.querySelector('.wallPage_menuHidden')
    //const btnMobile = wallPageContainer.querySelector('.wallPage_footerMenu--icon')

    wallPageContainer.querySelector('.wallPage_logo').addEventListener('click', (e)=>{
        e.preventDefault()
        onNavigate('/wall')
    })
    
    wallPageContainer.querySelector('#header').appendChild(sideMenu()) //inyectando el menu desplegable 
    const menuHidden = wallPageContainer.querySelector('.sideMenu')
    
    
    btnMenu.addEventListener('click', ()=>{
        toggleMenu(menuHidden, btnMenu)
    })
    
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

    wallPageContainer.querySelector('#uploadPost').addEventListener('click', (e)=>{
        //e.preventDefault()
        const main = document.querySelector('#root')
        deployUploadPost(main)
    })



    const postContainer = wallPageContainer.querySelector('.wallPage_wallPost')
    //.appendChild(post())
    // const post = renderPost(postContainer)


    // console.log({
    //     'renderPost': post,
    //     'cntenedor': postContainer
    // })
    //postContainer.appendChild(post)

    getMyPosts().then(datos=>{
        console.log(datos,'my posts')
    })

    //ejecuto la funcion que se subscribe y me ejecutara este callback cada que algo cambie.
    subscribeToRealTimePosts((posts)=>{

        postContainer.innerHTML = ''

        posts.forEach(post => {
            const postUser = Post(post) //retirnar cada post pintado

            if(post.time){

                console.log(post.time.toDate())
            }

            postContainer.appendChild(postUser) // todos los post se pintan
        });

    })

    return wallPageContainer
}


export {
    createWallPage
}