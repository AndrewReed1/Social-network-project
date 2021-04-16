import React from 'react';
import s from './Post.module.css';
import userPhoto from '../../../../assets/img/user-logo.png';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
                <img src={userPhoto} />
                {props.message}
            </div>
            <div className={s.likeblock}>
                <span> <i class="far fa-heart"></i> </span>{props.like}
            </div>
        </div>
    )
}

export default Post;