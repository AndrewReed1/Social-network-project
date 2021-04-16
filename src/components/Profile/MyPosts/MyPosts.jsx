import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsItem = props.posts.map ( p => <Post message={p.message} like={p.likesCount}/> );

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <div className={s.textBlock}>
                <h3>My posts</h3>
                <MyPostReduxForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsItem}
            </div>
        </div>
    )
}

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.addPost}>
            <div>
                <Field component={'input'} name={'newPostText'} placeholder={'Enter your message'} />
            </div>
            <div><button>Add post</button></div>
        </form>
    )
}

const MyPostReduxForm = reduxForm({form: 'addNewPostForm'})(MyPostForm);

export default MyPosts;