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

    return uploadPostContainer
}

export { uploadPost }