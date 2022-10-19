const myPosts = [
    {
        "time": {
            "seconds": 1665580404,
            "nanoseconds": 264000000
        },
        "idPost": "",
        "user": {
            "photoUser": "https://ui-avatars.com/api/?name=Lumi009&background=d3f95a",
            "displayName": "Lumi009",
            "idUser": "b56UgDls7UQaqhwR6ddhuCgxYr62"
        },
        "likes": [
            "TC2HbShyIXUUx1ErFSt4BbjbAGr2"
        ],
        "comment": [],
        "description": "Esta es una Virgen de fatima muy bonita",
        "image": "https://i.ibb.co/QpMJkmZ/IMG-20200416-100808.jpg"
    },
    {
        "image": "https://i.ibb.co/8xFPXZW/IMG-20200525-233654.jpg",
        "likes": [],
        "idPost": "",
        "description": "Estas son unas virgenes de guadalupe",
        "time": {
            "seconds": 1665547034,
            "nanoseconds": 149000000
        },
        "user": {
            "idUser": "b56UgDls7UQaqhwR6ddhuCgxYr62",
            "displayName": "Lumi009",
            "photoUser": "https://ui-avatars.com/api/?name=Lumi009&background=d3f95a"
        },
        "comment": []
    },
    {
        "image": "https://i.ibb.co/w6KkSyS/FB-IMG-1591882074901.jpg",
        "likes": [],
        "description": "otra descripcion",
        "comment": [],
        "user": {
            "photoUser": "https://ui-avatars.com/api/?name=Lumi009&background=d3f95a",
            "idUser": "b56UgDls7UQaqhwR6ddhuCgxYr62",
            "displayName": "Lumi009"
        },
        "idPost": "",
        "time": {
            "seconds": 1665543042,
            "nanoseconds": 159000000
        }
    },
    {
        "image": "https://i.ibb.co/p3WWQkg/IMG-20200307-113205.jpg",
        "idPost": "",
        "description": "estas son unas virgenes tejidas muy bonitas",
        "likes": [
            "b56UgDls7UQaqhwR6ddhuCgxYr62",
            "TC2HbShyIXUUx1ErFSt4BbjbAGr2",
            "3cZ53h4BUIVb9DBf7KKobzGE3hG3",
            "luhJgKbRBCZpz1RdZO0bnLfsx8h2"
        ],
        "user": {
            "displayName": "Lumi009",
            "idUser": "b56UgDls7UQaqhwR6ddhuCgxYr62",
            "photoUser": "https://ui-avatars.com/api/?name=Lumi009&background=d3f95a"
        },
        "time": {
            "seconds": 1665582160,
            "nanoseconds": 36000000
        },
        "comment": [
            {
                "idComment": 1665758245039,
                "text": "unas virgenes muy bellas",
                "idUserC": "3cZ53h4BUIVb9DBf7KKobzGE3hG3",
                "photoUser": "https://lh3.googleusercontent.com/a/ALm5wu2WebrHTvo_9JzrtUIS_sYJCpMxlktVQAWZKsCU6w=s96-c",
                "nameUser": "Ximena Anzola"
            },
            {
                "idComment": 1665758259278,
                "nameUser": "Ximena Anzola",
                "text": "otro comentario",
                "photoUser": "https://lh3.googleusercontent.com/a/ALm5wu2WebrHTvo_9JzrtUIS_sYJCpMxlktVQAWZKsCU6w=s96-c",
                "idUserC": "3cZ53h4BUIVb9DBf7KKobzGE3hG3"
            }
        ]
    },
    {
        "description": "Hermosa Virgen de Guadalupe",
        "image": "https://i.ibb.co/nbw3D1d/IMG-20200307-113335.jpg",
        "time": {
            "seconds": 1665525965,
            "nanoseconds": 291000000
        },
        "comment": [],
        "likes": [],
        "user": {
            "photoUser": "https://ui-avatars.com/api/?name=Lumi009&background=d3f95a",
            "idUser": "b56UgDls7UQaqhwR6ddhuCgxYr62",
            "displayName": "Lumi009"
        }
    }
]

const allPosts = [
    {
        "time": {
            "seconds": 1665580404,
            "nanoseconds": 264000000
        },
        "idPost": "",
        "user": {
            "photoUser": "https://ui-avatars.com/api/?name=Lumi009&background=d3f95a",
            "displayName": "Lumi009",
            "idUser": "b56UgDls7UQaqhwR6ddhuCgxYr62"
        },
        "likes": [
            "TC2HbShyIXUUx1ErFSt4BbjbAGr2"
        ],
        "comment": [],
        "description": "Esta es una Virgen de fatima muy bonita",
        "image": "https://i.ibb.co/QpMJkmZ/IMG-20200416-100808.jpg"
    },
    {
        "image": "https://i.ibb.co/8xFPXZW/IMG-20200525-233654.jpg",
        "likes": [],
        "idPost": "",
        "description": "Estas son unas virgenes de guadalupe",
        "time": {
            "seconds": 1665547034,
            "nanoseconds": 149000000
        },
        "user": {
            "idUser": "b56UgDls7UQaqhwR6ddhuCgxYr62",
            "displayName": "Lumi009",
            "photoUser": "https://ui-avatars.com/api/?name=Lumi009&background=d3f95a"
        },
        "comment": []
    },
    {
        "image": "https://i.ibb.co/w6KkSyS/FB-IMG-1591882074901.jpg",
        "likes": [],
        "description": "otra descripcion",
        "comment": [],
        "user": {
            "photoUser": "https://ui-avatars.com/api/?name=Lumi009&background=d3f95a",
            "idUser": "b56UgDls7UQaqhwR6ddhuCgxYr62",
            "displayName": "Lumi009"
        },
        "idPost": "",
        "time": {
            "seconds": 1665543042,
            "nanoseconds": 159000000
        }
    },
    {
        "image": "https://i.ibb.co/p3WWQkg/IMG-20200307-113205.jpg",
        "idPost": "",
        "description": "estas son unas virgenes tejidas muy bonitas",
        "likes": [
            "b56UgDls7UQaqhwR6ddhuCgxYr62",
            "TC2HbShyIXUUx1ErFSt4BbjbAGr2",
            "3cZ53h4BUIVb9DBf7KKobzGE3hG3",
            "luhJgKbRBCZpz1RdZO0bnLfsx8h2"
        ],
        "user": {
            "displayName": "Lumi009",
            "idUser": "b56UgDls7UQaqhwR6ddhuCgxYr62",
            "photoUser": "https://ui-avatars.com/api/?name=Lumi009&background=d3f95a"
        },
        "time": {
            "seconds": 1665582160,
            "nanoseconds": 36000000
        },
        "comment": [
            {
                "idComment": 1665758245039,
                "text": "unas virgenes muy bellas",
                "idUserC": "3cZ53h4BUIVb9DBf7KKobzGE3hG3",
                "photoUser": "https://lh3.googleusercontent.com/a/ALm5wu2WebrHTvo_9JzrtUIS_sYJCpMxlktVQAWZKsCU6w=s96-c",
                "nameUser": "Ximena Anzola"
            },
            {
                "idComment": 1665758259278,
                "nameUser": "Ximena Anzola",
                "text": "otro comentario",
                "photoUser": "https://lh3.googleusercontent.com/a/ALm5wu2WebrHTvo_9JzrtUIS_sYJCpMxlktVQAWZKsCU6w=s96-c",
                "idUserC": "3cZ53h4BUIVb9DBf7KKobzGE3hG3"
            }
        ]
    },
    {
        "description": "Hermosa Virgen de Guadalupe",
        "image": "https://i.ibb.co/nbw3D1d/IMG-20200307-113335.jpg",
        "time": {
            "seconds": 1665525965,
            "nanoseconds": 291000000
        },
        "comment": [],
        "likes": [],
        "user": {
            "photoUser": "https://ui-avatars.com/api/?name=Lumi009&background=d3f95a",
            "idUser": "b56UgDls7UQaqhwR6ddhuCgxYr62",
            "displayName": "Lumi009"
        }
    },
    {
        "image": "https://i.ibb.co/8xFPXZW/IMG-20200525-233654.jpg",
        "likes": [],
        "idPost": "",
        "description": "Estas son unas virgenes de guadalupe",
        "time": {
            "seconds": 1665547034,
            "nanoseconds": 149000000
        },
        "user": {
            "idUser": "b56UgDls7UQaqhwR6ddhuCgxYr62",
            "displayName": "Lumi009",
            "photoUser": "https://ui-avatars.com/api/?name=Lumi009&background=d3f95a"
        },
        "comment": []
    },
    {
        "image": "https://i.ibb.co/w6KkSyS/FB-IMG-1591882074901.jpg",
        "likes": [],
        "description": "otra descripcion",
        "comment": [],
        "user": {
            "photoUser": "https://ui-avatars.com/api/?name=Lumi009&background=d3f95a",
            "idUser": "b56UgDls7UQaqhwR6ddhuCgxYr62",
            "displayName": "Lumi009"
        },
        "idPost": "",
        "time": {
            "seconds": 1665543042,
            "nanoseconds": 159000000
        }
    },
]

const newPost = {
    "time": {
        "seconds": 1665580404,
        "nanoseconds": 264000000
    },
    "idPost": "",
    "user": {
        "photoUser": "https://ui-avatars.com/api/?name=Lumi009&background=d3f95a",
        "displayName": "Lumi009",
        "idUser": "b56UgDls7UQaqhwR6ddhuCgxYr62"
    },
    "likes": [
        "TC2HbShyIXUUx1ErFSt4BbjbAGr2"
    ],
    "comment": [],
    "description": "Esta es una Virgen de fatima muy bonita",
    "image": "https://i.ibb.co/QpMJkmZ/IMG-20200416-100808.jpg"
}

let allDataMockup = {
    myPosts,
    newPost,
    allPosts
}



export {
    allDataMockup,
}