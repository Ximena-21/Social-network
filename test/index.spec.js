// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });


//src server.json
// {
//     "rewrites": [
//         {"source": "/**", "destination": "index.html"}
//     ]
// }


import { onNavigate } from '../src/lib/helpers.js'

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
    it('should render InitPage', ()=>{
        //document.body.innerHTML = '<section id="root"></section>'
        onNavigate('/')

        //console.log('contenido: ', document.getElementById('root').textContent);
        expect(document.getElementById('.welcomeBox_tittle').textContent).toEqual('Tejiendo Comunidad')
    })
    // it('test de onNavigate', ()=>{
    //     document.body.innerHTML = '<section id="root"></section>'
    //     onNavigate('/register', mockRoutes)
    //     console.log('contenido: ', document.getElementById('root').textContent);
    //     expect(document.getElementById('root').textContent.trim()).toEqual('Mock Template register 1')
    // })
})
