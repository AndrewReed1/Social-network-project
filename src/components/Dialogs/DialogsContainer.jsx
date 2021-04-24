import { connect } from 'react-redux';
import { sendMessageCreator } from '../../redux/store';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
       dialogsPage: state.dialogsPage
    }
};

let mapDispatchProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchProps),
    withAuthRedirect
)(Dialogs);