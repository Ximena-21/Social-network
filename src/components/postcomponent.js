
const Post = (userPost) => {
    const postContainer = document.createElement('div')
    postContainer.className = 'postContainer'


    console.log(userPost)

    const likes = userPost.likes?.length || 0 

    postContainer.innerHTML = `

        <div class="postContainer_headerPost">
            <div class="postContainer_userBox">
                <img src="../img/avatar.png" alt="" class="postContainer_user">
                <span class="postContainer_userName">${userPost.nameUser}</span>
            </div>
        </div>

        <div>
            ${userPost.description || ''}
        </div>
            
        <div class="postContainer_postImage">
            <img src="${userPost.image}" alt="imgPost" class="postContainer_postImage--img">
        </div>

        <div class="postContainer_interactionBox">

            <div>
                <img src="../img/commet.png" alt="comment" class="postContainer_icon" id= "comment">
                <input type='text' placeholder='comentario'/>
            </div>

            <div>
                <img src="../img/like.png" alt="like" class="postContainer_icon" id="like">
                <span>${likes}</span>
            </div>

        </div>

        
        <div >
            <p>comentarios</p>
        </div>
            
    `

    return postContainer
}


export {
    Post,
}