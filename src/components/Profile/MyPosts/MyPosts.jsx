import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../Validators/Validators';
import { Textarea } from '../../common/FormControllers/FormControllers';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength20 = maxLengthCreator(20);

const MyPosts = (props) => {
    let postsItem = props.posts.map( p => <Post id={p.id} message={p.message} like={p.likesCount}/> );

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <div className={s.textBlock}>
                <MyPostReduxForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsItem}
            </div>
        </div>
    )
};

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.addPost}>
            <h3>My posts</h3>
            <div className={s.input}>
                <Field component={Textarea} name={'newPostText'} placeholder={'Enter your message'} validate={[required, maxLength20]} />
            </div>
            <div>
                <button className={s.button}>Add post</button>
            </div>
        </form>
    )
};

const MyPostReduxForm = reduxForm({form: 'addNewPostForm'})(MyPostForm);

export default MyPosts;