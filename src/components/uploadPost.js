function uploadPost() {
    const uploadPostContainer = document.createElement('div')
    uploadPostContainer.className = 'uploadPost'

    uploadPostContainer.innerHTML = `
        <div class="uploadPost_container">
            <button class="uploadPost_btnClosed" id="btnClose">x</button>
            <input type="file" name="postImg" id="postImg" class="uploadPost_img">
            <input type="text" name="postText" id="postText" class="uploadPost_text">
            <button class="uploadPost_btn" id="btnPost">Subir Post</button>
        </div>
    `
<<<<<<< HEAD
    
=======

   uploadPostContainer.querySelector('#postImg').onchange = (event)=>{
        console.log('elevento que entra', event)
        const fr  = new FileReader();
        fr.readAsDataURL(event.target.files[0]);
        fr.onload = function(){
            const image =uploadPostContainer.querySelector('#preview');
            image.src = fr.result;
        };
   }
 
>>>>>>> 65cbe9403bffd1fbdcdc59e13a157637fbfe55d8
    return uploadPostContainer
}

export { uploadPost }