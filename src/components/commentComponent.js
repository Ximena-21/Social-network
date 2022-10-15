
function commentComponent (comment, actuallyUser, post) {
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
        const commentContent = commentContainer.querySelector('.comment_txtComment')

        commentContent.innerHTML = `
        <form action="" method="comment" id="formComment">
            <input required type="text" name="commentText" id="postText" class="editComment_text">
        </form>
        `
        const input = commentContent.querySelector('#postText')
        input.value = comment.text

        const idCommentActually = comment.idComment

        // comment.filter((element)=>{
        //     if(element.idComment === idCommentActually) {
        //         console.log('comentario encontrado', element)
        //         return element
        //     }
        // })

        console.log({
            comentarios: comment,
            idComentarioActual: idCommentActually,
            post: post
        })

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