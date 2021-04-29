import {profileAPI, UsersAPI} from '../api/api';

// Constants
const ADD_POST = 'network/dprofile/ADD-POST';
const SET_USER_PROFILE = 'network/dprofile/SET-USER-PROFILE';
const SET_STATUS = 'network/dprofile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'network/dprofile/SAVE_PHOTO_SUCCESS';

// InitialState
let initialState = {
    posts: [
        {id: 1, message: 'BootCamp social network', likesCount: 10, isLike: false},
        {id: 2, message: 'React/ Redux', likesCount: 20, isLike: false},
        {id: 3, message: 'BootCamp social network', likesCount: 30, isLike: false}
    ],
    profile: null,
    status: ''
};

// profileReducer
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
        let newPost = {
            id: 5,
            message: action.newPostText,
            likesCount: 0
        }
        return {
            ...state,
            posts: [...state.posts, newPost]
            };
        } case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        } case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        } case SAVE_PHOTO_SUCCESS: {
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        }
        default: return state;
    }
};

// ActionCreator
export const addPostActionCreator = (newPostText) => ( {type: ADD_POST, newPostText} );
export const setUserProfile = (profile) => ( {type: SET_USER_PROFILE, profile} );
export const setStatus = (status) => ( {type: SET_STATUS, status} );
export const savePhotoSuccess = (photos) => ( {type: SAVE_PHOTO_SUCCESS, photos} );

// Redux-thunk
export const getUserProfile = (userId) => (dispatch) => {
    UsersAPI.getProfile(userId)
    .then(response => {
        dispatch(setUserProfile(response.data));
    });
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
    .then(response => {
        dispatch(setStatus(response.data));
    });
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
    .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};

export const savePhoto = (file) => (dispatch) => {
    profileAPI.savePhoto(file)
    .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
    });
};

export const saveProfile = (profile) => (dispatch) => {
    profileAPI.saveProfile(profile).then(response => { })
};

export default profileReducer;