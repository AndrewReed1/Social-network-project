import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsItem = props.posts.map ( p => <Post message={p.message} like={p.likesCount}/> );

    let newPostElement = React.createRef(); // value

    let onAddPost = () => { // Добавление сообщения
        props.addPost();
    }

    let onPostChange = () => { // Обновление текста сообщения
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.addPost}>
                <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea></div>
                <div><button onClick={onAddPost}>Add post</button></div>
            </div>
            <div className={s.posts}>
                { postsItem }
            </div>
        </div>
    )
}

export default MyPosts;