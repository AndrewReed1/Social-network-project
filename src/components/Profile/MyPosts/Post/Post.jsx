import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
    <div className={s.item}>
        <img alt='' src='https://pbs.twimg.com/media/DZN-NEiUQAUHQ21.png' />
        {props.message}
        <div>
            <span> <i class="far fa-heart"></i> </span>{props.like}
        </div>
    </div>
    )
}

export default Post;