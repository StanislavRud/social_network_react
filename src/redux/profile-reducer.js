const profileReducer = (state, action) => {

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

    return state
}
