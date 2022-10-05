import { Post } from "../components/postcomponent.js";
import { sideMenu, toggleMenu } from "../components/sideMenu.js";
import {getMyPosts, subscribeToRealTimePosts} from '../firebase/posts.js'
import { onNavigate } from "../helpers.js";

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
        <img src="../img/homeFooter.png" alt="home" class="wallPage_footerMenu--icon" id="home">
        <img src="../img/search.png" alt="search" class="wallPage_footerMenu--icon" id="search">
        <img src="../img/share.png" alt="upload post" class="wallPage_footerMenu--icon" id="uploadPost">
        <img src="../img/user.png" alt="profile" class="wallPage_footerMenu--icon" id="profile">
    </div>
    `
    const btnMenu = wallPageContainer.querySelector('.wallPage_menuHidden')

    wallPageContainer.querySelector('.wallPage_logo').addEventListener('click', (e)=>{
        e.preventDefault()
        onNavigate('/')
    })
    
    wallPageContainer.querySelector('#header').appendChild(sideMenu())
    const menuHidden = wallPageContainer.querySelector('.sideMenu')
    
    
    btnMenu.addEventListener('click', (e)=>{
        //e.preventDefault()
        console.log('desplegar el menu')
        toggleMenu(menuHidden, btnMenu)
        //wallPageContainer.querySelector('.wallPage_menuHidden').remove()
    })
    
    wallPageContainer.querySelector('#exitMenu').addEventListener('click', () => {
        console.log('cerrar menu')
        toggleMenu(menuHidden, btnMenu)
        //wallPageContainer.appendChild( wallPageContainer.querySelector('.wallPage_menuHidden'))
        //menuHidden.toggleClass('sideMenu_hidden')
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