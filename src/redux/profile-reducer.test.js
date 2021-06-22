import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";


let state = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 10},
        {id: 2, message: 'How are you?', likesCount: 20},
        {id: 3, message: 'How ', likesCount: 25},
        {id: 4, message: 'are you?', likesCount: 5}
    ]
};



it('length posts should be incremented', () => {

    // 1. Test data

    let action = addPostActionCreator('Yo niggggaaasss');

    //2. Action
    let newState = profileReducer(state, action);

    //3. Expectation

   expect(newState.posts.length).toBe(5) ;

});

it('message of new post should be correct', () => {

    // 1. Test data

    let action = addPostActionCreator('Yo niggggaaasss');


    //2. Action
    let newState = profileReducer(state, action);

    //3. Expectation

    expect(newState.posts[4].message).toBe('Yo niggggaaasss') ;

});

it('after deleting length of message should be deleting', () => {

    // 1. Test data

    let action = deletePost(1);


    //2. Action
    let newState = profileReducer(state, action);

    //3. Expectation

    expect(newState.posts.length).toBe(3) ;

});

it(`after deleting length of message shouldn't be deleting if id is incorrect`, () => {

    // 1. Test data

    let action = deletePost(1000);


    //2. Action
    let newState = profileReducer(state, action);

    //3. Expectation

    expect(newState.posts.length).toBe(4) ;

});



