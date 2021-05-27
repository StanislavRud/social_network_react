const ADD_MESSAGE = 'ADD-MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: newMessage, likesCount: 0}],
            };

        default :
            return state;
    }
};

export const addMessageCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;
