import { accessPostEdit, updatePost } from "../firebase/posts.js"

function editPost(post) {

    const editPostContainer = document.createElement('div')
    editPostContainer.className = 'editPost'

    editPostContainer.innerHTML = `
        <form action="" method="post" class="editPost_container">
            <button class="editPost_btnClosed" id="btnClose"></button>
           
            <div  class="editPost_previewContainer" id="previewContainer" >
                <img src="${post.image}" id="preview" class="editPost_preview"/>
            </div>
            <input required type="text" name="postText" id="postText" class="editPost_text">
            <button class="editPost_btn" id="btnPost">Guardar</button>      
        </form>
    `

    const inputDescription = editPostContainer.querySelector('#postText')
    inputDescription.value = `${post.description}`


    const formEditPost =  editPostContainer.querySelector('.editPost_container')
    
    formEditPost.addEventListener('submit', (e)=>{
        e.preventDefault()

        accessPostEdit(post.id).then(()=>{

            updatePost(post.id, {description: inputDescription.value })
        }).then(()=>{
            
            editPostContainer.remove()
        })
    })

    return editPostContainer
}


export{
    editPost
}