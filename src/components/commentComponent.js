import { deleteComment, updateComment } from "../firebase/posts.js"

function commentComponent (comment, actuallyUser, post) {

    const isCurrentUserComment = actuallyUser=== comment.idUserC
    
    const commentContainer = document.createElement('div')
    commentContainer.className = 'comment'


    const editIcons = `
        <img src="../img/edit.png" alt="" class="comment_icon edit">
        <img src="../img/delete.png" alt="" class="comment_icon delete">
    `

    const cancelEditIcons = `
        <img src="../img/delete.png" alt="" class="comment_icon cancel">
    `

    commentContainer.innerHTML = `
        <div class="comment_boxComment">

            <div class="comment_userComment">
                <img src="${comment.photoUser  || '../img/avatar.png'}" alt="" class="comment_photoUser">
                <span class="comment_nameUser">${comment.nameUser || 'Usuario'}</span>
            </div>

            <span class="comment_txtComment">${comment.text}</span>
        </div>

        <div class="comment_editComent--box">
            ${isCurrentUserComment ? editIcons : ''}
        </div>
    `

    const deleteIcon = commentContainer.querySelector('.delete')
    const editIcon = commentContainer.querySelector('.edit')
    const commentContent = commentContainer.querySelector('.comment_txtComment')
    const iconsContent = commentContainer.querySelector('.comment_editComent--box')

    // iniciar el modo edicion
    const startEditing = () => {
        commentContent.innerHTML = `
            <form action="" method="comment" id="formComment">
                <input required type="text" name="commentText" id="postText" class="editComment_text">
            </form>
        `
        const input = commentContent.querySelector('#postText')
        const editForm = commentContent.querySelector('#formComment')
        input.value = comment.text

        editForm.addEventListener('submit',(e)=>{
            e.preventDefault()
            
            const newComment = {
                ...comment,
                text: input.value
            }

            updateComment(post,newComment)

        })
        //cambiar los icoinos para que solo se pueda cancelar
        iconsContent.innerHTML = cancelEditIcons

        const cancelIcon = iconsContent.querySelector('.cancel')

        cancelIcon.addEventListener('click',cancelEditing)

    }

    const cancelEditing = () => {

        iconsContent.innerHTML = editIcons
        commentContent.innerHTML = comment.text
        
        const editIcon = commentContainer.querySelector('.edit')
        const deleteIcon = commentContainer.querySelector('.delete')

        editIcon.addEventListener('click', startEditing)
        deleteIcon.addEventListener('click', deleteComment)
        
    }

    const deleteCommentPost = () => {
            console.log('QUIERE eliminar EL COMENTARIO ',)
            deleteComment(post,comment)
    }
    
    
    //permitir acceso de edicion
    if(isCurrentUserComment){
        editIcon.addEventListener('click', startEditing)
        deleteIcon.addEventListener('click', deleteCommentPost)
    }

    return commentContainer
}


export {
    commentComponent
}