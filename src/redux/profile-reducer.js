import {profileAPI, UsersAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 8},
        {id: 2, message: 'nonono', likesCount: 13},
        {id: 3, message: 'React the way of samurai', likesCount: 14}
    ],
    newPostText: '',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case ADD_POST: {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        }
        return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
            };
        } case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        } case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        default: return state;
    }
}

//AC
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ( {type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ( {type: SET_STATUS, status});

//THUNK
export const getUserProfile = (userId) => (dispatch) => {
    UsersAPI.getProfile(userId)
    .then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
    .then(response => {
        dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
    .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}

export default profileReducer;