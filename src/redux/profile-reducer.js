import { profileAPI, UsersAPI } from '../api/api';

// Constants
const ADD_POST = 'PROFILE/ADD-POST';
const SET_USER_PROFILE = 'PROFILE/SET-USER-PROFILE';
const SET_STATUS = 'network/dprofile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'network/dprofile/SAVE_PHOTO_SUCCESS';
const DELETE_POST = 'network/dprofile/DELETE-POST';

// InitialState
let initialState = {
    posts: [
        {id: 1, message: 'My personal ID is 13531', likesCount: 10},
        {id: 2, message: 'React/Redux libraries', likesCount: 20},
        {id: 3, message: 'BootCamp is Portfolio project', likesCount: 30}
    ],
    profile: null,
    status: ''
};

// profileReducer
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter( p => p.id !== action.id)};
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        } case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        } case SAVE_PHOTO_SUCCESS: {
            return {
                ...state, profile: { ...state.profile, photos: action.photos }
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
export const deletePost = (id) => ( {type: DELETE_POST, id} );

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