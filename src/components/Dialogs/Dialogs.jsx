import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsItems = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} /> );
    let messagesItems = state.messages.map( m => <Message message={m.message} key={m.id}/> );
    let newMessageBody = state.newMessageBody; // value

    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.updateNewMessageBody(body);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsItems }
            </div>
            <div className={s.messages}>
                <div>{ messagesItems }</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;