
const changeUploadImg = (event) => {
    
    const uploadedFile = event.target.files[0] //imagen que se cargo al input
    console.log('uploadedFile', uploadedFile)
    const readerFile = new FileReader(); //se crea objeto para que lea ficheros de app

    return new Promise((resolve, reject) => {
        
        readerFile.readAsDataURL(uploadedFile); //metodo leer contenido especifico, su atributo result contiene uinfomacion como datos url codificados en base64
    
        //evento .onload que ejecuta una funcion una vez se haya cargado el archivo
        readerFile.onload = function () {
            //etiqueta img a la que ser le pasara en su atributo src la ruta que se leyo del archivo 
            const image = document.querySelector('#preview');
            image.src = readerFile.result;

            console.log('readerFile.result', readerFile.result)
            
            resolve(uploadedFile)
        };
    })

}



//subir imagen a la web y obtener url 
async function uploadImgWeb (img) {

    const form = new FormData();
    form.append('image', img);

    const apiKey = 'f127ee3cf024ade5f59fd80c962e2940'
  
    const url = `https://api.imgbb.com/1/upload?key=${apiKey}`

    const petition = {
        method: 'POST',
        body: form
    }

    const response = await fetch(url,petition) 
    const dataResponse = await response.json()

    console.log('URL IMAGEN >>>>', dataResponse.data.url )
    return dataResponse.data.url

}



export {
    changeUploadImg,
    uploadImgWeb
}