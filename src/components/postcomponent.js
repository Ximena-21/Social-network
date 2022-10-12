import { deployEditPost } from "../lib/helpers.js"

const Post = (userPost) => {
    const postContainer = document.createElement('div')
    postContainer.className = 'postContainer'

   // const post = userPost.user

    console.log(userPost)

    const likes = userPost.likes?.length || 0 

    postContainer.innerHTML = `

        <div class="postContainer_headerPost">
            <div postContainer_editBox>
                <img src="../img/edit.png" alt="" class="postContainer_editIcon" id="edit">
                <img src="../img/delete.png" alt="" class="postContainer_editIcon" id="delete">
            </div>
            <div class="postContainer_userBox">
                <img src="${userPost.user.photoUser || '../img/avatar.png'}" alt="" class="postContainer_user">
                <span class="postContainer_userName">${userPost.user.displayName}</span>
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
    postContainer.querySelector('#edit').addEventListener('click', (e)=>{
        console.log(e)
    })

     //inyectando la ventana para editar post 
    postContainer.querySelector('#edit').addEventListener('click', (e)=>{
    //e.preventDefault()
    const main = document.querySelector('#root')
    deployEditPost(main, userPost)
    })


    //llams el boton y le asignas la funcion 

    return postContainer
}


export {
    Post,
}