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
            newMessageText: 'New message'
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

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageText,
            likesCount: 0
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText){
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) { // {type: 'ADD-POST'}
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }


};

export default store;
window.store = store;
