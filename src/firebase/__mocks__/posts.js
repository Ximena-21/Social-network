import { allDataMockup } from "./data"

const subscribeToRealTimePosts = (callback) => {
    // return Promise.resolve()
    callback(allDataMockup.allPosts)

}


const getMyPosts = () => {
    return Promise.resolve(allDataMockup.myPosts)
}

const setPostFireBase = () => {
    return Promise.resolve()
}

const updatePost = () => {
    return Promise.resolve()
}

const accessPostEdit = () => {
    return Promise.resolve()
}

const deletePost = () => {
    return Promise.resolve()
}

const likesPost = () => {
    return Promise.resolve()
}

const desLikesPost = () => {
    return Promise.resolve()
}

const addComment = () => {
    return Promise.resolve()
}

const updateComment = () => {
    return Promise.resolve()
}

const deleteComment = () => {
    return Promise.resolve()
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
    addComment,
    updateComment,
    deleteComment,
}