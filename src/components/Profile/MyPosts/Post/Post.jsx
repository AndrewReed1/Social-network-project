import React from 'react';
import s from './Post.module.css';
import userPhoto from '../../../../assets/img/user-logo.png';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../../redux/profile-reducer';


const Post = (props) => {

    const dispatch = useDispatch();

    let onDeletePost = () => {
        dispatch(deletePost(props.id));
    };

    return (
        <div className={s.item}>
            <div className={s.info_wrapper}>
                <div className={s.postData}>
                    <div className={s.photo}>
                        <img src={userPhoto} />
                    </div>
                    <div className={s.info}>
                        <div className={s.name}><b>{'AndreBresso'}</b></div>
                        <div>{props.message}</div>
                    </div>
                </div>
                <div>
                    <button className={s.button} onClick={onDeletePost}>delete post</button>
                </div>

            </div>
            <div className={s.likeblock}>
                <span className={s.heartLike}>
                    <i class="far fa-heart"></i>
                </span>
                <div>
                    {props.like}
                </div>
            </div>
        </div>
    )
};

export default Post;