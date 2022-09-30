const postProfile = () =>{
    const postProfileContainer = document.createElement('div')
    postProfileContainer.className = 'postProfile'

    postProfileContainer.innerHTML = `
     <h1> Pagina en contruccion perfil con post</h1>
    `
    return postProfileContainer
}

export {
    postProfile
}