//import { accessCommentEdit, updateComment } from "../firebase/posts.js"

export function editCommentComponent (comment) {

   // const comment = post.comment

    const editCommentContainer = document.querySelector('div')
    editCommentContainer.className = 'editComment'

    editCommentContainer.innerHTML = `
        <form action="" method="post" class="editComment_container">
            
            <input required type="text" name="postText" id="postText" class="editComment_text">
            <button class="editComment_btn" id="saveChanges">Guardar</button>      
        </form>
    `

    const inputComment = editCommentContainer.querySelector('#postText')
    inputComment.value = `${comment.text}`

    // editCommentContainer.querySelector('#closeEdit').addEventListener('click', ()=>{
    //     editCommentContainer.remove()
    // })

    const formEditComment =  editCommentContainer.querySelector('.editComment_container')

    formEditComment.addEventListener('submit', (e)=>{
        e.preventDefault()

        console.log('se va a editar el comentario')
        // accessCommentEdit(comment).then(()=>{
        //     updateComment(comment, {text: inputComment.value })
        // }).then(()=>{
        //     editCommentContainer.remove()
        // })

    })

    return editCommentContainer
}


/* <button class="editComment_btnClosed" id="closeEdit">x</button> */