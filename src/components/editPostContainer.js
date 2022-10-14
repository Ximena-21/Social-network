import { accessPostEdit, updatePost } from "../firebase/posts.js"

function editPost(post) {
    // console.log({
    //     POST: post,
    // })
    const editPostContainer = document.createElement('div')
    editPostContainer.className = 'editPost'

    editPostContainer.innerHTML = `
        <form action="" method="post" class="editPost_container">
            <button class="editPost_btnClosed" id="btnClose">x</button>
           
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
   // let urlImg = ""
    // editPostContainer.querySelector('#postImg').addEventListener('change', async (e) => {
        
    //     const image = await changeUploadImg(e)

    //     const urlImgWeb = await uploadImgWeb(image)
        
    //     urlImg = urlImgWeb

    // })  

    
    formEditPost.addEventListener('submit', (e)=>{
        e.preventDefault()
       // console.log( inputDescription.value)
        accessPostEdit(post.id).then(()=>{
            updatePost(post.id, {description: inputDescription.value })
        }).then(()=>{
            editPostContainer.remove()
        })

        // const description = document.querySelector('#postText').value
        // setPostFireBase(urlImg, description)
    })

    return editPostContainer
}

// <input type="file" name="postImg" id="postImg" class="editPost_img"> 
//linea 14

export{
    editPost
}