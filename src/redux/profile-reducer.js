const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 10},
        {id: 2, message: 'How are you?', likesCount: 20},
        {id: 3, message: 'How ', likesCount: 25},
        {id: 4, message: 'are you?', likesCount: 5}
    ],
        newPostText: 'Moskvich Club'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = state.newPostText;

            return  {
                ...state,
                posts: [...state.posts, {id: 5, message: newPost, likesCount: 0} ],
                newPostText: ''
            }
        }
        case
            UPDATE_NEW_POST_TEXT: {

            return {
                ...state,
                newPostText: action.newText
            };
        }
        default :
            return state;

    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
