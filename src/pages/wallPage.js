import { renderPost } from "../components/post.js";
import { sideMenu } from "../components/sideMenu.js";
import { onNavigate } from "../helpers.js";

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
    const post = renderPost(postContainer)


    // console.log({
    //     'renderPost': post,
    //     'cntenedor': postContainer
    // })
    //postContainer.appendChild(post)

    return wallPageContainer
}


export {
    createWallPage
}