import { connect } from 'react-redux';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/store';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
       dialogsPage: state.dialogsPage,
       isAuth: state.auth.isAuth
    }
};
let mapDispatchProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchProps) (Dialogs);

export default DialogsContainer;