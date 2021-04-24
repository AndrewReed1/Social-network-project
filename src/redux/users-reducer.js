import { UsersAPI } from '../api/api';

// Constants
const FOLLOW = 'network/users/FOLLOW';
const UNFOLLOW = 'network/users/UNFOLLOW';
const SET_USERS = 'network/users/SET_USERS';
const SET_CURRENT_PAGE = 'network/users/SET_CURRENT_PAGE ';
const SET_TOTAL_USERS_COUNT = 'network/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FEATCHING = 'network/users/TOGGLE_IS_FEATCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'network/users/TOGGLE_IS_FOLLOWING_PROGRESS';

// InitialState
let initialState = {
    users:[ ],
    pageSize: 5,
    totalUsersCount: 80,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

// usersReducer
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                      return {...u, followed: true}  
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                      return {...u, followed: false}  
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {
                ...state, users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: state.totalUsersCount
            }
        }
        case TOGGLE_IS_FEATCHING: {
            return {
                ...state, isFetching: action.isFeatching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFeatching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default: return state;
    }
};

// ActionCreator
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFeatching = (isFeatching) => ({type: TOGGLE_IS_FEATCHING, isFeatching });
export const toggleFollowingProgress = (isFeatching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFeatching, userId});

// Redux-thunk
export const getUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFeatching(true));
        dispatch(setCurrentPage(page));
        UsersAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFeatching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        UsersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
};

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        UsersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
};

export default usersReducer;