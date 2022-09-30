const post = () => {
    const postContainer = document.createElement('div')
    postContainer.className = 'postContainer'

    postContainer.innerHTML = `
        <div class="postContainer_headerPost">
            <div class="postContainer_userBox">
                <img src="" alt="" class="postContainer_user">
                <span class="postContainer_userName">Username</span>
            </div>
            <div class="postContainer_interactionBox">
                <img src="" alt="comment" class="postContainer_comment">
                <img src="" alt="like" class="postContainer_like">
            </div>
        </div>
        <div class="postContainer_postImage">
            <img src="" alt="imgPost" class="postContainer_postImage--img">
        </div>
    `

    return postContainer
}

export {
    post
}