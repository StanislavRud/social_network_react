const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        // {id: 1, followed: false, fullName: 'Stas', status: 'I love react', location: {city: 'Romny', country: 'Ukraine'} },
        // {id: 2, followed: false, fullName: 'Ann', status: 'I am happy', location: {city: 'Kharkov', country: 'Ukraine'} },
        // {id: 3, followed: true, fullName: 'Dimon', status: 'Sysadmin', location: {city: 'Gorlovka', country: 'Ukraine'} },
        // {id: 4, followed: true, fullName: 'Andrey', status: 'Go go go', location: {city: 'Chipil', country: 'Ukraine'} },
    ],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {

                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default :
            return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
