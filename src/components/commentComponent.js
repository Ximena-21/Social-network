//import { editComment } from "../firebase/posts.js"
// import { deleteComment } from "../firebase/posts.js"
// import { editCommentComponent } from "./editComment.js"
//import { deployEditComment } from "../lib/helpers.js"

function commentComponent (comment, actuallyUser) {
    const commentContainer = document.createElement('div')
    commentContainer.className = 'comment'

    commentContainer.innerHTML = `
        <div class="comment_boxComment">

            <div class="comment_userComment">
                <img src="${comment.photoUser  || '../img/avatar.png'}" alt="" class="comment_photoUser">
                <span class="comment_nameUser">${comment.nameUser || 'Usuario'}</span>
            </div>

            <span class="comment_txtComment">${comment.text}</span>
        </div>


        <div class="comment_editComent--box">
            <img src="" alt="" class="comment_icon edit">
            <img src="" alt="" class="comment_icon delete">
        </div>
    `

    const editIcon = commentContainer.querySelector('.edit')
    const deleteIcon = commentContainer.querySelector('.delete')

    if(actuallyUser=== comment.idUserC){
        editIcon.src = '../img/edit.png'
        deleteIcon.src = '../img/delete.png'
    }

    editIcon.addEventListener('click', ()=>{
        console.log('QUIERE EDITAR EL COMENTARIO ', comment.text)
        // const commentContent = commentContainer.querySelector('.comment_txtComment')
        // // commentContent.remove()

        // commentContent.innerHTML = `
        // <form action="" method="comment" id="formComment">
        //     <input required type="text" name="commentText" id="postText" class="editComment_text">
        // </form>
        // `
        // const input = commentContent.querySelector('postText')
        // input.value = ""

        // const form = commentContent.querySelector('formComment')
        // form.addEventListener('submit', (e)=>{
        //     e.preventDefault()
        //     console.log('ENVIAR EDICION AL COMENTARIO')
        // })
        //const meterComentario = commentContainer.querySelector('comment_boxComment')
        // meterComentario.appendChild(editCommentComponent(comment))
        // deployEditComment(main, comment)
        //editComment(comment)
    })
    deleteIcon.addEventListener('click', ()=>{
        console.log('QUIERE eliminar EL COMENTARIO ',)
        //deleteComment(comment)
    })


    return commentContainer
}


export {
    commentComponent
}