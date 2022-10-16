
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
function accessPostEdit(idPost) {

    return getDoc(doc(postCollection, idPost))
}

//editar post y guardar cambios
function updatePost(idPost, dataUpdated) {

    return updateDoc(doc(postCollection, idPost), dataUpdated)
}

//eliminar post 
function deletePost(idPost) {

    return deleteDoc(doc(postCollection, idPost));
}

//dar me gusta
function likesPost(idPost) {

    const idUser = auth.currentUser.uid
    const postRef = doc(postCollection, idPost)

    return updateDoc(postRef, { likes: arrayUnion(idUser) })
}

// quitar el me gusta
function desLikesPost(idPost) {

    const idUser = auth.currentUser.uid

    return updateDoc(doc(postCollection, idPost), { likes: arrayRemove(idUser) })
}

//agregar comentario
function addComment(idPost, textComment) {
    const user = auth.currentUser
    const postRef = doc(postCollection, idPost)

    const dataComment = {
        idUserC: user.uid,
        photoUser: user.photoURL,
        nameUser: user.displayName,
        text: textComment,
        idComment: new Date().getTime()

    }

    return updateDoc(postRef, { comment: arrayUnion(dataComment) })

}

//editar guardar cambios comentario
function updateComment(post, newComment) {

    const postRef = doc(postCollection, post.id)

    const newComments = [...post.comment].map(comment=>{
        if(comment.idComment === newComment.idComment) return newComment
        return comment
    })

    return updateDoc(postRef, { comment: newComments })
}

//eliminar comentario
function deleteComment (post,deletedComment) {
    const postRef = doc(postCollection, post.id)

    const newComments = [...post.comment].filter(comment=> comment.idComment !== deletedComment.idComment )
    
    return updateDoc(postRef, { comment: newComments })
}


//renderizar -----> real time para los post
function subscribeToRealTimePosts(callback) {

    const orderedPosts = query(postCollection, orderBy('time', 'desc'), limit(20))

    const unsub = onSnapshot(orderedPosts, (result) => {

        const posts = result.docs.map(post => {
            //se esta tomando una copia de la data del post y se le esta incluyendo el id del post
            //porque se necesitara mas tarde
            console.log('comment post', post.data().comment)
            return { ...post.data(), id: post.id }
        })
        //fx que pintara cada post
        callback(posts)
    });

    return unsub
}


function getMyPosts(idUser) {

    const myPosts = query(postCollection, where('user.idUser', "==", idUser.uid), limit(20))


    return getDocs(myPosts).then((datos) => {

        const posts = datos.docs.map(post => {
            return post.data()
        })

        return posts
    })

}

//perfil .... 
// async function getMyPosts(idUser) {

//     const myPosts = query(postCollection, where('user.idUser', "==", 'idUser.uid'), limit(20))


//    const querySnapshot =  await getDocs(myPosts)

//     const posts = querySnapshot.docs.map(post => post.data())

//     console.log(posts)

// //    querySnapshot.forEach((data)=>{
// //         const posts = datos.docs
// //    })

// //    .then((datos) => {

// //         const posts = datos.docs.map(post => {
// //             return post.data()
// //         })

// //         //console.log('estos son tus post')
// //         return posts
// //     })

// }


export {
    subscribeToRealTimePosts,
    getMyPosts,
    setPostFireBase,
    updatePost,
    accessPostEdit,
    deletePost,
    likesPost,
    desLikesPost,
    addComment,
    updateComment,
    deleteComment,
    // editComment
}