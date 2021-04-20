import React from 'react';
import s from './Post.module.css';
import userPhoto from '../../../../assets/img/user-logo.png';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.info_wrapper}>
                <div className={s.photo}>
                    <img src={userPhoto} />
                </div>
                <div className={s.info}>
                    <div className={s.name}><b>{'User name'}</b></div>
                    <div>{props.message}</div>
                </div>
            </div>
            <div className={s.likeblock}>
                <span> <i class="far fa-heart"></i> </span>{props.like}
            </div>
        </div>
    )
}

export default Post;