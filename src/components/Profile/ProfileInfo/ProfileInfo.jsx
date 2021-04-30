import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/img/user-logo.png';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    };
    let aboutMe = props.profile.aboutMe
    let FaceBookLink = props.profile.contacts.facebook;
    let GitHubLink = props.profile.contacts.github;
    let InstagramLink = props.profile.contacts.instagram;
    let VkLink = props.profile.contacts.vk;

    // UploadPhoto
    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };

    return (
        <div className={s.profileInfoWrapper}>
            <div className={s.discriptionBlock}>
                <div>
                    <div className={s.userName}>{props.profile.fullName}</div>
                    <img className={s.profile_img} src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto} />
                </div>
                <div className={s.person_discription}>
                    <ProfileStatus isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus} />
                    <div className={s.discription}>
                        <div><b>Job Status: </b>{props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
                        {props.profile.lookingForAJob && 
                        <div><b>My professional skills: </b>{props.profile.lookingForAJobDiscription}</div>}
                        <div><b>About Me: </b>{aboutMe ? aboutMe : 'no information'}</div>
                        <div><b>Facebook: </b>{FaceBookLink ? FaceBookLink : 'no information'}</div>
                        <div><b>GitHub: </b>{GitHubLink ? GitHubLink : 'no information'}</div>
                        <div><b>Instagram: </b>{InstagramLink ? InstagramLink : 'no information'}</div>
                        <div><b>VK: </b>{VkLink ? VkLink : 'no information'}</div>
                    </div>
                    <div><b>{'Upload photo: '}</b>{props.isOwner && <input className={s.uploadPhoto} onChange={ onMainPhotoSelected } type={'file'}/>}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;