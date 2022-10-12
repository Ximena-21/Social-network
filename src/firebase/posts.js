
import { onSnapshot, collection, query, orderBy, limit, where, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
//import { currentUser, } from "./authentication.js";
import { db, auth } from "./config.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";


//crear post
async function setPostFireBase(url, text) {

    const actuallyUser = auth.currentUser
    const dataPost = {
        image: url,
        description: text,
        user: {
            idUser: actuallyUser.uid,
            displayName: actuallyUser.displayName,
            photoUser: actuallyUser.photoURL 
        },
        likes: [],
        comment: [],
        time: Timestamp.fromDate(new Date()),
    }

    const postRef = await addDoc(collection(db, "posts"), dataPost)

    dataPost.idPost = postRef.id

    console.log({
        //idPost: postRef.id,
        post: dataPost,
        //POSTREF: postRef,
        // time: time,
        // otro: otherTime
    })
}

//actualizar
//leer
//borrar


//POSTS



// OBTENER BASE DE DATOS 

// // Initialize Cloud Firestore and get a reference to the service
//const db = firebase.firestore();


//----------------------------------------------------------


//real time para los post
function subscribeToRealTimePosts(callback) {

    const postsRef = collection(db, 'posts')

    const orderedPosts = query(postsRef, orderBy('time', 'desc'), limit(20))

    console.log('vamos apedir la data de nuevo')

    const unsub = onSnapshot(orderedPosts, (result) => {

        const posts = result.docs.map(post => post.data())

        callback(posts)

    });

    return unsub
}

//perfil .... 
function getMyPosts(idUser) {

    const postsRef = collection(db, 'posts')


    const myPosts = query(postsRef, where('emailUser', "==", 'alguien@algo.com'), limit(20))


    return getDocs(myPosts).then((datos) => {

        const posts = datos.docs.map(post => {
            return post.data()
        })

        return posts

    })



}


//crear un post


//eliminar un post



//editar post >> hacer un comentario o dar like

//comentar

//like




export {
    subscribeToRealTimePosts,
    getMyPosts,
    setPostFireBase
}