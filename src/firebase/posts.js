
import { 
    onSnapshot, 
    collection, 
    query, 
    orderBy, 
    limit, 
    where, 
    getDocs, 
    addDoc, 
    Timestamp, 
    updateDoc,
    doc, 
    getDoc, 
    setDoc,
    deleteDoc,
    arrayUnion,
    arrayRemove,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
//import { currentUser, } from "./authentication.js";
import { db, auth } from "./config.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";


//crear post
async function setPostFireBase(url, text) {
    const dbCollection = collection(db, "posts")
    const actuallyUser = auth.currentUser
    const dataPost = {
        image: url,
        idPost: '',
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

    const postRef = await addDoc(dbCollection, dataPost)
    //console.log(postRef.id)

    // const newRef = doc(dbCollection)
    // const addIdPost = await setDoc(newRef, postRef.id)

    // console.log('addIdPost', addIdPost)

    //dataPost.idPost = postRef.id

    // console.log({
    //     //idPost: postRef.id,
    //     post: dataPost,
    //     //POSTREF: postRef,
    //     // time: time,
    //     // otro: otherTime
    // })
}

//traer post a editar de firebase
function accessPostEdit (idPost) {
    const postRef = collection(db, 'posts')

    return getDoc(doc(postRef, idPost))
}


//editar post y guardar cambios
function updatePost (idPost, dataUpdated) {
    const postRef = collection(db, 'posts')

    return updateDoc(doc(postRef,idPost), dataUpdated)


}


//eliminar post 
function deletePost (idPost) {
    const postRefDelete = collection(db, 'posts')

    return deleteDoc(doc(postRefDelete, idPost));
}

//dar me gusta
function likesPost (idPost) {
    const idUser = auth.currentUser.uid
    const postRefLikes = collection(db, 'posts')

    // console.log("ESTE USUARIO ESTA DANDO LIKE", idPost, idUser)

    return updateDoc(doc(postRefLikes, idPost), { likes: arrayUnion(idUser) } )
    
    // { like: arrayUnion(idUser) }
}
// quitar el me gusta
function desLikesPost (idPost) {
    const idUser = auth.currentUser.uid
    const postRefLikes = collection(db, 'posts')

    // console.log("ESTE USUARIO ESTA DANDO LIKE", idPost, idUser)

    return updateDoc(doc(postRefLikes, idPost), { likes: arrayRemove(idUser) } )
}


//renderizar -----> real time para los post
function subscribeToRealTimePosts(callback) {

    const postsRef = collection(db, 'posts')

    const orderedPosts = query(postsRef, orderBy('time', 'desc'), limit(20))

    console.log('vamos apedir la data de nuevo')

    const unsub = onSnapshot(orderedPosts, (result) => {

        const posts = result.docs.map(post => {
            console.log('ESTE ES CADA', post.id)
            
            return {...post.data(), id: post.id}
            
            
        })

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
    setPostFireBase,
    updatePost, 
    accessPostEdit,
    deletePost,
    likesPost,
    desLikesPost
}