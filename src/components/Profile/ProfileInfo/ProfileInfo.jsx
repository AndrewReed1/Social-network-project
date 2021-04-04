import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
if (!props.profile) {
    return <Preloader/>
}
    return (
        <div className={s.profileInfoWrapper}>
            <div className={s.discriptionBlock}>
                <img className={s.profile_img} src={props.profile.photos.large}/>
            </div>
        </div>
    )
}

export default ProfileInfo;