import {rerenderEntireTree} from "../render";


let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hello', likesCount: 10},
            {id: 2, message: 'How are you?', likesCount: 20},
            {id: 3, message: 'How ', likesCount: 25},
            {id: 4, message: 'are you?', likesCount: 5}
        ],
        newPostText: 'Moskvich Club'
    },

    dialogsPage: {
        dialogs:[
            {id: 1, name: 'Stas'},
            {id: 2, name: 'Dimon'},
            {id: 3, name: 'Valera'},
            {id: 4, name: 'Ann'}
        ],
        messages:[
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'I am fine'},
            {id: 4, message: 'OK'},
            {id: 5, message: 'YOYOYOYO'}
        ],
        newMessageText: 'New message'
    },
    sideBar: {
        friendsData: [
            {id: 1, name: 'Stas'},
            {id: 2, name: 'Dimon'},
            {id: 3, name: 'Valera'}
        ]
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText,
        likesCount: 0
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}


export default state;
