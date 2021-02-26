const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = state.newMessageText;

            return {
                ...state,
                messages: [...state.messages, {id: 6, message: newMessage, likesCount: 0}],
                newMessageText: ''
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };

        default :
            return state;
    }
};

export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;
