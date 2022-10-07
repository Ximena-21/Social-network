function uploadPost() {
    const uploadPostContainer = document.createElement('div')
    uploadPostContainer.className = 'uploadPost'

    uploadPostContainer.innerHTML = `
        <form action="" method="post" class="uploadPost_container">
            <button class="uploadPost_btnClosed" id="btnClose">x</button>
            <input type="file" name="postImg" id="postImg" class="uploadPost_img">
            <div  class="uploadPost_previewContainer" id="previewContainer" >
                <img src="../img/more.png" id="preview" class="uploadPost_preview"/>
            </div>
            <input type="text" name="postText" id="postText" class="uploadPost_text">
            <button class="uploadPost_btn" id="btnPost">Subir Post</button>      
        </form>
    `

   uploadPostContainer.querySelector('#postImg').onchange = (event)=>{
        console.log('elevento que entra', event)
        const fr  = new FileReader();
        fr.readAsDataURL(event.target.files[0]);
        fr.onload = function(){
            const image =uploadPostContainer.querySelector('#preview');
            image.src = fr.result;
        };
   }
 
    return uploadPostContainer
}


export { uploadPost }