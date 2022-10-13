
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
import { db, auth } from "./config.js";


const postCollection = collection(db, 'posts') 

//crear post
async function setPostFireBase(url, text) {
    
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

    const postRef = await addDoc(postCollection, dataPost)
}

//traer post a editar de firebase
function accessPostEdit (idPost) {

    return getDoc(doc(postCollection, idPost))
}

//editar post y guardar cambios
function updatePost (idPost, dataUpdated) {

    return updateDoc(doc(postCollection,idPost), dataUpdated)
}

//eliminar post 
function deletePost (idPost) {

    return deleteDoc(doc(postCollection, idPost));
}

//dar me gusta
function likesPost (idPost) {
   
    const idUser = auth.currentUser.uid
    const postRef= doc(postCollection, idPost)

    return updateDoc(postRef, { likes: arrayUnion(idUser) } )
}

// quitar el me gusta
function desLikesPost (idPost) {
    
    const idUser = auth.currentUser.uid

    return updateDoc(doc(postCollection, idPost), { likes: arrayRemove(idUser) } )
}

//agregar comentario
function addComment (idPost, textComment) {
    const idUser = auth.currentUser.uid
    const postRef= doc(postCollection, idPost)

    const dataComment = {
        idUserC: idUser,
        text: textComment
    }

    return updateDoc(postRef, { comment: arrayUnion(dataComment) } )

    
}


//renderizar -----> real time para los post
function subscribeToRealTimePosts(callback) {

    const orderedPosts = query(postCollection, orderBy('time', 'desc'), limit(20))

    const unsub = onSnapshot(orderedPosts, (result) => {

        const posts = result.docs.map(post => {
            //se esta tomando una copia de la data del post y se le esta incluyendo el id del post
            //porque se necesitara mas tarde
            return {...post.data(), id: post.id}         
        })
        //fx que pintara cada post
        callback(posts)
    });

    return unsub
}

//perfil .... 
function getMyPosts(idUser) {

    const myPosts = query(postCollection, where('emailUser', "==", 'alguien@algo.com'), limit(20))


    return getDocs(myPosts).then((datos) => {

        const posts = datos.docs.map(post => {
            return post.data()
        })

        return posts
    })

}


export {
    subscribeToRealTimePosts,
    getMyPosts,
    setPostFireBase,
    updatePost, 
    accessPostEdit,
    deletePost,
    likesPost,
    desLikesPost, 
    addComment 
}