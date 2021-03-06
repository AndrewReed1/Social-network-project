import React, { useEffect, useState } from 'react';
import s from './ProfileStatus.module.css';

const ProfileHooksStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={props.isOwner ? s.span: s.span2} >
            {!editMode &&
                <div>
                    <span onClick={ props.isOwner ? activateEditMode : null }>{props.isOwner ? props.status || 'Set Status': props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={ onStatusChange } value={status} onBlur={ deactivateEditMode } autoFocus={true} className={s.input}/>
                </div>
            }
        </div>
    )
};

export default ProfileHooksStatus;