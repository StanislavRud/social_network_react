const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
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
            newMessageText: ''
        },
        
        sideBar: {
            friendsData: [
                {id: 1, name: 'Stas'},
                {id: 2, name: 'Dimon'},
                {id: 3, name: 'Valera'}
            ]
        }
    },
    _callSubscriber(){
        console.log('state changed');
    },


    getState() {
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },


    dispatch(action) { // {type: 'ADD-POST'}
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === ADD_MESSAGE ) {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText,
                likesCount: 0
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }


};
export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const addMessageCreator = () => ({ type: ADD_MESSAGE});

export const updateNewMessageTextCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });



export default store;
window.store = store;
