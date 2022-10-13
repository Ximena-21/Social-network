import { auth } from "../firebase/config.js"
import { addComment, deletePost, desLikesPost, likesPost } from "../firebase/posts.js"
import { deployEditPost } from "../lib/helpers.js"

const Post = (userPost) => {
    const idUser = auth.currentUser.uid

    const postContainer = document.createElement('div')
    postContainer.className = 'postContainer'

    console.log(userPost)

    const likes = userPost.likes?.length || 0 

    postContainer.innerHTML = `

        <div class="postContainer_headerPost">
            <div postContainer_editBox>
                <img src="" alt="" class="postContainer_editIcon" id="edit">
                <img src="" alt="" class="postContainer_editIcon" id="delete">
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
                <form action="" method="commentPost" class="postContainer_comment" id='formComment'>
                    <input required type='text' placeholder='comentario' id='textComment'/>
                </form>
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
    //condicionar que los iconos solo aprezcan, si el idUser, coincide con el idUser del post
    const editIcon = postContainer.querySelector('#edit')
    const deleteIcon = postContainer.querySelector('#delete')
   
    if(idUser===userPost.user.idUser){
        editIcon.src = '../img/edit.png'
        deleteIcon.src = '../img/delete.png'
    }

     //inyectando la ventana para editar post 
    postContainer.querySelector('#edit').addEventListener('click', ()=>{

    const main = document.querySelector('#root')
    deployEditPost(main, userPost)
    })

    postContainer.querySelector('#delete').addEventListener('click', () =>{
        deletePost(userPost.id)

    })

    postContainer.querySelector('#like').addEventListener('click', () => {
        
        const likeArray = userPost.likes
    
        if(likeArray.includes(idUser)){
            
            desLikesPost(userPost.id)
        }
        else{
            
            likesPost(userPost.id)
        }
    })

    postContainer.querySelector('#formComment').addEventListener('submit', (e)=>{
        e.preventDefault()
        const text = postContainer.querySelector('#textComment').value

        addComment(userPost.id, text).then(()=>{
            console.log('se agrego comentario')
        })

    })


    return postContainer
}


export {
    Post,
}