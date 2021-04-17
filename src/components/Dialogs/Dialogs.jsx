import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormControllers/FormControllers';
import { maxLengthCreator, required } from '../../Validators/Validators';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsItems = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} /> );
    let messagesItems = state.messages.map( m => <Message message={m.message} key={m.id}/> );

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

// REDIRECT
    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsItems }
            </div>
            <div className={s.messages}>
                <div>{ messagesItems }</div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

let maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]} name='newMessageBody' placeholder={'Enter your message'} />
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;