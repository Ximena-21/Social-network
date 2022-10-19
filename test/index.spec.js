
import { allDataMockup, myPosts } from '../src/firebase/__mocks__/data.js'
import { onNavigate } from '../src/lib/index.js'

jest.mock("../src/firebase/authentication.js")
jest.mock("../src/firebase/config.js")
jest.mock("../src/firebase/posts.js")

// // const mockTemplateLogin = () => {
// //     const loginContainer = document.createElement('div');
// //     loginContainer.innerHTML = '<h1>Mock Template Login 1</h1>'
// //     return loginContainer
// // }

// // const mockTemplateRegister = () => {
// //     const registerContainer = document.createElement('div');
// //     registerContainer.innerHTML = '<h1>Mock Template register 1 </h1>'
// //     return registerContainer
// // }

// // const mockRoutes = {
// //     '/login': mockTemplateLogin(),
// //     '/register': mockTemplateRegister(),
// // }

describe('onNavigate', ()=>{
    it('should render Init Page', ()=>{
        document.body.innerHTML = `<main id="root"></main>`;
        onNavigate('/')

        expect(document.querySelector('.welcomeBox_tittle').textContent).toEqual('Tejiendo Comunidad')
    })
    it('should render Login Page', ()=>{
        document.body.innerHTML = `<main id="root"></main>`;
        onNavigate('/login')

        expect(document.querySelector('.loginPage_msg').textContent).toEqual('Haz parte de esta comunidad')
    })
    it('should render Register Page', ()=>{
        document.body.innerHTML = `<main id="root"></main>`;
        onNavigate('/register')

        expect(document.querySelector('.registerPage_welcome').textContent).toEqual('Bienvenido')
    })
    it('should render Wall Page', ()=>{
        document.body.innerHTML = `<main id="root"></main>`;
        onNavigate('/wall')

        expect(document.querySelector('.wallPage_wallPost') instanceof HTMLElement).toEqual(true)
    })
    it('should render Profile Page', ()=>{
        document.body.innerHTML = `<main id="root"></main>`;
        onNavigate('/profile')

        expect(document.querySelector('.profilePage_wallPost') instanceof HTMLElement).toEqual(true)
    })

})

describe('my Profile', ()=>{

    it('should render all my posts', done => {
        document.body.innerHTML = `<main id="root"></main>`;
        onNavigate('/profile')

        setTimeout(()=>{
            expect(document.querySelector('.profilePage_wallPost').childNodes.length).toEqual(allDataMockup.myPosts.length)
            done()
        },500)
    })

})

describe('wall pages', ()=>{

    it('should render all posts', done => {
        document.body.innerHTML = `<main id="root"></main>`;
        onNavigate('/wall')

        setTimeout(()=>{
            expect(document.querySelector('.wallPage_wallPost').childNodes.length).toEqual(allDataMockup.allPosts.length)
            done()
        },500)
    })

})
