import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/img/user-logo.png';

const ProfileInfo = (props) => {

if (!props.profile) {
    return <Preloader/>
}
    return (
        <div className={s.profileInfoWrapper}>
            <div className={s.discriptionBlock}>
                <div>
                    <div className={s.userName}>{props.profile.fullName}</div>
                    <img className={s.profile_img} src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto} />
                </div>
                <div className={s.person_discription}>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                    <div className={s.discription}>
                        <div>{'Job Status:' + ' '}{props.profile.lookingForAJob ? 'looking for a job' : 'not looking for a job'}</div>
                        <div>{'Facebook:' + ' '}{props.profile.contacts.facebook ? props.profile.contacts.facebook : ''}</div>
                        <div>{'GitHub:' + ' '}{props.profile.contacts.github ? props.profile.contacts.github : ''}</div>
                        <div>{'Instagram:' + ' '}{props.profile.contacts.instagram ? props.profile.contacts.instagram : ''}</div>
                        <div>{'VK:' + ' '}{props.profile.contacts.vk ? props.profile.contacts.vk : ''}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;