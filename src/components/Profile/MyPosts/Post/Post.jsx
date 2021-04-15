import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
    <div className={s.item}>
        <div>
        <img src='https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png'/>
        {props.message}
        </div>
        <div className={s.likeblock}>
            <span> <i class="far fa-heart"></i> </span>{props.like}
        </div>
    </div>
    )
}

export default Post;