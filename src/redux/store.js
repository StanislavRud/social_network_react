import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);

    }


};

export default store;
window.store = store;
