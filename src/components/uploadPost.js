//import { Post } from "./postcomponent.js"

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

    
    
    uploadPostContainer.querySelector('#postImg').onchange = (event) => {

        const uploadedFile = event.target.files[0] //imagen que se cargo al input
        const readerFile = new FileReader(); //se crea objeto para que lea ficheros de app
    
        readerFile.readAsDataURL(uploadedFile); //metodo leer contenido especifico, su atributo result contiene uinfomacion como datos url codificados en base64

        //evento .onload que ejecuta una funcion una vez se haya cargado el archivo
        readerFile.onload = function () {
            //etiqueta img a la que ser le pasara en su atributo src la ruta que se leyo del archivo 
            const image = uploadPostContainer.querySelector('#preview');
            image.src = readerFile.result;

            //asignarlo al boton de subir post!
            uploadImg(uploadedFile)

        };

        console.log({
            imagenCargada: uploadedFile,
            objetoAleer: readerFile,  
        })

    }

    return uploadPostContainer
}

//


 async function uploadImg (img) {

    const form = new FormData();
    form.append('image', img);

    const apiKey = 'f127ee3cf024ade5f59fd80c962e2940'
  
    const url = `https://api.imgbb.com/1/upload?key=${apiKey}`

    const petition = {
        method: 'POST',
        body: form
    }

    const response = await fetch(url,petition) // se esta haciendo la peticion pero falla
    const dataResponse = await response.json()
    
    // console.log({
    //     RESPUESTA: response,
    //     objeto: dataResponse
    // })

    return dataResponse.data.url

}



export { uploadPost }