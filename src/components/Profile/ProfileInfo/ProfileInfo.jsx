import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
if (!props.profile) {
    return <Preloader/>
}
    return (
        <div className={s.profileInfoWrapper}>
            <div className={s.discriptionBlock}>
                <img className={s.profile_img} src={props.profile.photos.large} />
                <div className={s.person_discription}>
                    <ProfileStatus status={'Hello'}/>
                    <div className={s.discription}>discription</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;