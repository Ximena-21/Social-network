import { Post } from "../components/post.js";
import {getMyPosts, subscribeToRealTimePosts} from '../firebase/posts.js'

const createWallPage = () =>{

    const wallPageContainer = document.createElement('div')
    wallPageContainer.className = 'wallPage'

    wallPageContainer.innerHTML = `
    <div class="wallPage_headerBox sideMenu">
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
    //wallPageContainer.querySelector('.wallPage_headerBox sideMenu').appendChild(sideMenu())
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
            const postUser = Post(post)

            if(post.time){

                console.log(post.time.toDate())
            }

            postContainer.appendChild(postUser)
        });

    })

    return wallPageContainer
}


export {
    createWallPage
}