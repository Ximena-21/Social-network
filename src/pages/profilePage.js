import { postProfile } from "../components/postProfile.js";

const createProfilePage = () => {
    const profilePageContainer = document.createElement('div')
    profilePageContainer.className = 'profilePage'

    // profilePageContainer.innerHTML = `
    // `

    profilePageContainer.appendChild(postProfile())

    return profilePageContainer
}

export {
    createProfilePage
}