import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

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
}

//AC
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

//THUNK
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    //dispatch(getAuthUserData());
    //dispatch(initializedSuccess);
    Promise.all([promise])
    .then( () => {
        dispatch(initializedSuccess());
    });
};

export default appReducer;