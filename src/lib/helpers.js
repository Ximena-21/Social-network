
import { uploadPost } from "../components/uploadPostContainer.js"
import { editPost } from "../components/editPostContainer.js"
import { commentComponent } from "../components/commentComponent.js"




function toggleMenu(menuHidden) {
    menuHidden.classList.toggle('sideMenu_hidden')
    // btn.classList.toggle('sideMenu_hidden')
}

function deployUploadPost(main) {

    const uploadPostWindow = uploadPost()

    main.appendChild(uploadPostWindow)
    const btnCloseWindowPost = document.querySelector('#btnClose')
    btnCloseWindowPost.addEventListener('click', () => {
        uploadPostWindow.remove()
    })
}

function deployEditPost(main, post) {

    const editPostWindow = editPost(post)
 
    main.appendChild(editPostWindow)
    const btnCloseWindowPost = document.querySelector('#btnClose')
    btnCloseWindowPost.addEventListener('click', () => {
        editPostWindow.remove()
    })
}


function rendercomment (comments, container, userCurrent, post) {

    if(comments === undefined || comments.length === 0){
        container.textContent = ''
    } else {
        comments.forEach((comment)=>{
            const commentBox = commentComponent(comment, userCurrent, post)
            container.appendChild(commentBox)
        })
    }    
}


export {
    toggleMenu,
    deployUploadPost,
    deployEditPost, 
    rendercomment,
}