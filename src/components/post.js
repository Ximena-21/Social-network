import { dataPost } from "./dataPost.js"

const post = (userPost) => {
    const postContainer = document.createElement('div')
    postContainer.className = 'postContainer'

    postContainer.innerHTML = `
        <div class="postContainer_headerPost">
            <div class="postContainer_userBox">
                <img src="../img/avatar.png" alt="" class="postContainer_user">
                <span class="postContainer_userName">${userPost.userName}</span>
            </div>
            <div class="postContainer_interactionBox">
                <img src="../img/commet.png" alt="comment" class="postContainer_icon" id= "comment">
                <img src="../img/like.png" alt="like" class="postContainer_icon" id="like">
            </div>
        </div>
        <div class="postContainer_postImage">
            <img src="${userPost.post}" alt="imgPost" class="postContainer_postImage--img">
        </div>
    `

    return postContainer
}

function renderPost (container) {
    const data = dataPost
    const containerPost = container

    console.log(data)
    data.forEach(user => {
        console.log(user.userName)
        const postUser = post(user)
        containerPost.appendChild(postUser)
        console.log(post(user))
    });

    return
}

export {
    post,
    renderPost
}