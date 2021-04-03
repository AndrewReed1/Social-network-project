import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

if (!props.profile) {
    return <Preloader/>
}

    return (
        <div className={s.profileInfoWrapper}>
            <div>
                <img alt='' className={s.img} src='https://libmir.com/i/26/221726/i_034.png' />
            </div>
            <div className={s.discriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
            </div>
        </div>
    )
}

export default ProfileInfo;