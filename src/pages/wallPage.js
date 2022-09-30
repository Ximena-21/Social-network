import { post } from "../components/post.js";
import { sideMenu } from "../components/sideMenu.js";
import { onNavigate } from "../helpers.js";

const createWallPage = () =>{

    const wallPageContainer = document.createElement('div')
    wallPageContainer.className = 'wallPage'

    wallPageContainer.innerHTML = `
    <div class="wallPage_headerBox sideMenu">
        <h1>PAGINA EN CONSTRUCCION </h1>
    </div>

    <div class="wallPage_wallPost">

    </div>

    <div class="wallPage_footerMenu">
        <img src="" alt="home" class="wallPage_footerMenu--icon">
        <img src="" alt="search" class="wallPage_footerMenu--icon">
        <img src="" alt="upload post" class="wallPage_footerMenu--icon">
        <img src="" alt="profile" class="wallPage_footerMenu--icon">
    </div>
    `
    //wallPageContainer.querySelector('.wallPage_headerBox sideMenu').appendChild(sideMenu())
    //wallPageContainer.querySelector('.wallPage_wallPost').appendChild(post())

    return wallPageContainer
}


export {
    createWallPage
}