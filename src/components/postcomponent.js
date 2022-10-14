import { auth } from "../firebase/config.js"
import { addComment, deletePost, desLikesPost, likesPost } from "../firebase/posts.js"
import { deployEditPost, rendercomment } from "../lib/helpers.js"
import { commentComponent } from "./commentComponent.js"

const Post = (userPost) => {
    const idUser = auth.currentUser

    const postContainer = document.createElement('div')
    postContainer.className = 'postContainer'


    const likes = userPost.likes?.length || 0 
    const comments = userPost.comment
    

    postContainer.innerHTML = `

        <div class="postContainer_headerPost">

            <div class="postContainer_editBox">
                <img src="" alt="" class="postContainer_editIcon" id="edit">
                <img src="" alt="" class="postContainer_editIcon" id="delete">
            </div>

            <div class="postContainer_userBox">
                <img src="${userPost.user.photoUser || '../img/avatar.png'}" alt="" class="postContainer_user">
                <span class="postContainer_userName">${userPost.user.displayName}</span>
            </div>

        </div>


        <div class="postContainer_description">${userPost.description || ''}</div>
        
        <div class="postContainer_postImage">
            <img src="${userPost.image}" alt="imgPost" class="postContainer_postImage--img">
        </div>

        <div class="postContainer_interactionBox">

            <form action="" method="commentPost" class="postContainer_interactionBox--comment" id='formComment'>
                <input required type='text' placeholder='comentario' id='textComment' class="postContainer_textComment"/>
                <img src="../img/commet.png" alt="comment" class="postContainer_icon" id= "comment" class="postContainer_iconComment">
            </form>

            <div class="postContainer_interactionBox--like">
                <img src="../img/like.png" alt="like" class="postContainer_icon" id="like">
                <span>${likes}</span>
            </div>

        </div>


        <div class="postContainer_comments">
            
        </div>     
    `

    const commentsContainer = postContainer.querySelector('.postContainer_comments')
    rendercomment(comments,commentsContainer, idUser.uid)


    
    //condicionar que los iconos solo aprezcan, si el idUser, coincide con el idUser del post
    const editIcon = postContainer.querySelector('#edit')
    const deleteIcon = postContainer.querySelector('#delete')
   
    if(idUser.uid===userPost.user.idUser){
        editIcon.src = '../img/edit.png'
        deleteIcon.src = '../img/delete.png'
    }

     //inyectando la ventana para editar post 
    postContainer.querySelector('#edit').addEventListener('click', ()=>{

    const main = document.querySelector('#root')
    deployEditPost(main, userPost)

    console.log('ESTOS SON LOS COMENTARIOS DE ESTE POST', comments)
    })

    //asignacion de funcion para eliminar post
    postContainer.querySelector('#delete').addEventListener('click', () =>{
        deletePost(userPost.id)

    })

    //funcion de dar y quitar like
    postContainer.querySelector('#like').addEventListener('click', () => {
        
        const likeArray = userPost.likes
    
        if(likeArray.includes(idUser.uid)){
            
            desLikesPost(userPost.id)
        }
        else{
            
            likesPost(userPost.id)
        }
    })

    //agregar comentario nuevo al post
    postContainer.querySelector('#formComment').addEventListener('submit', (e)=>{
        e.preventDefault()
        const text = postContainer.querySelector('#textComment').value

        addComment(userPost.id, text).then(()=>{

            comments.forEach((comment) => {
                const commentBox = commentComponent(idUser, comment)

                commentsContainer.appendChild(commentBox)
                
            });
       })

    })


    return postContainer
}


export {
    Post,
}