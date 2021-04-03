const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Victor'}
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your IT-KAMASUTRA?'},
        {id: 3, message: 'YO!'}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
switch (action.type) { 
    case UPDATE_NEW_MESSAGE_BODY:
        return {
            ...state,
            newMessageBody: action.body
        };
    case SEND_MESSAGE:
        let body = state.newMessageBody;
        return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages, {id: 4, message: body}]
        };
    default: return state;
    }
}

export default dialogsReducer;