import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return  {
                ...state,
                ...action.payload,
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching }
        }
        default :
            return state;

    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const getAuthUserData = () => (dispatch) =>{

    dispatch(toggleIsFetching(true));
    authAPI.authMe()
        .then(response => {
            dispatch(toggleIsFetching(false));
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })

};

export const login = (email, password, rememberMe) => (dispatch) =>{
    
    dispatch(toggleIsFetching(true));
    authAPI.login(email, password, rememberMe)
        .then(response => {
            dispatch(toggleIsFetching(false));
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                dispatch(stopSubmit('login', {_error: 'E-mail or Password is wrong'}))
            }
        })

};

export const logout = () => (dispatch) =>{

    dispatch(toggleIsFetching(true));
    authAPI.logout()
        .then(response => {
            dispatch(toggleIsFetching(false));
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })

};


export default authReducer;
