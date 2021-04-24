import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/img/user-logo.png';

const ProfileInfo = (props) => {

if (!props.profile) {
    return <Preloader/>
}

let FaceBookLink = props.profile.contacts.facebook;
let GitHubLink = props.profile.contacts.github;
let InstagramLink = props.profile.contacts.instagram;
let VkLink = props.profile.contacts.vk;

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
                        <div>{'Facebook:' + ' '}{FaceBookLink ? FaceBookLink : 'no information'}</div>
                        <div>{'GitHub:' + ' '}{GitHubLink ? GitHubLink : 'no information'}</div>
                        <div>{'Instagram:' + ' '}{InstagramLink ? InstagramLink : 'no information'}</div>
                        <div>{'VK:' + ' '}{VkLink ? VkLink : 'no information'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;