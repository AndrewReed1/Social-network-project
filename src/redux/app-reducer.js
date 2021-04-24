import { getAuthUserData } from './auth-reducer';

// Constants
const INITIALIZED_SUCCESS = 'network/app/INITIALIZED_SUCCESS';

// InitialState
let initialState = {
    initialized: false
};

// appReducer
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        };
        default: return state;
    }
};

// ActionCreator
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

// Redux-thunk
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
};

export default appReducer;