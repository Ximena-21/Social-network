import { setPostFireBase } from "../firebase/posts.js"
import { changeUploadImg, uploadImgWeb} from "../lib/uploadPost.js"




function uploadPost() {
    const uploadPostContainer = document.createElement('div')
    uploadPostContainer.className = 'uploadPost'

    uploadPostContainer.innerHTML = `
        <form action="" method="post" class="uploadPost_container">
            <button class="uploadPost_btnClosed" id="btnClose"></button>
            <div  class="uploadPost_previewContainer" id="previewContainer" >
                <label for="postImg" class="uploadPost_previewContainer--label">
                    Seleccionar Imagen
                    <input required type="file" name="postImg" id="postImg" class="uploadPost_img">
                    <img for="postImg" src="../img/more.png" id="preview" class="uploadPost_preview"/>
                </label>
            </div>
            <input required type="text" name="postText" id="postText" class="uploadPost_text">
            <button class="uploadPost_btn" id="btnPost">Subir Post</button>      
        </form>
    `
    const formUploadPost = uploadPostContainer.querySelector('.uploadPost_container')
    let urlImg = ""
    uploadPostContainer.querySelector('#postImg').addEventListener('change', async (e) => {
        
        const image = await changeUploadImg(e)
        console.log('image', image)

        const urlImgWeb = await uploadImgWeb(image)
        
        urlImg = urlImgWeb
    })  

    
    formUploadPost.addEventListener('submit', (e)=>{
        e.preventDefault()
        const description = document.querySelector('#postText').value
        setPostFireBase(urlImg, description)
        .then(()=>{
            uploadPostContainer.remove()
        })
    })
 
    return uploadPostContainer
}


export { uploadPost }